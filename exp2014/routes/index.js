var express = require('express');
var router = express.Router();

///* GET home page. */
//router.get('/', function(req, res) {
//  res.render('index', { title: 'Express' });
//});
//SEND JSON DATA
//router.get('/', function (req, res) {
//    res.send({
//        users: [ "Fred", "Wilma"]
//
//    });

//POPULATE a TEMPLATE and render it
//    res.render('index', {
//        title: "Learning Express",
//    data: "ldglsgj slsdkjgsdl gkjfgl dsjgk dlgjk dlgdsjkgladgdg;ldsghds kld dd d hdhdsh sdh dh dsh dshs dh dsh sdhdh dshs dhsd hsd hs dh dsh d hd hds hds h h dsh        sd d hdshdshdshdsh sheye;wyjeap;gjds/6tw3ntw68ntl.gnsegnseknseyse.hale6h3; eher en e ywe56hw3.t"
//
//    })
//})

// USE LIKE AN API to get the QUERY
// get data passed to the API
// e.g. http://localhost:3000/?age=33
// returns
//{ age: '33' }
//66
router.get('/', function(req,res){
    var age=req.query.age * 2;
    console.log(req.query);
    console.log(age);
})






module.exports = router;
