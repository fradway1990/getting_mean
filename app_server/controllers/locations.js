var reviewsArr = [];
var review = new Review(1,"Simon Holmes",5,"16 July 2013","What a great place. I can't say enough good things about it.");
var review2 = new Review(1,"Charlie Chaplin",3,"16 June 2013","It was okay. Coffee wasn't great, but the wifi was fast.");
var review3 = new Review(2,"Simon Cowell",1,"17 August 2015","This place was absolutely dreadful.");
var review4 = new Review(2,"Sue Storm",3,"18 December 2015","The food was okay. But the wifi was slow.");
var review5 = new Review(3,"Bob Billingsworth",5,"17 August 2015","The burger selection was absolutely exquisite. I tip my monocle to the chef.");
var review6 = new Review(3,"Lala Diamond",5, "19 December 2015","Best burgers in the city for sure and the wifi was super fast.");

reviewsArr.push(review,review2,review3,review4,review5,review6);

var locations = [
  new Business(1,'Starcups',"125 High Street, Reading, RG6 1PS","100m",
  ["Monday - Friday : 7:00am - 7:00pm","Saturday : 8:00am - 5:00pm","Sunday : closed"],
  ["Hot drinks","Food","Premium Wifi"]),
  new Business(2,'Cafe Hero','122 High Street, Reading, RG6 1PS',"200m",
  ["Monday - Friday : 7:00am - 7:00pm","Saturday : 8:00am - 5:00pm","Sunday : closed"],
  ["Hot drinks","Food","Premium Wifi"]),
  new Business(3,'Burger Queen','129 High Street, Reading, RG6 1PS',"250m",
  ["Monday - Friday : 7:00am - 7:00pm","Saturday : 8:00am - 5:00pm","Sunday : closed"],
  ["Food","Premium Wifi"])
];


var homeListVars = {
                  title: "Loc8r- Find places to with wifi near you!",
                  pageHeader:{
                    title:"Loc8r",
                    strapline:"Find places to with wifi near you!"
                  },
                  locations: locations
                };

function Review(locationId,name,rating,date,comment){
    var _this = this;
    this.locationId = locationId;
    this.name = name;
    this.rating = rating;
    this.comment = comment;
    this.date = date;
}


function Business(id,name,address,distance,hours,tags){
    this.id = id;
    this.name = name;
    this.address = address;
    this.hours = hours;
    this.reviews = [];
    this.rating = 0;
    this.distance = distance;
    this.tags = tags;

    this.getReviews = function(){
       var _this = this;
       for(var x = 0; x < reviewsArr.length;x++){
         if(reviewsArr[x]['locationId'] === _this.id){
           _this.reviews.push(reviewsArr[x]);
         }
       }
     }

    this.getRating = function(){
       var _this = this;
       var total = 0;
       for(var x = 0; x < _this.reviews.length; x++ ){
         //console.log("rating: "+_this.reviews[x]['rating']);
         total += _this.reviews[x]['rating'];
       }
       _this.rating = Math.ceil(total / _this.reviews.length);

     }

    this.getReviews();
    this.getRating();
}


module.exports.homeList = function(req,res,send){
  res.render('locations-list',homeListVars);
};

module.exports.locationInfo = function(req,res,send){
  res.render('location-info',{title:'Location'});
}

module.exports.addReview = function(req,res,send){
  res.render('location-review-form',{title:'Add Review'});
}
