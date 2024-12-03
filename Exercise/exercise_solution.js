// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

import fs from "fs/promises"
import fsn from "fs"
import path from "path"

let basepath = "C:\\Users\\hassa\\OneDrive\\Files\\Pictures\\Pictures\\Saved Pictures";

let files = await fs.readdir(basepath)

for (const item of files) {
    console.log("running for ", item);
    const ext = item.split(".")[item.split(".").length - 1];
    if (ext !== "js" && ext !== "json" && item.split(".").length > 1) {
        const targetDir = path.join(basepath, ext); // Absolute path to folder
        if (!fsn.existsSync(targetDir)) {
            fs.mkdir(targetDir); // Create folder if it doesn't exist
        }
        const sourcePath = path.join(basepath, item); // Absolute path to source file
        const destinationPath = path.join(targetDir, item); // Absolute path to destination file
        fs.rename(sourcePath, destinationPath); // Move the file
    }
}