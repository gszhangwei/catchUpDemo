var request = require('request');
var auth_accesstoken;
request.post({
  headers: {'content-type' : 'application/x-www-form-urlencoded'},
  url:     'http://user-client:changeme@xxxx/api/oauth/token?grant_type=password',
  body:    "username=srmanager1&password=password"
}, function(error, response, body){
  auth_accesstoken = JSON.parse(body).access_token;
  request.get({
    headers: {'content-type' : 'application/json;charset=UTF-8'},
    url:     `http://xxxx/api/stockCardSummaries/noCards?access_token=${auth_accesstoken}&facility=176c4276-1fb1-4507-8ad2-cdfba0f47445&program=dce17f2e-af3e-40ad-8e00-3496adef44c3`
  }, function(error, response, body){
    stockCards = JSON.parse(body);
    b = {
      "documentNumber": "test123",
      "facilityId": "176c4276-1fb1-4507-8ad2-cdfba0f47445",
      "lineItems": [],
    "programId": "dce17f2e-af3e-40ad-8e00-3496adef44c3",
    "signature": "test"
    };

    stockCards.forEach(function(stockCard){
      current_date = new Date().toJSON();
      o = stockCard.orderable;
      b.lineItems.push({"orderableId": o.id, "quantity": 466, "occurredDate": current_date});
    });
    request.post({
    headers: {'content-type' : 'application/json;charset=UTF-8'},
    url:     `http://xxxx/api/stockEvents?access_token=${auth_accesstoken}`,
    body:    JSON.stringify(b)
    }, function(error, response, body){
    console.log(body);
    });
  });
});
