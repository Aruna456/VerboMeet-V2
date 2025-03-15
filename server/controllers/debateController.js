const Debate = require('../models/Debate');
const User = require('../models/User');

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

async function registerForDebate(req, res) {
  const { userId, debateId } = req.body; // Assuming you are sending userId and debateId in the body
  
  try {
    // Find the user
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    // Find the debate
    const debate = await Debate.findById(debateId);
    
    if (!debate) {
      return res.status(404).json({ error: 'Debate not found' });
    }

    // Check if the user is already registered for the debate
    if (user.registeredDebates.includes(debateId)) {
      return res.status(400).json({ error: 'User is already registered for this debate' });
    }

    // Register the user for the debate
    user.registeredDebates.push(debateId);
    await user.save();

    return res.status(200).json({ message: 'User successfully registered for the debate', user });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
}



module.exports = { createDebate, getAllDebates,registerForDebate };
