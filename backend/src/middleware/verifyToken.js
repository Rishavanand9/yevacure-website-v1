const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    try{
        const token =  req.cookies.token
        if(!token){
            return res.status(401).send({message: "Invalid Token"})
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).send({message: "Invalid token or not valid"})
        }
        req.userId = decoded.userId;
        req.role = decoded.role;
        next();
    }catch(err){
        console.error("Error in verifying token", err);
        res.status(401).send({message: 'Server Error'})
    }
}

module.exports = verifyToken