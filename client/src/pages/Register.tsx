import React, { useState } from 'react';
import { Form } from '../components/Form/Form';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import { registerUser } from '../api/User/userRegister';
import { useNavigate } from 'react-router-dom';

interface RegisterData {
  name: string;
  email: string;
  password: string;
  nickname?: string;
  birthDate?: string;
  favoriteTeam?: string;
}

const RegisterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const RegisterCard = styled.div`
  width: 100%;
  max-width: 28rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radius.card};
  box-shadow: 0 4px 6px ${({ theme }) => theme.colors.shadow};
`;

const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.875rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 2rem;
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  text-align: center;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;

const Register: React.FC = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: RegisterData) => {
    try {
      setIsLoading(true);
      setError(null);
      await registerUser(data);
      navigate('/home');
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const registerFields = [
    { name: 'name', label: 'Nome', type: 'text', required: true, placeholder: 'Digite seu nome completo' },
    { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'Digite seu email' },
    { name: 'password', label: 'Senha', type: 'password', required: true, placeholder: 'Digite sua senha' },
    { name: 'birthDate', label: 'Data de Nascimento', type: 'date', placeholder: 'Selecione sua data de nascimento (opcional)' },
  ];

  return (
    <RegisterContainer>
      <RegisterCard>
        <Title>Criar uma conta</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Form
          fields={registerFields}
          onSubmit={handleSubmit}
          submitText={isLoading ? "Registrando..." : "Registrar"}
          disabled={isLoading}
        />
      </RegisterCard>
    </RegisterContainer>
  );
};



export default Register; 