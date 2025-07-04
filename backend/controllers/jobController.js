const Job = require('../models/Job');

exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate('postedBy', 'name');
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createJob = async (req, res) => {
  const { title, company, location, description } = req.body;

  try {
    const job = new Job({
      title,
      company,
      location,
      description,
      postedBy: req.user.id
    });

    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};