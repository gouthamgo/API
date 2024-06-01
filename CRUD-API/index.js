import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Use the users routes
app.use('/users', usersRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Hello from GP');
});

// Start the server
app.listen(PORT, () => console.log(`The server is running at http://localhost:${PORT}`));
