const Visit = require("../models/visit.js");

function create(req, res) {
    visit.reviews.push(req.body);
    visit.save(function (err) {
      res.redirect(`/visit/${visit._id}`);
    });
  };


module.exports = {
  create,
};
