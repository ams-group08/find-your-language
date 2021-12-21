const express = require('express');
const app = express();
const app_locally = express();
const path = require('path');
const googleTrends = require('google-trends-api');
const csv = require('csv-parser');
const fs = require('fs');

// const HttpsProxyAgent = require('https-proxy-agent');
// let proxyAgent =  new HttpsProxyAgent('https://localhost:80/');

app.use(express.static(path.join(__dirname, '../webapp/build')))
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../webapp/build', 'index.html'))
});



app_locally.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



// TODO - need to figure out how to set up proxy
app_locally.get('/googletrends', function (req, res) {
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

app_locally.get('/readfromcsv', function(req, res) {
  const data = [];
  fs.createReadStream("multiTimeline.csv").pipe(csv())
  .on('headers', (headers) => {
    data.push(Object.values(headers))
  })

  .on('data', (row) => {
    
    data.push((Object.values(row)).map((v,i)=>{
      if(i === 0 ){
        return parseFloat(Object.values(row)[0]).toFixed(2);
      }
      return v;
    }))
  })
  .on('end', () => {
    res.status(200).json({result:data});
  })
});

app.listen(80);
app_locally.listen(3003)