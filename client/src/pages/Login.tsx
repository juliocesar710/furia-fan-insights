import React from 'react';
import { Form } from '../components/Form/Form';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';

interface LoginData {
  email: string;
  password: string;
}

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const LoginCard = styled.div`
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

const RegisterLink = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.accentHover};
    }
  }
`;

const Login: React.FC = () => {
  const { theme } = useTheme();

  const handleSubmit = (data: LoginData) => {
    console.log(data);
    // Aqui você implementará a lógica de login
  };

  const loginFields = [
    { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'Digite seu email' },
    { name: 'password', label: 'Senha', type: 'password', required: true, placeholder: 'Digite sua senha' },
  ];

  return (
    <LoginContainer>
      <LoginCard>
        <Title>Entrar</Title>
        <Form
          fields={loginFields}
          onSubmit={handleSubmit}
          submitText="Entrar"
        />
        <RegisterLink>
          Não tem uma conta? <Link to="/register">Registre-se</Link>
        </RegisterLink>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login; 