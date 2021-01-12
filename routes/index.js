const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'AR Experiment' })
});

router.get('/ARmarker', (req, res, next) => {
  res.render('ARmarker')
});

module.exports = router