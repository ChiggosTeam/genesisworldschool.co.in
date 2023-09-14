import express from "express";
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import path from 'path';
let app = express();
const httpServer = createServer(app);
const wss = new WebSocketServer({ server: httpServer });
let port = 3001;
httpServer.listen(port, () => { console.log(`Server is now integrated with WEB SOCKET on port ${port}`) });
const __dirname = path.resolve();
app.use(express.json());
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true, }));
app.use('/css', express.static(__dirname + "/public/css"));
app.use('/admin', express.static(__dirname + "/public/css/Admin"));
app.use('/js', express.static(__dirname + "/public/js"));
app.use('/img', express.static(__dirname + "/public/img"));
app.use(express.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: false, parameterLimit: 5000 }));
app.set('views', ['./src/views', './src/views/Admin', './src/views/Vistiors']);
app.set('view engine', 'ejs');
app.set('routes', './src/routes');
import { homepage } from "./src/routes/homepage.mjs";
import { loginscreen } from "./src/routes/loginscreen.mjs";
import { admininsertionpage } from "./src/routes/admininsertionpage.mjs";
import { privacypolicy } from "./src/routes/privacypolicy.mjs";
import { termsandcondtion } from "./src/routes/termsandcondtion.mjs";
app.use(admininsertionpage);
app.use(loginscreen)
app.use(homepage);
app.use(privacypolicy);
app.use(termsandcondtion);       
wss.on('connection', async (ws, req) => {
    ws.on('message', async (data, isBinary) => {
        let buf = Buffer.from(data);
        let jsonData = JSON.parse(buf.toString());
        wss.clients.forEach((client) => {
            if (client != ws) {
                client.send(JSON.stringify(jsonData));
            }
        });
    });
});