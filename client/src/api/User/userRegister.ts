import axios from 'axios';

const API_URL = 'http://localhost:3000';

interface RegisterData {
  name: string;
  email: string;
  password: string;
  birthDate?: string;
}

export const registerUser = async (data: RegisterData) => {
  try {
    const response = await axios.post(`${API_URL}/user/register`, {
      name: data.name,
      email: data.email,
      password: data.password,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Erro ao registrar usuário');
  }
};
