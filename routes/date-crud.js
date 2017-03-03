
var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'), //parses information from POST


//Any requests to this controller must pass through this 'use' function
//Copy and pasted from method-override
router.use(bodyParser.urlencoded({ extended: true }))


var mongoose = require('mongoose');

var dateSchema = mongoose.Schema({

  fromdate:String,
  todate : String
 });

var Date = mongoose.model('Date', dateSchema, 'date');

//date
router.get('/getDate', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Date.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/getDate/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Date.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/addDate', function(req, res){
 console.log(req.body);


  var frdate = req.body.Fromdate;
  var tdate = req.body.Todate;


  var date = new Date({

    fromdate: frdate,
    todate  : tdate


  });

  date.save(function(err, docs){
    if ( err ) throw err;
    console.log("date Saved Successfully");
    res.json(docs);
  });


  })

router.delete('/deleteDate/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Date.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/updateDate/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Date.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      console.log(data);
      res.json(data);
    });
})


// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
