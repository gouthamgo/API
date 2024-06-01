import express from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

// Router initialization
const router = express.Router();

const users =[];

// const users = [
//     {
//         firstName: "John",
//         lastName: "Doe",
//         age: 25
//     },
//     {
//         firstName: "kris",
//         lastName: "rock",
//         age: 22
//     }
// ];

// GET route for /users
router.get('/', (req, res) => {
    console.log('GET request received at /users');
    console.log(users);  // This logs users to the server console
    res.json(users);     // This sends the users array as a JSON response
});

router.post('/', (req,res)=>{
    console.log('post route is fired');

    const user = req.body;

    const userId= uuidv4(); 

    const userWithId = {...user, id:userId};

    users.push(userWithId);

    res.send('POST ROUTE REACHED')
});

router.get('/:id', (req, res)=>{
    console.log(req.params)
    const {id} = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
})

export default router;
