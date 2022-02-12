const mongoose = require("mongoose");
const User = mongoose.model("users");
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
let Users = require('../models/Users');
const multer = require('multer');

const userRoutes = (app) => {
  app.get(`/api/user`, async (req, res) => {
    const users = await User.find();

    return res.status(200).send(users);
  });

  app.get(`/api/user/:id`, async (req, res) => {
    const { id } = req.params;
    console.log(id)
    const user = await User.find({userId: id});
    console.log(decks)
    return res.status(200).send(decks);
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
              id: user._id,
          }, 
          'br41nsync8'
          )

          return res.json({ status: 'ok', user: token, data: user })
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

  const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '/uploads');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });

app.post("/api/user", upload.single('photo'), async (req, res) => {
    const firstName = req.body.firstName;
    const bio = req.body.bio;
    const image = req.file.filename;

    const newUsersData = {
        firstName,
        bio,
        image
    }

    const newUsers = new Users(newUsersData);
    console.log(newUsersData)
    newUsers.save()
           .then(() => res.json('User Added'))
           .catch(err => res.status(400).json('Error: ' + err));

           console.log(newUsersData.image)
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