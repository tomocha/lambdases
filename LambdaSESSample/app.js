console.log('Loading');

var AWS = require('aws-sdk');
var ses = new AWS.SES({ apiVersion: '2010-12-01' });

exports.handler = function (event, context) {
    
    var params = {
        Destination: {
            ToAddresses: [
                'tomocha.h@gmail.com'
            ]
        },
        Message: {
            Body: {
                Html: {
                    Data: '<html><body>hello</body></html>',
                    Charset: 'utf-8'
                }
            },
            Subject: {
                Data: 'test',
                Charset: 'utf-8'
            }
        },
        Source: 'tomocha.h@gmail.com'
    };
    
    ses.sendEmail(params, function (err, data) {
        if (err) {
            context.done('error:', err.stack); 
        }else {
            context.done('success:', data);
        }
    });
};
