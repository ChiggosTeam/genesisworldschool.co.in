
import fs from "fs";
import path from 'path';
const __dirname = path.resolve();
class Image {
    constructor() {
    }
    WriteFile(base64, Id) {
        let image = base64.replace(/^data:image\/\w+;base64,/, "");
        var buf = Buffer.from(image, "base64");
        const file = `${__dirname}/public/img/Images/${Id}.png`;
        fs.writeFile(file, buf, function (err) {
            if (err) {
                return err
            }
        })
        return `img/Images/${Id}.png`
    }
    PdfFile(base64, employeeID) {
        var buf = Buffer.from(base64, "base64");
        const file = `${__dirname}/public/img/Employee/${employeeID}.pdf`;
        fs.writeFile(file, buf, function (err) {
            if (err) {
                return err
            }
        })
        return `img/Employee/${employeeID}.pdf`
    }
    DeleteFile(path) {
        const file = `${__dirname}/public/img/Images/${path}`;
        fs.unlink(file, (err => {
            if (err) {
                return err
            }
        }));
    }
    
}
var obj_Image = new Image();
export {
    obj_Image
}