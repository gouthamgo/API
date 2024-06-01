import express from 'express';

// Router initialization
const router = express.Router();

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    },
    {
        firstName: "kris",
        lastName: "rock",
        age: 22
    }
];

// GET route for /users
router.get('/', (req, res) => {
    console.log('GET request received at /users');
    console.log(users);  // This logs users to the server console
    res.json(users);     // This sends the users array as a JSON response
});

router.post('/', (req,res)=>{
    console.log('post route is fired');

    const user = req.body;

    users.push(user);

    res.send('POST ROUTE REACHED')
});

export default router;
