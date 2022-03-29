const mongoose = require('mongoose');

const DashboardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    data: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Dashboard', DashboardSchema);