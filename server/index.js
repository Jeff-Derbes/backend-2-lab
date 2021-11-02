const express = require('express')
const cors = require('cors')
const app = express()


app.use(express.json())
app.use(cors())


const {
    getHouses,
    deleteHouse,
    createHouse,
    updateHouse
} = require('./controller')


app.get(`/api/houses`, getHouses)
app.delete(`/api/houses/:id`, deleteHouse)
app.post(`/api/houses`, createHouse)
app.put(`/api/houses/:id`, updateHouse)


// changed to port 4002 because I was having trouble with 4004. Also changed the address in main.js to match it and it's working now
app.listen(4002, () => console.log(`running on 4002`))