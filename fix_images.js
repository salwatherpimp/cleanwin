const fs = require("fs");

// Read the current file
const content = fs.readFileSync("src/pages/index.tsx", "utf8");

// Replace all img tags with Image components and add width/height props
const fixedContent = content
  // Replace img opening tags with Image
  .replace(/<img\s+/g, "<Image ")
  // Add width and height props for logo images (160x80)
  .replace(
    /(<Image\s+src="[^"]*logo-[^"]*"[^>]*)(style=)/g,
    "$1width={160}\n                        height={80}\n                        $2",
  )
  // Add width and height props for service images (400x300)
  .replace(
    /(<Image\s+src="\{service\.image\}"[^>]*)(style=)/g,
    "$1width={400}\n                        height={300}\n                        $2",
  );

// Write the fixed content back
fs.writeFileSync("src/pages/index.tsx", fixedContent);
console.log("Fixed all img tags to Image components with proper dimensions");
