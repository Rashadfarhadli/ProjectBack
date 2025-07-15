const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/login", async (req, res) => {
  try {
    const { gmail, password } = req.body;

    if (!gmail || !password) {
      return res.status(400).json({ error: "gmail və ya şifrə daxil edilməyib" });
    }

    const user = await User.findOne({ gmail });
    if (!user) {
      return res.status(404).json({ error: "İstifadəçi tapılmadı" });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: "Şifrə yanlışdır" });
    }

    res.status(200).json({
      message: "Uğurlu giriş!",
      user: {
        id: user._id,
        fullName: user.fullName,
        gmail: user.gmail,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ error: "Server xətası", message: err.message });
  }
});

module.exports = router;
