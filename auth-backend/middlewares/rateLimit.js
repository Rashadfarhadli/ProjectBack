const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Çoxlu sayda sorğu göndərildi. Biraz sonra yenidən cəhd edin.",
});

module.exports = limiter;
