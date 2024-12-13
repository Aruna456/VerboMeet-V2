const express = require('express');
const { createDebate, getAllDebates } = require('../controllers/debateController');

const router = express.Router();

router.post('/create', createDebate);
router.get('/', getAllDebates);

module.exports = router;
