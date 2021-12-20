const express = require('express');
const app = express();
const path = require('path');
const googleTrends = require('google-trends-api');
const csv = require('csv-parser');
const fs = require('fs');

// const HttpsProxyAgent = require('https-proxy-agent');
// let proxyAgent =  new HttpsProxyAgent('https://localhost:80/');

app.use(express.static(path.join(__dirname, '../webapp/build')))

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../webapp/build', 'index.html'))
});

// TODO - need to figure out how to set up proxy
app.get('/googletrends', function (req, res, next) {
  if(req.query.keyword){
    let query = {
      keyword: req.query.keyword,
    }
    googleTrends.interestOverTime(query)
      .then(function (results) {
        res.status(200).json(JSON.parse(results).default.timelineData);
      })
      .catch(function (err) {
        console.error('Oh no there was an error', err);
      });
  }else{
    res.status(201).json({result:"invalid request, please fill the keyword"});
  }

})

app.get('/readfromcsv', function(req, res) {
  const data = [];
  fs.createReadStream("multiTimeline.csv").pipe(csv())
  .on('headers', (headers) => {
    data.push(Object.values(headers))
    console.log(headers)
  })

  .on('data', (row) => {
    console.log(Object.values(row))
    data.push((Object.values(row)).map((v)=>{
      return parseFloat(v,2);
    }))
  })
  .on('end', () => {
    res.status(200).json({result:data});
  })
});

app.listen(3003);