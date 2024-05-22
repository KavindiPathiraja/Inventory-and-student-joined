const router = require("express").Router();
let Item = require("../models/item");

//http://localhost:8070/item/Iadd

router.route("/Iadd").post((req,res) => {

    const ItemName = req.body.ItemName;
    const Category = req.body.Category;
    const QuantityInStock = Number(req.body.QuantityInStock);
    const UnitPrice = Number(req.body.UnitPrice);
    const Suppliers = req.body.Suppliers;

    const newItem = new Item({
        
        ItemName,
        Category,
        QuantityInStock,
        UnitPrice,
        Suppliers
    })

    newItem.save().then(() => {
         res.json("Item Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//http://localhost:8070/item/

router.route("/I").get((req,res) => {

    Item.find().then((items)=>{
        res.json(items)
    }).catch((err)=>{
        console.log(err)
    })
})

//http://localhost:8070/item/update/id

router.route("/Iupdate/:id").put(async(req,res) => {
    let itemid = req.params.id;
    const {ItemName,Category,QuantityInStock,UnitPrice,Suppliers} = req.body;

    const updateItem = {
        ItemName,Category,QuantityInStock,UnitPrice,Suppliers
    }

    const update = await Item.findByIdAndUpdate(itemid,updateItem).then(() =>{
        res.status(200).send({status: "Item updated"}); 
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data ",error: err.message});
    })
    
})

//http://localhost:8070/item/delete/id

router.route("/Idelete/:id").delete(async(req,res) =>{
    let itemid = req.params.id;

    await Item.findByIdAndDelete(itemid).then(() =>{
        res.status(200).send({status: "Item deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting item ",error: err.message});
    })
})

//if use email instead id findone is used
//http://localhost:8070/item/get/id

router.route("/Iget/:id").get(async(req,res) =>{
    let itemid = req.params.id;
    const user = await Item.findById(itemid).then((item) => {
        res.status(200).send({status: "Item fetched",item : item}); 
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user ",error: err.message});
    })
})

router.route("/category/:category").get(async (req, res) => {
    let category = req.params.category; // Use the correct case here
    try {
      const items = await Item.find({ Category: category });
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


module.exports = router;