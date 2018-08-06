require('dotenv').config();

const users = require('./users');

const url = "mongodb://admin:mouli545@ds133550.mlab.com:33550/mouliprofile545"

const MongoClient = require('mongodb').MongoClient;

function seedCollection(collectionName, initialRecords) {
  MongoClient.connect(url, (err, db) => {
    console.log('connected to mongodb...');

    const collection = db.collection(collectionName);
    collection.remove();
    collection.insertMany(initialRecords, (err, result) => {
      console.log(`${result.insertedCount} records inserted.`);
      console.log('closing connection...');              
      db.close();
      console.log('done.');
    });
  });
}

seedCollection('users', users);
