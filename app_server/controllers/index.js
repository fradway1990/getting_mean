module.exports.homePageController = function(req, res, next) {
  res.render('index', { title: 'Express' });
};
