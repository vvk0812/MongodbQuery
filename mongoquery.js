db.createCollection("mongoo");

// query to insert one document 
db.query.insertOne({item:"biscuit",qty:50,size:{h:20,w:25}});

//query to insert many documents 
db.query.insertMany([
    {
      item: 'journal',
      qty: 25,
      tags: ['blank', 'red'],
      size: { h: 14, w: 21, uom: 'cm' }
    },
    {
      item: 'mat',
      qty: 85,
      tags: ['gray'],
      size: { h: 27.9, w: 35.5, uom: 'cm' }
    },
    {
      item: 'mousepad',
      qty: 25,
      tags: ['gel', 'blue'],
      size: { h: 19, w: 22.85, uom: 'cm' }
    }
  ]);

 //query to updateone document 
db.query.updateOne({qty:25},{$set:{tags:['blue','red']}});
//query to find one and update 
db.query.findOneAndUpdate({qty:200},{$set:{tags:['blue','green']}});

db.query.findOneAndUpdate({_id:ObjectId("670423aed44824e410ee6352")},{$set:{item:"bread"}});
  
db.query.findOneAndUpdate({_id:ObjectId("670422e3007d534739c94af9")},{$set:{item:"keypad",tags:["black","yellow"]}});
  
//query to updat many document less than operator
db.query.updateMany({qty:{$lt:30}},{$set:{qty:200}});
db.query.updateMany({status:'unpack'},{$set:{qty:25}});

//query to updat many document greator than operator
db.query.updateMany({qty:{$gt:30}},{$set:{qty:200}});

//query to read entire collections 
db.query.find({})
//qury to find one document from the collection
db.query.findOne({item:"mousepad"})    

//query to delete single document 
db.query.deleteOne({_id:ObjectId('670423aed44824e410ee6352')});
db.query.deleteMany({qty:{$gt: 30}});
db.query.deleteMany({status: "unpack"});
db.query.deleteMany({});


db.createCollection("students",{validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age"],
      properties: {
        name: {
          bsonType: "string",
          description: "Name must be a string and is required"
        },
        age: {
          bsonType: "int",
          minimum: 0,
          description: "Age must be a non-negative integer and is required"
        }
      }
    }
  }
});
