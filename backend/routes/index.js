const express = require('express');
const router = express.Router();
const {generate} = require('./gemini');

router.post('/generate', async (req, res) => {
    const stack = req.body.stack;
    const difficulty = req.body.difficulty;
    
    const response = await generate(stack,difficulty);
    res.send({data: response});
})

module.exports = router;