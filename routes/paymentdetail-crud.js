
var express = require('express');
var router = express.Router();
bodyParser = require('body-parser');//parses information from POST

//Any requests to this controller must pass through this 'use' function
//Copy and pasted from method-override
router.use(bodyParser.urlencoded({ extended: true }))
var mongoose = require('mongoose');
var detailsSchema = mongoose.Schema({

dName : String,
dEmail :String,
dMobile :String,
dCard  :String,
dpayd :String
 });

var Details = mongoose.model('Details', detailsSchema, 'details');
//city
router.get('/getPaymentdetail', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Details.find({}, function (err, docs) {
         res.json(docs);
    });
});

router.get('/getPaymentdetail/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Details.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/addPaymentdetail', function(req, res){
 console.log(req.body);

  var Name = req.body.dName;
    var Email = req.body.dEmail;
      var Mobile = req.body.dMobile;
        var Card = req.body.dCard;
        var Dpayd = req.body.dpayd;

  var details = new Details({


    dName  : Name,
    dEmail : Email,
    dMobile: Mobile,
    dCard  : Card,
    dpayd  : Dpayd


  });


  details.save(function(err, docs){
    if ( err ) throw err;
    console.log("Your Details Saved Successfully");
    res.json(docs);
  });
})



// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
