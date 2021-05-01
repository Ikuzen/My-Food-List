import express from 'express';
export const usersRouter = express.Router();
usersRouter.get('/', async (request, response) => {
    console.log('get users');
    response.send('welcome users');
});
