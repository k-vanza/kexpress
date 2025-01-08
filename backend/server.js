import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send("server is running")
// });

app.get('/api/names', (req, res) => {
    const names = [{
        name: "John",
        age: 25
    }, {
        name: "Jane",
        age: 22
    }
    ];
    res.send(names);
})

const port = process.eventNames.PORT || 3000;

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})