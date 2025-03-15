const express = require('express');
const { createDebate, getAllDebates,registerForDebate } = require('../controllers/debateController');

const router = express.Router();

router.post('/create', createDebate);
router.get('/', getAllDebates);
router.post('/register',registerForDebate);
module.exports = router;
