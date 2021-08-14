const router = require("express").Router();
const User = require("../models/User");
const CryptoJs = require("crypto-js");
const verify = require("../verifyToken");

// update
router.put("/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true  });
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Możesz dokonać aktualizacji tylko swojego konta.");
  }
});

// delete

// get

// get all

// get user stats

module.exports = router;
