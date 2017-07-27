a={
  "content": [
    {
      "lotCode": "LC111",
      "active": true,
      "tradeItemId": "f6265b01-1bdd-48e5-8281-80127cf5956f",
      "expirationDate": "2019-08-20T16:00:00Z",
      "manufactureDate": "2017-03-20T16:00:00Z",
      "id": "73128fba-252e-4627-a46f-67186d3a3173"
    },
    {
      "lotCode": "LC112",
      "active": true,
      "tradeItemId": "f6265b01-1bdd-48e5-8281-80127cf5956f",
      "expirationDate": "2019-08-20T16:00:00Z",
      "manufactureDate": "2017-03-20T16:00:00Z",
      "id": "9e1e98ee-aae5-4635-aea1-db7ea0584160"
    },
    {
      "lotCode": "LC113",
      "active": true,
      "tradeItemId": "f6265b01-1bdd-48e5-8281-80127cf5956f",
      "expirationDate": "2019-08-20T16:00:00Z",
      "manufactureDate": "2017-03-20T16:00:00Z",
      "id": "249c375f-52c4-4103-bf2a-f97ab23b564c"
    },
    {
      "lotCode": "LC114",
      "active": true,
      "tradeItemId": "f6265b01-1bdd-48e5-8281-80127cf5956f",
      "expirationDate": "2019-08-20T16:00:00Z",
      "manufactureDate": "2017-03-20T16:00:00Z",
      "id": "11fb9403-3eb9-4ddc-a957-2fc821c6fe4b"
    },
    {
      "lotCode": "LC115",
      "active": true,
      "tradeItemId": "f6265b01-1bdd-48e5-8281-80127cf5956f",
      "expirationDate": "2019-08-20T16:00:00Z",
      "manufactureDate": "2017-03-20T16:00:00Z",
      "id": "7c3b7653-80c1-429f-bc6c-3c35286fc09e"
    },
    {
      "lotCode": "LC116",
      "active": true,
      "tradeItemId": "f6265b01-1bdd-48e5-8281-80127cf5956f",
      "expirationDate": "2019-08-20T16:00:00Z",
      "manufactureDate": "2017-03-20T16:00:00Z",
      "id": "194f86d6-f06e-42d4-9ae4-f3aafbb38c8d"
    },
    {
      "lotCode": "LC117",
      "active": true,
      "tradeItemId": "f6265b01-1bdd-48e5-8281-80127cf5956f",
      "expirationDate": "2019-08-20T16:00:00Z",
      "manufactureDate": "2017-03-20T16:00:00Z",
      "id": "0a4244db-4e9f-4e00-b3f7-a9484538b62a"
    },
    {
      "lotCode": "LC118",
      "active": true,
      "tradeItemId": "f6265b01-1bdd-48e5-8281-80127cf5956f",
      "expirationDate": "2019-08-20T16:00:00Z",
      "manufactureDate": "2017-03-20T16:00:00Z",
      "id": "b18ed6e2-6c8b-4ac0-be38-ef738a2cf60c"
    },
    {
      "lotCode": "LC119",
      "active": true,
      "tradeItemId": "f6265b01-1bdd-48e5-8281-80127cf5956f",
      "expirationDate": "2019-08-20T16:00:00Z",
      "manufactureDate": "2017-03-20T16:00:00Z",
      "id": "8aa566de-5035-40c4-941a-1fbe09917ee5"
    },
    {
      "lotCode": "LC1110",
      "active": true,
      "tradeItemId": "f6265b01-1bdd-48e5-8281-80127cf5956f",
      "expirationDate": "2019-08-20T16:00:00Z",
      "manufactureDate": "2017-03-20T16:00:00Z",
      "id": "c1f96b92-9314-4664-afbf-67dfa32e766a"
    }
  ],
  "last": true,
  "totalPages": 1,
  "totalElements": 10,
  "sort": null,
  "numberOfElements": 10,
  "first": true,
  "size": 2000,
  "number": 0
};


var b = {
  "name" : "wei",
  "id" : 110,
  "actionItems" : [
    {"actionAdrees":"baoliguangchang",
     "actionCode":001
    }
  ]
};


a.content.forEach(function(o){
  objectId = o.id;
  b.actionItems.push({"actionAdrees":"baoliguangchang","actionCode":001,"id":objectId});
})

console.log(b);
