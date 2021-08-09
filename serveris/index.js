import { Server } from "net";
import { readFile } from "fs/promises";

const WEB_DIR = "web";

const server = new Server(function handler(socket) {
    console.log("atejo laiskas");
    socket.setEncoding("utf8");
    let allData = "";
    socket.on("data", async data => {
        allData += data;
        const lines = allData.split("\r\n");
        if (lines.findIndex(line => line === "") >= 0) {
            const path = lines[0].split(" ")[1];
            console.log(allData);
            // console.log(lines[0]);
            console.log(path);
            let response;
            try {
                response = "HTTP/1.1 200 OK\r\n\r\n";
                let html = await readFile(WEB_DIR + path, {
                    encoding: "utf8"
                });
                // response += "<html><body><h1>Hello World !!!</h1></body></html>";
                response  += html
            } catch (err) {
                response = "HTTP/1.1 404 Not Found\r\n\r\n\r\n";
            }

            console.log(response);
            socket.write(response, err => {
                if (err) {
                    console.log("nenusiunciau", err);
                }
                socket.end();
            });
        }
    });
    // socket.on("end", () => {
    //     console.log("daugiau duomenu nebus");
    // });
});

server.listen(3000);
console.log("Server started");

/*
localhost
127.0.0.1

*/