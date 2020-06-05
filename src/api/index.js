import axios from 'axios';

export const fetchUserList = () => axios.get('https://jsonplaceholder.typicode.com/users');
