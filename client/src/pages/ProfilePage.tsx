import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';

const ProfileContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: ${({ theme }) => 
    theme.name === 'dark' 
      ? 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)' 
      : 'linear-gradient(135deg, #f8f8f8 0%, #e0e0e0 100%)'};
`;

const ProfileCard = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  border: ${({ theme }) => theme.name === 'dark' 
    ? '1px solid rgba(255, 102, 0, 0.3)' 
    : '1px solid rgba(0, 0, 0, 0.1)'};
  position: relative;
  
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

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  flex-direction: column;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  margin-right: 0;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const UserNickname = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const UserBio = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  line-height: 1.6;
`;

const EditButton = styled(Link)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: white;
    transform: translateY(-2px);
  }
`;

const Section = styled.div`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
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
    background: linear-gradient(to bottom, #FF6600, #FF3300);
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const InfoItem = styled.div`
  margin-bottom: 1rem;
`;

const InfoLabel = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

const InfoValue = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-weight: 500;
`;

const GamingBadge = styled.span<{ level: string }>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: ${({ level, theme }) => 
    level === 'pro' ? 'rgba(255, 51, 0, 0.2)' :
    level === 'competitive' ? 'rgba(255, 102, 0, 0.2)' :
    'rgba(0, 0, 0, 0.1)'};
  color: ${({ level, theme }) => 
    level === 'pro' ? '#FF3300' :
    level === 'competitive' ? '#FF6600' :
    theme.colors.textSecondary};
`;

const ProfilePage: React.FC = () => {
  const { theme } = useTheme();
  
  // Dados mockados do usuário (substituir por dados reais da API)
  const userData = {
    name: 'João Silva',
    email: 'joao@exemplo.com',
    nickname: 'FURIA_Joao',
    birthDate: '1990-05-15',
    phone: '(11) 98765-4321',
    address: 'Rua das Gameplays, 123',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '01234-567',
    favoriteTeam: 'FURIA',
    mainGame: 'CS2',
    gamingLevel: 'competitive',
    bio: 'Jogador competitivo de CS2, fã da FURIA desde 2018. Participante de vários campeonatos regionais.'
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  const getLevelLabel = (level: string) => {
    switch(level) {
      case 'pro': return 'Profissional';
      case 'competitive': return 'Competitivo';
      default: return 'Casual';
    }
  };

  return (
    <ProfileContainer theme={theme}>
      <ProfileCard theme={theme}>
        <EditButton to="/complete-profile">Editar Perfil</EditButton>
        
        <ProfileHeader>
          <Avatar theme={theme}>
            {userData.name.charAt(0).toUpperCase()}
          </Avatar>
          <UserInfo>
            <UserName theme={theme}>{userData.name}</UserName>
            <UserNickname theme={theme}>@{userData.nickname}</UserNickname>
            <UserBio theme={theme}>{userData.bio}</UserBio>
          </UserInfo>
        </ProfileHeader>

        <Section>
          <SectionTitle theme={theme}>Informações Pessoais</SectionTitle>
          <InfoGrid>
            <InfoItem>
              <InfoLabel theme={theme}>Email</InfoLabel>
              <InfoValue theme={theme}>{userData.email}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel theme={theme}>Data de Nascimento</InfoLabel>
              <InfoValue theme={theme}>{formatDate(userData.birthDate)}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel theme={theme}>Telefone</InfoLabel>
              <InfoValue theme={theme}>{userData.phone}</InfoValue>
            </InfoItem>
          </InfoGrid>
        </Section>

        <Section>
          <SectionTitle theme={theme}>Endereço</SectionTitle>
          <InfoGrid>
            <InfoItem>
              <InfoLabel theme={theme}>Endereço</InfoLabel>
              <InfoValue theme={theme}>{userData.address}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel theme={theme}>Cidade/Estado</InfoLabel>
              <InfoValue theme={theme}>{userData.city}/{userData.state}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel theme={theme}>CEP</InfoLabel>
              <InfoValue theme={theme}>{userData.zipCode}</InfoValue>
            </InfoItem>
          </InfoGrid>
        </Section>

        <Section>
          <SectionTitle theme={theme}>Preferências de Gaming</SectionTitle>
          <InfoGrid>
            <InfoItem>
              <InfoLabel theme={theme}>Time Favorito</InfoLabel>
              <InfoValue theme={theme}>{userData.favoriteTeam}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel theme={theme}>Jogo Principal</InfoLabel>
              <InfoValue theme={theme}>{userData.mainGame}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel theme={theme}>Nível</InfoLabel>
              <InfoValue theme={theme}>
                <GamingBadge level={userData.gamingLevel}>
                  {getLevelLabel(userData.gamingLevel)}
                </GamingBadge>
              </InfoValue>
            </InfoItem>
          </InfoGrid>
        </Section>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default ProfilePage;