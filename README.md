# My-Newsletter-Signup-WebApp
This is my newsletter signup app built on Node.js - Express.js and Mailchimp API.

Know basic functioning of APIs:
[Please refer Bitcoin-Ticker Repository first for intro to APIs]

npm install request
//request is a module through which we can use make a request to an external api.

const request = require("request");

app.post("/", function(req, res) {
    request("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", function(error, response, body) {
        console.log(body);
    });
});


// request("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", function(error, response, body) {
        console.log(body);
    });

is a function with request module, it takes 1st parameter as the cURL of the external api, and 2nd parameter as a callback function with arguments as: error, response, body.
here the body returns an JSON format.

a javascript object can be converted into a JSON format using the following function:

JSON.stringify(objectName);

viceversa, a JSON type can be converted into a javascript object using the following function:

JSON.parse(variableContainingJsonFlatPack);
eg. body in this case.


res.send("<h1> HELLO </h1>");

send is the last function to be included in the post function. As it sends and exits the post function.

if we'd need to need to use multiple line send statements, then it is not possible. But we can use the write() function.

the write() function creates a buffer and we can add all of the things we need to send using this buffer and finally call the send() method to send all the items in the buffer.

eg:
res.write("<h1> hello </h1>");
res.write("<h2> world! </h2>");
res.send();


npm install body-parser
//command to install body parser module.

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
// this is how we can require bodyParser in our code and use it.
// by using body parser we can have access to the html body elements such as form data. The form data can be recognised by it's name. for eg:
<input name="firstName" id="" class="btn btn-primary" type="text" value="">
we can use it in our js code using:
req.body.firstName; inside the post function. Please note that the form should have a method of POST type and action should be the same as we defined in the post function in our js code.

---------------------------------------------------------------------------------------

<h1> WORKING WITH MAILCHIMP API:</h1>


    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: fName,
                    LNAME: lName
                }
            }
        ]
    };          // here we've created an js object namely 'data', by following the specifications written on the mailchimp api.

    var jsonData = JSON.stringify(data);  //here we've converted the js object into a flatpack json format.


    var options = {
        url: "https://usX.api.mailchimp.com/3.0/lists/<AUDIENCE_ID>",  //here X refers to the server no. provided by the mailchimp, and Audience ID refers to the ID of the Audience to which you're going to post your requests. 
        method: "POST",

        headers: {
            "Authorization": "<NAME> <API_KEY>" //here one can supply any name then after a space enter the API KEY associated with you MailChimp Account
        },

        body: jsonData  // here we've used the flatpack json type data to send it to the mailchimp api.

    };

    request(options, function (error, response, body) {
          ----------------
          ----------------
          ----------------
           Lines of code;
          ----------------
          ----------------
          ----------------
    });

// here the request method has first parameter as a url, but sometimes we have to send other data as well with the url which is written after the '?' sign in the url. To make it simple js request module provides a solution wrt that. 
// We have to create an js object namely options, as written above. the option object consists of all the options through which the complete url is made of before passing.
// Please note that url key is mandatory to specify in the object.
// method is by default as 'GET', if not specified.

// headers: {
  " ": " ";
}
 is used to send a user authentication. In the above example, the mailchimp's documentation for api specifies that the key should be called "Authorization" and it's value must be string type with any random name and authentication key seperated by a space.


app.post("/failure", function(req, res) {
    res.redirect("/");        // here the redirect method redirects the server to a particular route.
});


//here the process.env.PORT is used for heroku, as the port 3000 may or may not be necessarily used by the heroku platform. But our local machine can't understand this line of code. So, we've used the or operator with port 3000 so that we can test the app on our machine as well.

app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port : 3000");
});


