const svgToIco = require("svg-to-ico");
const fs = require("fs");
const path = require("path");

async function generateFavicon() {
  try {
    console.log("Converting SVG to ICO...");

    const sourceFile = path.join(__dirname, "../public/favicon.svg");
    const targetFile = path.join(__dirname, "../public/favicon.ico");

    await svgToIco(sourceFile, targetFile, {
      sizes: [16, 32, 48, 64],
    });

    console.log("Successfully created favicon.ico!");
  } catch (error) {
    console.error("Error generating favicon:", error);
  }
}

generateFavicon();
