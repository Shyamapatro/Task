/* 

---we can see number of database are there in the database 
show dbs


-- Show number of Collections in the particular database
show collections


-- to swich or create new database but it only creates instance of the database untill we create collection collection or store in the database
use database


-- insert one document in the collection
db.restaurants.insertOne({
    "address": {"building": "531", 
                "coord": [-73.9634876, 40.6940001], 
                "street": "Myrtle Avenue", 
                "zipcode": "11205"
               }, 
"borough": "Brooklyn", 
"cuisine": "Hamburgers", 
"grades": [
            {"date": {"$date": 1395100800000}, 
        "grade": "A", "score": 8}, {"date": {"$date": 1363564800000}, 
        "grade": "A", "score": 8}, {"date": {"$date": 1349827200000}, 
        "grade": "A", "score": 7}, {"date": {"$date": 1316649600000}, 
        "grade": "A", "score": 2}
], 
"name": "White Castle", 
"restaurant_id": "40362344"}
)

------ sucessfully documented is stored
---deleteMany
db.products.deleteMany({_id:{$in:[ObjectId("6369f7050f25bdda1bab624e"),ObjectId("6369f7640f25bdda1bab624f")


------ 
 db.products.update({_id:ObjectId("6369f8a60f25bdda1bab6250")},{$set:{reviews:[{text:"this is good product",start:4},{text:"this is average product",start:3}]}})
 
 
 ------equal to
 db.products.find({productName:{$eq:'pen'}}).pretty()
 
 
----greater than
db.products.find({price:{$gt:6}}).pretty()
---greater than equal
db.products.find({price:{$gte:5}}).pretty()
---lessthan
db.products.find({price:{$lt:6}}).pretty()
---lessthan equal
db.products.find({price:{$lte:10}}).pretty()
---not equal 
db.products.find({price:{$ne:10}}).pretty()
---and logical operator when the condtion is true
db.products.find({$and :[{price:{$eq:5}},{productName:{$eq:"pen"}}]})
---or logical operator when the condtion is true
db.products.find({$or :[{price:{$eq:10}},{productName:{$eq:"pen"}}]})





  
----- insertMany document in the collection  
db.restaurants.insertMany([{
            "address": 
            { "street": "37 Avenue", "zipcode": "11368"}, 
            "borough": "Queens", "cuisine": "Chinese", 
            "name": "Ho Mei Restaurant", 
            "restaurant_id": "40362432"
                        },
{"address": {  "street": "37 Avenue", "zipcode": "11368"}, "borough": "Queens", "cuisine": "Chinese", "name": "Ho Mei Restaurant2", "restaurant_id": "403624332"},
{"address": { "street": "37 Avenue", "zipcode": "11368"}, "borough": "Queens", "cuisine": "Chinese", "name": "Ho Mei Restaurant3", "restaurant_id": "403624332"}])

----- sucessfully documented is stored
{ acknowledged: true,
  insertedIds: 
   { '0': ObjectId("633287e57cd077a95498b12d"),
     '1': ObjectId("633287e57cd077a95498b12e"),
     '2': ObjectId("633287e57cd077a95498b12f") } }


---- show to the document 
db.restaurants.find().pretty()



--Update 
db.admin_mangement.updateOne( { _id: ObjectId("6332cbca9e84d026af9801fc") }, { $set: { email: "ahys.g@applify.co"} } )



--delete
db.admin_mangement.deleteOne({ firstName: 'shyama' });

--to rename the collection
db.restaurants.renameCollection(resturent)






*/

 
