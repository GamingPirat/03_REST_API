// Import
 
const app = require('express')();
const PORT = 8080;

// Listener für express-instanz
app.listen(
    PORT,
    () => console.log(`server ready at http://localhost"${PORT}`)
);

// app.get('/', (req, res) => {
//     res.send(200);
//   });

app.get("/", (req,res) =>
    {
        res.status(200).send({
            item: "T-shirt",
            size: "L",
            onstock: 20
        })
    });