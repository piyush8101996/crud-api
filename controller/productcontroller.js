const Product = require("../model/product")


//get all product
const product_all = async (req, res) => {
    try {
        const product = await Product.find()
        res.send(product)
    }
    catch (err) {
        res.send({ msg: err })
    }
}
//add product
const addproduct = async (req, res) => {
        const product =  new Product({
            title: req.body.title,
            price: req.body.price,
            details:req.body.details
        })

    try{
        const productsave= await product.save()
        //console.log(product);
     res.status(200).send(productsave)
    
    }
     
    catch (err) {
        console.log(err);
       res.status(400).send(err.message)
    }
}

//find single product

const productitem=async(req,res)=>{
    try{
        const product = await Product.find({})
           console.log(product)
        res.send(product)
    }
    catch(err){
        
    }
}
//update the product
const updateProduct=async (req,res)=>{
    try{
        const update=await Product.updateOne({title:"xiomi"},{$set:{title:req.body.title}})
        res.send(update)
    }
    catch(err){

    }
}

//delete the product

const deleteproduct= async(req,res)=>{
    try{
          const Delete = await Product.deleteOne({title:req.body.title})
          res.send(Delete)
    }
    catch (err){
           console.log(err)
    }
}
module.exports = {addproduct, productitem, product_all,updateProduct,deleteproduct}