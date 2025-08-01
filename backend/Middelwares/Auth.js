const jwt = require('jsonwebtoken');

const ensureAunthenticated = (req,res,next) => {
    const auth = req.headers['authorization'];
    if(!auth){
        return res.status(401)
            .json({message: 'Unauthorized, JWT token is required'})

    }
    try {
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401)
            .json({message: 'Unauthorized, JWT token is wrong or expired'})

    
    }
}

module.exports = ensureAunthenticated;