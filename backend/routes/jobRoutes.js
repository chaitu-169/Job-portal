const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middleware/authMiddleware');
const jobController = require('../controllers/jobController');

router.route('/')
  .get(jobController.getAllJobs)
  .post(protect, adminOnly, jobController.createJob);

module.exports = router;