import express from "express";
import mongoose from "mongoose";
import GymRecord from './GymRecord.js'
import router from './router.js'

const PORT = 5001;
const DB_URL = `mongodb+srv://kukuevfedor:MyPassword01@cluster0.xovq0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());
app.use('/api', router);

app.get("/", (req, res) => {
  res.status(200).json(`server is working on 5001 port`);
});

const startApp = async () => {
  try {
		await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true});
		app.listen(PORT, console.log("server started on " + PORT));
  } catch (e) {
    console.log(e);
  }
};

startApp();
