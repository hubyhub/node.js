var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var API_PATH   = "/API/REST/v1";

app.use(bodyParser.urlencoded({ extended: true }));                   // configure app to use bodyParser() this will let us get the data from a POST
app.use(bodyParser.json({limit: '50mb', type: 'application/json'}));




// // create application/json parser
// var jsonParser = bodyParser.json();
//
// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

var port = process.env.PORT || 3000;        // set our port

// ROUTES FOR OUR API
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({
        "Message": "API OK"
    });
});


//GET USERS
router.get('/users', function(req, res) {
    res.json({ users : ["username"]});
});

//GET SPECIFIC USER
router.get('/users/:id', function(req, res) {
    
    //if(req.params.id === "3")

	res.json(
		{
			"User": {
				"name": "user1"				
			}
		}
	);


});


// POST USER
router.post('/users', function(req, res) {

    var myContent = req.body;
    // do something with myContent    

    setTimeout(function(){
        
        res.send(
            {
                "user": {
                    "Id": "abc",                    
                }
            }
        );    
    },3000);


});

// PUT USER
router.put('/users/:id', function(req, res) {
	var response;
	//users[req.params.id]
	response = {
		"user": "abc"
	};

    res.send(response);

});

// DELETE USER
router.delete('/sites/:id', function(req, res) {

    var response, userId;
    userId = Number(req.params.id);

	// DO SOMETHING
    response = {
        "user": {
            "id": req.params.id,
            "Message": "Deleted"            
        }
    }
    res.send(response);

});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /API/REST/v1
app.use(API_PATH, router);
app.use('/', express.static(__dirname+'/src') );

// START THE SERVER
// =============================================================================
app.listen(port, function() { console.log('Server running at 127.0.0.1:' + port);});





// DISTINGUISH urlencoded/multipart/ application/JSON


// // POST /login gets urlencoded bodies
// app.post('/users/:id', urlencodedParser, function (req, res) {
//     console.log("post detected");
//     if (!req.body) return res.sendStatus(400);
//     res.send('Created new user, ' + req.body.user.id);
// });
//
// // POST /api/users gets JSON bodies
// app.post('/users/:id', jsonParser, function (req, res) {
//     console.log("post detected");
//     if (!req.body) return res.sendStatus(400);
//     res.send("Created new user: "+ req.params.userId);    // echo the result back
// });
