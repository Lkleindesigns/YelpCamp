var mongoose   = require('mongoose');
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
    {
        name: "Peaceful Waves", 
        image:"https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
        description: "Poutine iPhone cray, la croix farm-to-table occupy roof party twee meggings 90's biodiesel ethical snackwave portland. Street art letterpress edison bulb everyday carry health goth, master cleanse pabst bushwick sustainable chillwave. Lyft lumbersexual deep v small batch tofu brooklyn, poke selfies asymmetrical farm-to-table YOLO health goth knausgaard enamel pin polaroid. Street art echo park air plant, cold-pressed distillery freegan thundercats schlitz raclette. Gastropub pork belly pug, tofu ugh small batch distillery. Live-edge coloring book forage, venmo iceland bicycle rights meh cliche selfies scenester. Blue bottle disrupt small batch tofu, flexitarian vape tumblr chia."
        
    },
        {
        name: "Forgotten Hill", 
        image:"https://farm2.staticflickr.com/1281/4684194306_18ebcdb01c.jpg",
        description: "Poutine iPhone cray, la croix farm-to-table occupy roof party twee meggings 90's biodiesel ethical snackwave portland. Street art letterpress edison bulb everyday carry health goth, master cleanse pabst bushwick sustainable chillwave. Lyft lumbersexual deep v small batch tofu brooklyn, poke selfies asymmetrical farm-to-table YOLO health goth knausgaard enamel pin polaroid. Street art echo park air plant, cold-pressed distillery freegan thundercats schlitz raclette. Gastropub pork belly pug, tofu ugh small batch distillery. Live-edge coloring book forage, venmo iceland bicycle rights meh cliche selfies scenester. Blue bottle disrupt small batch tofu, flexitarian vape tumblr chia."
        
    },    {
        name: "Hyrule Forest", 
        image:"https://farm3.staticflickr.com/2311/2123340163_af7cba3be7.jpg",
        description: "Poutine iPhone cray, la croix farm-to-table occupy roof party twee meggings 90's biodiesel ethical snackwave portland. Street art letterpress edison bulb everyday carry health goth, master cleanse pabst bushwick sustainable chillwave. Lyft lumbersexual deep v small batch tofu brooklyn, poke selfies asymmetrical farm-to-table YOLO health goth knausgaard enamel pin polaroid. Street art echo park air plant, cold-pressed distillery freegan thundercats schlitz raclette. Gastropub pork belly pug, tofu ugh small batch distillery. Live-edge coloring book forage, venmo iceland bicycle rights meh cliche selfies scenester. Blue bottle disrupt small batch tofu, flexitarian vape tumblr chia."
        
    }
    
]


function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log('removed campgrounds!');
             //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                    console.log(err);
                } else{
                    console.log('added campgrounds');
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but no internet!",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("created new comment");
                            }
                            
                        });
                }
            });
        });
            }
    });
}

module.exports = seedDB;


  
