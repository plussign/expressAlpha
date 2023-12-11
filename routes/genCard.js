var express = require('express');
var router = express.Router();

router.param('target', function(req, res, next, t){
    if (req.user = t)
    {

    } else {
      //next(createError(404, 'failed to find user'));
      req.user = "UNKNOWN";
    }
    next();
  }
);

/* GET home page. */
router.get('/:target', function(req, res, next) {
  
  res.render('index', {
     title: "target: " + req.user, 
     name: req.user, 
     currentHost:req.hostname, 
     //currentPort:app.get(''),
     currentProto:req.protocol 
    });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: "NO target"});
});

module.exports = router;
