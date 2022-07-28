import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 87IsynnsccCR9SgUDjd9CMW5Ap8dAygOsfX20vJ0tDg',
  },
});
