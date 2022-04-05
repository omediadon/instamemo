import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000/api' });
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('profile');
    if (token) {
        req.headers.Authorization = `Bearer ${JSON.parse(token).token}`;
    }
    return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPosts = (newPost) => API.post('/posts',newPost);
export const updatePosts = (id,updatedPost) => API.patch(`/posts/${id}`,updatedPost);
export const likePosts = (id) => API.patch(`/posts/${id}/like`);
export const unLikePosts = (id) => API.patch(`/posts/${id}/unlike`);
export const deletePosts = (id) => API.delete(`/posts/${id}`);
export const deleteImage = (id) => API.delete(`/posts/image/${id}`);

export const signin = (formData) => API.post('/user/signin',formData);
export const signup = (formData) => API.post('/user/signup',formData);