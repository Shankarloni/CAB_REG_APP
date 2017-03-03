var express=require('express');
var router = express.Router();
var bodyParser= require('body-parser'); //parse information from POST


//Any requests to this controller must pass through this 'use' function
//Copy and pasted from method-override
 router.use(bodyParser.urlencoded({extended:true}))

 var mongoose = require('mongoose');

 var mappingSchema = mongoose.Schema({  //created mapping schema including city,theatre,showtime,movie,dates
    City            : String,
    Theatre         : String,
    ShowtimeTime    : String,
    Movie           : String,
    Date           : String

});

var Mapping = mongoose.model('Mapping',mappingSchema,'mapping');

//mapping
router.get('/getMapping',function(req,res){
  console.log("REACHED  GET FUNCTION ON SERVER");
  Mapping.find({},function(err,docs){
    res.json(docs);
  });
});

router.get('/getMapping/:id', function(req,res){
  console.log("REACHED GET ID FUNCTION ON SERVER");
  Mapping.find({_id:req.params.id},function(err,docs){
    res.json(docs);
  });
});


router.post('/addMapping', function(req, res){
 console.log(req.body);

  var city          = req.body. City;
  var theatre       = req.body. Theatre;
  var movie         = req.body. Movie;
  var showtimetime  = req.body.ShowtimeTime;
  var date          = req.body.Date;






  var mapping = new Mapping({
     City           : city,
     Theatre        : theatre,
     Movie          : movie,
     ShowtimeTime   : showtimetime,
     Date           : date


  });

  mapping.save(function(err, docs){
    if ( err ) throw err;
    console.log("Mapping Saved Successfully");
    res.json(docs);
  });
})

router.delete('/deleteMapping/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Mapping.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/updateMapping/:id', function(req, res){
  console.log("REACHED PUT");
  console.log(req.body);
  Mapping.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
    console.log(data);
    res.json(data);
    });
})

router.get('/selectMovie/:m',function(req, res){
  Mapping.find({Movie:req.params.m},function(err, docs){
    res.json(docs);
  });
})


router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
