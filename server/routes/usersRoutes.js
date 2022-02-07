const mongoose = require("mongoose");
const User = mongoose.model("users");
const jwt = require('jsonwebtoken')

const userRoutes = (app) => {
  app.get(`/api/user`, async (req, res) => {
    const users = await User.find();

    return res.status(200).send(users);
  });



  app.post('/api/registerUser', async (req,res) => {
    console.log(req.body)
    try {
        await User.create({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        password: req.body.password,
      })
      res.json({status: 'ok'})
    } catch (err) {
      res.json({status: 'error', error: 'Duplicate email' })
    }
    
  })

  app.post('/api/loginuser', async (req,res) => {

        const user = await User.findOne({
        emailAddress: req.body.emailAddress,
        password: req.body.password,
      })

      if (user) {

          const token = jwt.sign(
            {
              emailAddress: user.emailAddress,
              password: user.password,
          }, 
          'br41nsync8'
          )

          return res.json({ status: 'ok', user: token })
      } else {
        return res.json({ status: 'error', user: false})
      }
    
  })

  app.post(`/api/user`, async (req, res) => {
    const user = await User.create(req.body);

    return res.status(201).send({
      error: false,
      user,
    });
  });


  app.put(`/api/user/:id`, async (req, res) => {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      user,
    });
  });

  app.delete(`/api/user/:id`, async (req, res) => {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      user,
    });
  });
};

module.exports = userRoutes;