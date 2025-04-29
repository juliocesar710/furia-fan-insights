import ThemeToggleButton from '../components/ThemeToggleButton';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const HomePage = () => {
  return (
      <Container>
        <Title>Bem-vindo à HomePage</Title>
        <p>Teste o botão abaixo para alternar entre os temas claro e escuro.</p>
        <ThemeToggleButton/>
      </Container>
  );
};

export default HomePage;