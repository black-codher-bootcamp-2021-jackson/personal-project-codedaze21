const mongoose = require("mongoose");
const Decks = mongoose.model("decks");

const deckRoutes = (app) => {

  // app.post(`/api/decks`, async (req, res) => {
  //   const decks = await Decks.create(req.body);

  //   return res.status(201).send({
  //     error: false,
  //     decks,
  //   });
  // });

  app.get(`/api/decks/:id`, async (req, res) => {
    const { id } = req.params;
    console.log(id)
    const decks = await Decks.find({userId: id});
    console.log(decks)
    return res.status(200).send(decks);
  });

  app.put(`/api/decks/:id`, async (req, res) => {
    const { id } = req.params;

    const decks = await Decks.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      decks,
    });
  });

  app.delete(`/api/decks/:id`, async (req, res) => {
    const { id } = req.params;

    const decks = await Decks.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      decks,
    });
  });
};

module.exports = deckRoutes;