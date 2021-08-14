const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

// register

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
  });
  try {
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(401).json(err);
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Nieprawidłowe hasło lub email");
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    originalPassword !== req.body.password && res.status(401).json("Nieprawidłowe hasło lub email koleżko");

    const { password, ...info } = user._doc;
    res.status(200).json(INFO );
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
