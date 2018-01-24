const translate = require('google-translate-api');
fs = require('fs');
var xml2js=require('xml2js');
var parser = new xml2js.Parser();

fs.readFile( './string.xml', function(err, data) {
     parser.parseString(data,function(err,result){
       if(err) console.log(err);  
        for(var i=0;i<result.resources.string.length;i++) {
          if(i!=1) {
            trans(result.resources.string[i]["_"],i);
          }
        }         
     });
 });

 function trans(data,index) {
    translate(data, {from: 'en', to: 'fr'}).then(res => {
        console.log(data+"         "+index);
        console.log(res.text+"         "+index);
        
    });
 }