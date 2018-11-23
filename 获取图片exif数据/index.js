const { ExifImage } = require("exif");
const path = require('path')

const file = path.resolve(__dirname, './test.JPG')
try{
    new ExifImage({ image:file }, (error, exifData) => {
        if (error) console.log("Error" + error.message);
        else console.log(exifData); 
    });
} catch (error) {
    console.log("Error: " + error.message);
}