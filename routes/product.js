
const productcontroller=require("../controller/productcontroller")

const productrouter = require("express").Router()

productrouter.post('/',productcontroller.addproduct)
productrouter.get('/',productcontroller. productitem)
productrouter.get('/',productcontroller.product_all)
productrouter.put('/',productcontroller.updateProduct)
productrouter.delete('/',productcontroller.deleteproduct)

module.exports=productrouter;
