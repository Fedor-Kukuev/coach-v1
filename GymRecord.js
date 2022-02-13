import mongoose from "mongoose";

const GymRecord = new mongoose.Schema({
  workoutType: {type: String, required: true},
  when: {type: String, required: true},
  benchPress: {type: String, required: false},
  shoulderPress: {type: String, required: false},
  barPushUps: {type: String, required: false},
  squats: {type: String, required: false},
  deadLift: {type: String, required: false},
  abs: {type: String, required: false},
  pullUps: {type: String, required: false},
  bentOverRow: {type: String, required: false},
  bicepsCurls: {type: String, required: false},
});

export default mongoose.model('GymRecord', GymRecord);