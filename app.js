const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});


app.post("/", function (req, res) {

    var fName = req.body.fName;
    var lName = req.body.lName;
    var email = req.body.email;

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
    };

    var jsonData = JSON.stringify(data);

    var options = {
        url: "https://usX.api.mailchimp.com/3.0/lists/<AUDIENCE_ID>",   //here X refers to the server no. provided by the mailchimp, and Audience ID refers to the ID of the Audience to which you're going to post your requests.
        method: "POST",

        headers: {
            "Authorization": "<NAME> <API_KEY>" //here one can supply any name then after a space enter the API KEY associated with you MailChimp Account
        },

        body: jsonData

    };

    request(options, function (error, response, body) {

        if ((error) || (response.statusCode !== 200))
        {
            res.sendFile(__dirname + "/failure.html");
        }
        else
        {
            res.sendFile(__dirname + "/success.html");
        }

    });

});


app.post("/failure", function (req, res) {
    res.redirect("/");
});


app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port : 3000");
});
