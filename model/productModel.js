const mongoose = require('mongoose');

const productSchema = new Schema({
    company_name: {
        type: String,
        required: true,
    },
    product_name: {
        type: String,
        required: true,
    },
    price: Number,
    details: String
});

export const saveProduct = async (params) => {

    const product = mongoose.model('Product', productSchema);
    const productSave = product(8)
    //     .save(params);
    // return productSave;
}

module.exports = mongoose.model("Product", productSchema);