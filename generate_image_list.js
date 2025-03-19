const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'assets/images/gallery');
const outputFilePath = path.join(directoryPath, 'images.txt');

// Lees de bestanden in de directory
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory: ' + err);
    }

    // Filter de bestanden om alleen afbeeldingen te behouden (jpg, jpeg, png, gif)
    const imageFiles = files.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.gif'].includes(ext);
    });

    // Schrijf de bestandsnamen naar images.txt
    fs.writeFile(outputFilePath, imageFiles.join('\n'), (err) => {
        if (err) {
            return console.error('Unable to write to file: ' + err);
        }
        console.log('Image list has been saved to images.txt');
    });
});