const fs = require("fs");
var SibApiV3Sdk = require('sib-api-v3-sdk');

exports.home = (req,res)=>{
    var svg = new Array(6);
    for(var i=1;i<=6;i++)
        {
            svg[i] = fs.readFileSync(`\public/homepage-images/svg/${i}.svg`,{encoding:'utf8'}); //encoding is neccesary
        }
    
    var script = fs.readFileSync('\public/homepageScript.js');
    
    res.render("home",{svg:svg,script:script});
}

exports.emailSender = (req,res)=>{

    var defaultClient = SibApiV3Sdk.ApiClient.instance;

    // Configure API key authorization: api-key
    var apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = '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';

    // Uncomment below two lines to configure authorization using: partner-key
    // var partnerKey = defaultClient.authentications['partner-key'];
    // partnerKey.apiKey = 'YOUR API KEY';

    var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

    sendSmtpEmail = {
        to: [{
            email: 'altair.1999@wp.pl',
            name: 'Piotr Rekos'
        }],
        templateId: 6,
        params: {
            name: req.body.name,
            content: req.body.content
        },
        headers: {
            'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
        }
    };

    apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
      console.log('API called successfully. Returned data: ' + data);
    }, function(error) {
      console.error(error);
    });
    
    res.redirect('/');
}