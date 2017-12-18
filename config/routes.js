const router 			 = require('express').Router();
const filmeController = require("../controller/filmeController");

router.get('/', (req, res) => {
    res.send("Hello World");
});

/* Route Music */
// router.get('/filmes', filmeController.list);
// localhost:3000/api
router.post('/filmes', filmeController.save);

module.exports = router;  