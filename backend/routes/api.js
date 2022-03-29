const router = require('express').Router()
const { v4: uuidv4 } = require('uuid');
let data = [
    {
        id: uuidv4(),
        name: 'A1',
        value: 100
    },
    {
        id: uuidv4(),
        name: 'A2',
        value: 300
    },
    {
        id: uuidv4(),
        name: 'A3',
        value: 100
    },
    {
        id: uuidv4(),
        name: 'A4',
        value: 80
    }
]

router.get('/', (req, res) => {
    res.send(data)
})

router.post('/', (req, res) => {
    const newData = req.body;
    data.push({ ...newData, id: uuidv4() })
    res.send(`Data with name ${newData.name} added to the API`)
})

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { name, value } = req.body;
    let dataToBeUpdated = data.find((d) => d.id === id)
    if (name) dataToBeUpdated.name = name;
    if (value) dataToBeUpdated.value = value
    res.send(`Data with id ${id} updated!`)
})

module.exports = router;