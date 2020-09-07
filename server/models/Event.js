const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  room: {
    type: String,
  },
  unit: {
    type: Number,
  },
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event
