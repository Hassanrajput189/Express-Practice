const fs = require('fs');
const path = require('path');

const dir = "C:/Users/hassa/OneDrive - MUET/Files And Docs/Web Development/JavaScript/Backend_JS/";

fs.readdir(dir, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }
    
    const fileExtensions = {};

    files.forEach(file => {
        const fileExtension = path.extname(file);
        if (fileExtension) {
            const newDir = dir + fileExtension.slice(1); // Remove the dot from the file extension
            if (!fileExtensions[fileExtension]) {
                fileExtensions[fileExtension] = newDir;
                fs.mkdir(newDir, (err) => {
                    if (err) {
                        if (err.code !== 'EEXIST') { // Ignore if folder already exists
                            console.error('Error creating folder:', err);
                        }
                    } else {
                        console.log('Folder created successfully:', newDir);
                    }
                });
            }
            const oldPath = dir + file;
            const newPath = newDir + '/' + file;
            fs.rename(oldPath, newPath, (err) => {
                if (err) {
                    console.error('Error moving file:', err);
                } else {
                    console.log('File moved successfully:', file);
                }
            });
        }
    });
});
