import axios from 'axios';

const API_URL = 'http://localhost:3000';

interface RegisterData {
  email: string;
  password: string;
}

// Configuração do interceptor do Axios
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const loginUser = async (data: RegisterData) => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, {
      email: data.email,
      password: data.password,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Erro ao fazer login');
  }
};
