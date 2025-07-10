import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify, SignJWT, importPKCS8 } from 'jose';

// RSA Key setup for API route
const getPrivateKey = async () => {
  const privateKeyPem = process.env.JWT_PRIVATE_KEY;
  if (!privateKeyPem) {
    throw new Error('JWT_PRIVATE_KEY environment variable is not set');
  }
  
  // If the key is base64 encoded, decode it
  const key = privateKeyPem.includes('-----BEGIN') 
    ? privateKeyPem 
    : Buffer.from(privateKeyPem, 'base64').toString();
    
  return await importPKCS8(key, 'RS256');
};

export async function POST(request: NextRequest) {
  try {
    const refreshToken = request.cookies.get("refresh")?.value;
    
    if (!refreshToken) {
      return NextResponse.json(
        { error: "No refresh token found" },
        { status: 401 }
      );
    }
    
    // Verify refresh token using HMAC
    const secret = process.env.JWT_REFRESH_SECRET;
    if (!secret) {
      return NextResponse.json(
        { error: "Refresh secret not configured" },
        { status: 500 }
      );
    }
    
    const { payload } = await jwtVerify(refreshToken, new TextEncoder().encode(secret), {
      algorithms: ["HS256"],
    }) as { payload: any };
    
    // Check if refresh token is valid and not expired
    if (!payload || !payload.exp || payload.exp * 1000 < Date.now()) {
      return NextResponse.json(
        { error: "Refresh token expired or invalid" },
        { status: 401 }
      );
    }
    
    // Check if it's a refresh token
    if (payload.type !== 'refresh') {
      return NextResponse.json(
        { error: "Invalid token type" },
        { status: 401 }
      );
    }
    
    // Create new session token
    const privateKey = await getPrivateKey();
    const newSessionToken = await new SignJWT({ 
      user: payload.user, 
      type: 'access',
      expires: new Date(Date.now() + 5 * 60 * 1000) // 5 minutes
    })
      .setProtectedHeader({ alg: "RS256" })
      .setIssuedAt()
      .setExpirationTime("5 minutes")
      .sign(privateKey);
    
    // Create response with new session cookie
    const response = NextResponse.json({ 
      success: true, 
      message: "Token refreshed successfully" 
    });
    
    response.cookies.set("session", newSessionToken, {
      httpOnly: true,
      expires: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
      domain: "localhost" //TODO: change to env var
    });
    
    return response;
  } catch (error) {
    console.error('Error in refresh route:', error);
    return NextResponse.json(
      { error: "Failed to refresh token" },
      { status: 500 }
    );
  }
} 