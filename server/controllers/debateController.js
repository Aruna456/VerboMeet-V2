const Debate = require('../models/Debate');

const createDebate = async (req, res) => {
  try {
    const { title, desc, eventDetails, category } = req.body;

    if (!title || !desc || !eventDetails || !category) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const debate = new Debate({ title, desc, eventDetails, category });
    await debate.save();
    res.status(201).json({ message: 'Debate created successfully', debate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

const getAllDebates = async (req, res) => {
  try {
    const debates = await Debate.find();
    res.status(200).json(debates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = { createDebate, getAllDebates };
