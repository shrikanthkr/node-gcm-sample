var gcm = require('node-gcm');
var message = new gcm.Message();
message.addData('key1', 'Awesome World!!');

var regIds = ['APA91bF07D9u-xr1z3koxO3peWbnbVYqtJra8EKCaaQHYPYRQphjfFwDduF1puh1KETUUsik6Krg-IIiwbpP72RqyItQ9F7VRVoj-vl3YUncE5l8YkPMFLO6lIPnYnh0PLMPhsiHwwMv'];
var sender = new gcm.Sender('AIzaSyBDRJ00JYbTE011CbWWjlcHYUGI3eLccdI');

sender.send(message, { registrationIds: regIds } , function (err, result) {
  if(err) console.error(err);
  else    console.log(result);
});
