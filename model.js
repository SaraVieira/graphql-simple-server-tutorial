import mongoose from 'mongoose'

const Talk = mongoose.model('Talk', {
  name: String,
  conferenceName: String,
  video: String,
  votes: Number,
  description: String,
  speakerName: String,
  date: Date
})

export default Talk
