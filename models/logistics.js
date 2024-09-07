const mongoose = require('mongoose');

const logisticSchema = mongoose.Schema({
    customer_id: {
        type: String
    },
    tracking_id: {
        type: String
    },
    courier_partner: {
        type: String
    },
    awb_number: {
        type: String
    },
    order_shipped_date: {
        type: String
    },
    expected_delivery_date: {
        type: String
    },
    status: {
        type: String
    }
});

module.exports = mongoose.model('logistic', logisticSchema);