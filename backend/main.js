const express = require('express');
const app = express();
const path = require('path');
const googleTrends = require('google-trends-api');

app.use(express.static(path.join(__dirname, '../webapp/build')))
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../webapp/build', 'index.html'))
});

app.get('/users', function (req, res) {
    console.log("here you go");
    res.send('here you go')
})

app.get('/googletrends', function(req,res){
    getTrendResult();
    res.send('done')
})

function getTrendResult() {
    googleTrends.interestOverTime({ keyword: ['C#', 'javascript'] })
        .then(function (results) {
            console.log('These results are awesome', results);
        })
        .catch(function (err) {
            console.error('Oh no there was an error', err);
        });
}


app.listen(3003);