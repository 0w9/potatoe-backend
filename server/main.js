const express = require("express");
const app = express();
const port = 8081
bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  
app.post('/string/', (req, res) => {
    console.log(req.body.string);
    res.status(200).send('Done');
})
  
app.listen(port, () => {
    console.log(`Express listening on port ${port}`)
})