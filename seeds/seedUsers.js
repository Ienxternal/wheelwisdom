const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
    {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: bcrypt.hashSync('password1', 10),
    },
    {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        password: bcrypt.hashSync('password2', 10),
    },
    {
        name: 'Alice',
        email: 'alice@example.com',
        password: bcrypt.hashSync('password3', 10),
    },
    {
        name: 'Bob',
        email: 'bob@example.com',
        password: bcrypt.hashSync('password4', 10),
    },
    {
        name: 'Charlie',
        email: 'charlie@example.com',
        password: bcrypt.hashSync('password5', 10),
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
