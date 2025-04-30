import React, { useState } from 'react';
import { Form } from '../components/Form/Form';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import { registerUser } from '../api/User/userRegister';
import { useNavigate, Link } from 'react-router-dom';

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
  background: ${({ theme }) => theme.name === 'dark' 
    ? 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)' 
    : 'linear-gradient(135deg, #f8f8f8 0%, #e0e0e0 100%)'};
`;

const RegisterCard = styled.div`
  width: 100%;
  max-width: 32rem;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border: ${({ theme }) => theme.name === 'dark' 
    ? '1px solid rgba(255, 102, 0, 0.3)' 
    : '1px solid rgba(0, 0, 0, 0.1)'};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #FF6600 0%, #FF3300 100%);
  }
`;

const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  display: inline-block;
  width: 100%;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #FF6600 0%, #FF3300 100%);
    margin: 0.5rem auto 0;
  }
`;

const ErrorMessage = styled.div`
  color: #FF3300;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: rgba(255, 51, 0, 0.1);
  padding: 0.5rem;
  border-radius: 4px;
`;

const LoginLink = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;

  a {
    color: ${({ theme }) => theme.name === 'dark' ? '#FF6600' : '#FF3300'};
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.name === 'dark' ? '#FF3300' : '#FF6600'};
      text-decoration: underline;
    }
  }
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
      navigate('/complete-profile');
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
    <RegisterContainer theme={theme}>
      <RegisterCard theme={theme}>
        <Title>Criar Conta</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Form
          fields={registerFields}
          onSubmit={handleSubmit}
          submitText={isLoading ? "Registrando..." : "Registrar"}
          disabled={isLoading}
         
        />
        <LoginLink theme={theme}>
          Já tem uma conta? <Link to="/login">Faça login</Link>
        </LoginLink>
      </RegisterCard>
    </RegisterContainer>
  );
};

export default Register;