const fs = require("fs");

exports.home = (req,res)=>{
    var svg = new Array(6);
    for(var i=1;i<=6;i++)
        {
            svg[i] = fs.readFileSync(`\public/homepage-images/svg/${i}.svg`,{encoding:'utf8'}); //encoding is neccesary
        }
    
    var script = fs.readFileSync('\public/homepageScript.js');
    
    res.render("home",{svg:svg,script:script});
}