const { response } = require('express');
const model = require('../models/logistics');
const csv = require('csvtojson');

const importData = async (req,res) => {
    try{
        var data = [];
        csv().fromFile(req.file.path).then(async (response) => {
            console.log(response);
            for(var x=0; x<response.length; x++){
                data.push({
                    customer_id: response[x].customer_id,
                    tracking_id: response[x].tracking_id,
                    courier_partner: response[x].courier_partner,
                    awb_number: response[x].awb_number,
                    order_shipped_date: response[x].order_shipped_date,
                    expected_delivery_date: response[x].expected_delivery_date,
                    status: response[x].status,
                });
            }
            await model.insertMany(data);
        })

        res.send({
            status: 200,
            success: true,
            msg: "file uploaded successfully"
        })
    }catch(error){
        res.send({
            status: 400,
            success: false,
            msg: error.message,
        })
    }
}

module.exports = {
    importData
}