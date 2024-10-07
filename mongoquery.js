db.collectionname("collection");

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

//query to updat many document less than operator
db.query.updateMany({qty:{$lt:30}},{$set:{qty:200}});

//query to updat many document greator than operator
db.query.updateMany({qty:{$gt:30}},{$set:{qty:200}});

//query to read entire collections 
db.query.find({})
//qury to find one document from the collection
db.query.findOne({item:"mousepad"})    
  

  
  
  
  
  
