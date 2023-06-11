const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const corsOptions = {
    origin: "http://127.0.0.1:5500",
}
app.use(cors(corsOptions));

app.post("/",(request, response) => {
    console.log(request.body, request.file);
    response.json("Vielen Dank!");
} );



app.listen(port, () => console.info("Server läuft"));