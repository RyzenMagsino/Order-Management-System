const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    deliveryAddress: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    orderDate: {
        type: String,
        required: true
    },
    orderTime: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    orderDetails: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        productData: {
            productName: String,
            price: Number,
            ingredients: [String]
        },
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 1
        }
    }],
    totalAmount: {
        type: Number,
        required: true
    },
    notes: {
        type: String
    },
    status: {
        type: String,
        default: 'Pending'
    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Completed', 'Failed', 'Refunded'],
        default: 'Pending'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);
