const ensureAunthenticated = require('../Middelwares/Auth');


const router = require('express').Router();

router.get('/', ensureAunthenticated, (req, res) => {
    console.log('----logged in user detail----', req.user);
    res.status(200).json([
        {
            name: "Mobile Phone",
            price: 10000
        },
        {
            name: "Smart TV",
            price: 15000
        },
    ])
});

module.exports = router;