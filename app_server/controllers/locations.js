module.exports.homeList = function(req,res,send){
  res.render('locations-list',{title:'Home'});
};

module.exports.locationInfo = function(req,res,send){
  res.render('location-info',{title:'Location'});
}

module.exports.addReview = function(req,res,send){
  res.render('location-review-form',{title:'Add Review'});
}
