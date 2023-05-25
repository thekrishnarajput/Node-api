/* const customerModel = require("./model/customerModel");

//create customer 
exports.customerCreate = async (req, res) => {
    try {
        let Body = req.body;
        let saveCustomerResult = await customerModel.createCustomer(Body);
        if (saveCustomerResult) {
            res.status(200), json("saveCustomerResult");
        } else {
            res.status(400).json({ message: "Could not be Created" });
        }
    } catch(error) {
        res.status(400).send(error);
    }
}

//get all customers

exports.findAllCustomer = async (req, res) => {
    try {
        let customerResult = await customerModel.findAll();
        if (customerResult) {
            res.status(200).json("customerResult");
        } else {
            res.status(400).json({ message: "customer not found" });
        }
    }
    catch (error){
        res.status(400).send(error);        
    }
} */