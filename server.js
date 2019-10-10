const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const dburl = "mongodb+srv://vadim:3474600@cluster0-swtzb.mongodb.net/admin?retryWrites=true&w=majority"
var ObjectID = require('mongodb').ObjectID;
const app = express();
var db;
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

app.listen(8000, function (req, res) {
    console.log("work on port 8000");
});



MongoClient.connect(dburl, (err, client) => {
    if (err) return console.log(err)


    //dbo.collection("persons").insertOne(myobj, function(err, res) {
    // if (err) throw err;
    //console.log("1 document inserted");

    //});
    app.post('/notes', (req, res) => {
        const db = client.db("personsdb");
        const object = {
            name: req.body.name,
            age: req.body.age
        };
        db.collection("persons").insertOne(object, (err, result) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                console.log("item added");
                res.send(result.ops[0]);
            }
        });
        });
        app.get("/notes/:id", (req, res) => {
            const id = req.params.id;
            const path = {
                "_id": new ObjectID(id)
            };
            const db = client.db("personsdb");
            db.collection("persons").findOne(path, (err, item) => {
                if (err) {
                    res.send({
                        'error': 'An error has occurred'
                    });
                } else {
                    res.send(item);
                }
            })
        });
        app.delete("/notes/:id", (req, res) => {
            const id = req.params.id;
            const path = {
                "_id": new ObjectID(id)
            };
            const db = client.db("personsdb");
            db.collection("persons").remove(path, (err, item) => {
                if (err) {
                    res.send({
                        'error': 'An error has occurred'
                    });
                } else {
                    res.send(item);
                }
            })
        });
        app.get("/notes/", (req, res) => {
            
            const db = client.db("personsdb");
            db.collection("persons").find().toArray((err, result)=>{
                res.send(result);
            });
            

            
        });
        app.put("/notes/:id", (req, res) => {
            const id = req.params.id;
            const path = {
                "_id": new ObjectID(id)
            };
            const note = { name: req.body.name, title: req.body.age };
            const db = client.db("personsdb");
            db.collection("persons").update(path, note, (err, item) => {
                if (err) {
                    res.send({
                        'error': 'An error has occurred'
                    });
                } else {
                    res.send(note);
                }
            })
        });
    });


