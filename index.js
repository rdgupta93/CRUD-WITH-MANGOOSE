const mongoose = require('mongoose');

const main = async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
    const ProductSchema = new mongoose.Schema({
        name:String,
        price:Number,
        brand:String,
        category:String
    });
    const ProductsModel = mongoose.model('products',ProductSchema);
    let data = new ProductsModel({name:"m 13",price:15500,brand:"max",category:"mobile"});
    let result = await data.save();
    console.log(result)
}
main()




