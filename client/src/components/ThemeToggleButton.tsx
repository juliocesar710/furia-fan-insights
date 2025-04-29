import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.text};
  transition: color 0.3s ease;
  font-size: 24px;
  

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme}>
      
      {theme.name === 'light' ? '🌙' : '☀️'}
    </ToggleButton>
  );
};

export default ThemeToggleButton;