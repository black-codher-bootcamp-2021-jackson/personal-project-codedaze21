const mongoose = require("mongoose");
const Cards = mongoose.model("cards");

const cardRoutes = (app) => {
  app.get(`/api/cards`, async (req, res) => {
    const cards = await Cards.find();

    return res.status(200).send(cards);
  });

  app.post(`/api/cards`, async (req, res) => {
    const cards = await Cards.create(req.body);

    return res.status(201).send({
      error: false,
      cards,
    });
  });

  app.put(`/api/cards/:id`, async (req, res) => {
    const { id } = req.params;

    const cards = await Cards.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      cards,
    });
  });

  app.delete(`/api/cards/:id`, async (req, res) => {
    const { id } = req.params;

    const cards = await Cards.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      cards,
    });
  });
};

module.exports = cardRoutes;