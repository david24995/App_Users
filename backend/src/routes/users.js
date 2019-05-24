const { Router } = require('express');
const faker = require('faker');
const router = Router();
const { User } = require('../models/user');

router.get('/users', async(req, res) => {

    const users = await User.find();
    const count = await User.countDocuments();
    res.json({
        data: users,
        count
    });

});

router.get('/create', async(req, res) => {

    for (let i = 0; i < 5; i++) {
        await User.create({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            avatar: faker.image.avatar()
        });
    }

    res.json({ message: '5 users created' });
})

module.exports = router;