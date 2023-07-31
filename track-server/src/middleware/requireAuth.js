const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../models/User");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

//   console.log(authorization)

  if (!authorization) {
    return res.status(401).send({ error: "You must be logged in !" });
  }

  try {

    //   const token = authorization.replace("Bearer ", "");
      const result = jwt.verify(authorization, "MY_SECRET_KEY");
    
      if(result) {
        
        // const { userId } = payload;
        console.log("check", result)
        // const user = await User.findById(userId);
        // req.user = user;
        next();
      }
  } catch(err) {
    return res.status(401).send({ error: "You must be logged in!" });
  }

};
