const express = require('express');
const Twitter = require('twitter');
const app = express();
const port = 3000;


// app.get(`/`, function(request, response) {
//     //const username = req.params.name;
//     response.send(`Hello `)
// });
//
// app.get(`/hoge`, function(request, response) {
//     //const username = req.params.name;
//     response.send(`Hello world Hoge!`)
// });


const client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});

const params = {screen_name: '00KazaK11',count: "200"};

app.get(`/`, function(request, res) {
    client.get('favorites/list', params, function(error, tweets, response) {
        if (!error) {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.send(tweets);
        } else {
            res.send("error!");
        }
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));