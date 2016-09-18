var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	console.log(req.session)
	req.session.a = 1;
	
	console.log(req.session)

  res.render('main', { title: 'Express' });
});
router.get('/solver', function(req, res, next) {
	console.log(req.session)
  res.render('solver', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { account: '帳號' });
});


router.get('/zh', function(req, res, next) {
	res.cookie('cookiename', 'cookievalue', { maxAge: 900000, httpOnly: true });
  
if(req.headers.cookie=="en"){
  res.render('index', { title: 'Express' });
}else{
  res.render('index', { title: '快捷' });

}
});

module.exports = router;
