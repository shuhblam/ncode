var request = require('request'), 
	VERSION = '0.0.1';

function ncode(options) {
  if (!(this instanceof ncode)) return new ncode(options);
  console.log(options)
}
ncode.VERSION = VERSION;
module.exports = ncode;

ncode.prototype.job = {
	create: function(input, output){
		request({
		  api_key: "56c89e5004de073797acfb000545a099",
		  method: "POST",
		  uri: 'https://app.zencoder.com/api/v2/jobs',
		  multipart:[{ 'content-type': 'application/json',body: JSON.stringify({"input":input,"output":output})}]
		}, function (error, response, body) {
	      if(response.statusCode == 201){
	        console.log('document saved as: http://mikeal.iriscouch.com/testjs/'+ rand)
	      } else {
	        console.log('error: '+ response.statusCode)
	        console.log(body)
	      }
	    }
	);
	}
}
