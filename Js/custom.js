function send(mid,uname,vid,und,enUS,Content)
{
var tincan = new  TinCan({

        recordStores: [{

        endpoint: 'https://watershedlrs.com/api/organizations/10981/lrs/',

        username: 'bde27ce0f7b36e',

        password: '2bb3f290d84811',

        allowFail:false

        }]

    });
    var activity = "http://6ZtBDOyAF8U_course_id";
    tincan.sendStatement(
     {

    "actor": {
        "objectType": "Agent",
        "mbox": mid,
        "name": uname
    },
     "verb": {
        "id": vid,
        "display": {
            "und": und
        }
       },
     "object" : {"id" :activity,
       "definition" : {
       "name" : { "enUS":enUS } ,
       "description" : { "enUS": Content }
        },
     context: {
       contextActivities:{
         "parent": { "id": "http://6ZtBDOyAF8U_course_id" },
         "grouping": { "id": "http://6ZtBDOyAF8U_course_id" }
         }
     }
   }});
    
	return;
}