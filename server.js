var express = require('express');
const cors = require('cors');
var app = express();
const connection = require('./connection');

app.use(cors());

app.get('/favicon.ico', (req, res) => { return; })

app.get('/:table', async function (req, resp) {
    const table = req.params.table;

    const result = await connection(table)
        .limit(10)
        .orderBy("score", "desc")
        .select("*");

    var objToJson = {};
    objToJson.resp = result;
    json = JSON.stringify(objToJson);
    resp.end(json);
})

app.get('/:table/:nome/:score', async function (req, resp) {

    const table = req.params.table;
    const name = req.params.nome;
    const score = req.params.score;

    const result = await connection(table)
        .insert({
            name,
            score
        });

    if (result)
        resp.end("ok");
    else
        resp.write("error");
})

const port = process.env.PORT == null ? 8080 : process.env.PORT;

app.listen(port);
console.log('listening on port ' + port);