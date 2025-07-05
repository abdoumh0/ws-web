"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { getSession, getSessionToken } from "./actions";
import { AccountInfo } from "./types";

type Session = AccountInfo | null;

type SessionContextType = {
  session: Session;
  setSession: (session: Session) => void;
  refreshSession: () => Promise<void>;
  token: string | null;
};

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session>(null);
  const [token, setToken] = useState<string | null>(null);

  const refreshSession = async () => {
    const sessionData = await getSession();
    const sessionToken = await getSessionToken();
    setSession(sessionData);
    setToken(sessionToken);
  };

  useEffect(() => {
    refreshSession();
  }, []);

  return (
    <SessionContext.Provider value={{ session, setSession, refreshSession, token }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) throw new Error("useSession must be used within a SessionProvider");
  return context;
}; 