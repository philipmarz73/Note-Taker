// Set required path and express router
const path = require('path');

const router = require('express').Router();
// set routes to retrieve input notes and generate them on the page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
