import axios from 'axios';

const BASE_BACKEND_URL = 'https://jsonplaceholder.typicode.com';

export default {
  getAllFotos: () => 
    axios.get(`${BASE_BACKEND_URL}/photos`),
  addFoto: (foto) => 
    axios.post(`${BASE_BACKEND_URL}/photos`, foto),
  editFoto: (fotoId) =>
    axios.get(`${BASE_BACKEND_URL}/photos/${fotoId}`),
  updateFoto: (foto) =>
    axios.put(`${BASE_BACKEND_URL}/photos/${foto.id}`, foto),
  deleteFoto: (fotoId) =>
    axios.delete(`${BASE_BACKEND_URL}/photos/${fotoId}`),
}