const router = require('express').Router()
const Dashboard = require('../models/Dashboard')

router.route('/').get((req, res) => {
    Dashboard.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const data = req.body.data;
    const newData = new Dashboard({ title, data })
    newData.save()
        .then(() => res.json('Data added'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;