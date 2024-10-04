/*import fs from "fs"
const fileContent = fs.readFileSync('./package.json')
console.log(fileContent.toString())*/


/*import http from "http"

const server =http.createServer((req, res)=> {
    res.writeHead(200, { "Content-Type": "text/plain"})
    res.end("Hello World")
})

server.listen(3000, () => {
    console.log("Server is running on port 3000")
})

// AMINE BELKADI*/

import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.status(200).send("Hello World!")
});


app.get("/about", (req, res) => {
    res.status(200).send("About Us")
});

app.get("/page1.html", (req, res) => {
    res.status(200).send("Page 1" + req.socket.localAddress + req.socket.remoteFamily)
});

app.post("/contact", (req, res) => {
    res.status(200).send("Contact Us")
});

app.use(express.static("public"))

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

// AMINE BELKADI*