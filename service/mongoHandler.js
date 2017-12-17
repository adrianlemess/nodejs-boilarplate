const mongoUtil = require( '../config/mongoUtil' );

//http://mongodb.github.io/node-mongodb-native/3.0/tutorials/crud/

exports.save = (doc, collection) => {
    const db = mongoUtil.getDb();

    return new Promise((resolve, reject) => {
        let col;
        try {
            col = db.collection(collection);
        } catch(err) {
            db.createCollection(collection)
        }
        col = db.collection(collection);
        col.insertOne(doc, (err, result) => {
            if(err) reject(err)
            else resolve(result)
        })
    })
}