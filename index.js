const express = require("express");
const app = express()
const port = 8000;


app.listen(port, () => {
    console.log(`running in the port ${port}`)
})

app.get('/info', (req, res) => {
    res.status(200).send({
        name: "David",
        phone: "123456789",
        mail:"david@gmail.com",
        desc :" making a websi"
        });
})