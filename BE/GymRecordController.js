import GymRecord from './GymRecord.js'

class GymRecordController {
  async create(req, res) {
    try {
      const { workoutType, when } = req.body;
      const gymRecord = await GymRecord.create({workoutType, when});
      res.json(gymRecord);
    } catch(e) {
      res.status(500).json(e)
    }
  }

  async getAll(req, res) {
    try {
      const gymRecords = await GymRecord.find();
      return res.json(gymRecords);
    } catch(e) {
      res.status(500).json(e)
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({message: "ID is missing"});
      }
      const gymRecord = await GymRecord.findById(id);
      return res.json(gymRecord);
    } catch(e) {
      res.status(500).json(e)
    }  
  }

  async update(req, res) {
    try {
      const gymRecord = req.body;
      if (!gymRecord._id) {
        res.status(400).json({message: "ID is missing"});
      }
      const updatedRecord = await GymRecord.findByIdAndUpdate(gymRecord._id, gymRecord, {new: true});
      return res.json(updatedRecord);
    } catch(e) {
      res.status(500).json(e)
    }  
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({message: "ID is missing"});
      }
      console.log(id);
      const gymRecord = await GymRecord.findByIdAndDelete(id);
      return res.json(gymRecord);
    } catch(e) {
      res.status(500).json(e)
    }  
  }
}

export default new GymRecordController();