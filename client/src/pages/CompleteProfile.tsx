import React, { useState } from 'react';
import { Form } from '../components/Form/Form';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: ${({ theme }) => 
    theme.name === 'dark' 
      ? 'radial-gradient(circle at center, #1a1a1a 0%, #0D0D0D 100%)' 
      : 'radial-gradient(circle at center, #ffffff 0%, #f0f0f0 100%)'};
`;

const FuriaCard = styled.div`
  width: 100%;
  max-width: 48rem;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 16px;
  box-shadow: 0 10px 25px ${({ theme }) => theme.colors.shadow};
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ff4655 0%, #ff2e44 50%, #ff1a35 100%);
  }
`;

const FuriaTitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  position: relative;
  display: inline-block;
  width: 100%;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: ${({ theme }) => theme.colors.accent};
    margin: 0.5rem auto 0;
  }
`;

const FuriaSubtitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.125rem;
  margin-bottom: 2.5rem;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const FuriaSkipButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: white;
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }
`;

const FuriaErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  padding: 0.75rem;
  background: ${({ theme }) => theme.name === 'dark' ? 'rgba(255, 70, 85, 0.1)' : 'rgba(255, 70, 85, 0.05)'};
  border-radius: 8px;
  border-left: 3px solid ${({ theme }) => theme.colors.accent};
`;

const FuriaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const FuriaSectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.25rem;
  margin-bottom: 1rem;
  grid-column: 1 / -1;
  position: relative;
  padding-left: 1rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 60%;
    width: 3px;
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const CompleteProfile: React.FC = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      setError(null);
      // Implementar a chamada API para atualizar o perfil
      console.log('Dados do perfil:', data);
      navigate('/profile');
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSkip = () => {
    navigate('/profile');
  };

  const personalInfoFields = [
    { name: 'phone', label: 'Telefone', type: 'tel', placeholder: '(00) 00000-0000' },
    { name: 'cpf', label: 'CPF', type: 'text', placeholder: '000.000.000-00' },
  ];

  const addressFields = [
    { name: 'address', label: 'Endereço', type: 'text', placeholder: 'Rua, número, complemento' },
    { name: 'city', label: 'Cidade', type: 'text', placeholder: 'Sua cidade' },
    { name: 'state', label: 'Estado', type: 'text', placeholder: 'Seu estado' },
    { name: 'country', label: 'País', type: 'text', placeholder: 'Seu país' },
    { name: 'zipCode', label: 'CEP', type: 'text', placeholder: '00000-000' },
  ];

  const gamingFields = [
    { name: 'bio', label: 'Biografia', type: 'textarea', placeholder: 'Conte sobre sua jornada nos games...' },
    { name: 'favoriteTeams', label: 'Times Favoritos', type: 'text', placeholder: 'FURIA, outros...' },
    { name: 'favoriteGames', label: 'Jogos Favoritos', type: 'text', placeholder: 'CS2, Valorant, etc...' },
  ];

  return (
    <Container>
      <FuriaCard>
        <FuriaSkipButton onClick={handleSkip}>Pular</FuriaSkipButton>
        
        <FuriaTitle>Complete Seu Perfil</FuriaTitle>
        <FuriaSubtitle>
          Faça parte da FURIA! Complete suas informações para uma experiência personalizada.
        </FuriaSubtitle>
        
        {error && <FuriaErrorMessage>{error}</FuriaErrorMessage>}
        
        <Form
          onSubmit={handleSubmit}
          submitText={isLoading ? "Salvando..." : "Finalizar Perfil"}
          disabled={isLoading}
          fields={[
            ...personalInfoFields,
            ...addressFields,
            ...gamingFields
          ]}
        />
      </FuriaCard>
    </Container>
  );
};

export default CompleteProfile;