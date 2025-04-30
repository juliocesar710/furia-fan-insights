import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      background: string;
      text: string;
      textSecondary: string;
      accent: string;
      accentHover: string;
      card: string;
      border: string;
      inputBackground: string;
      shadow: string;
    };
    font: {
      family: string;
      size: string;
      weight: {
        regular: number;
        bold: number;
      };
    };
    radius: {
      card: string;
      button: string;
    };
  }
}

export type Theme = typeof lightTheme;

export const lightTheme = {
  name: "light",
  colors: {
    background: "#FDFDFD",
    text: "#0A0A0A",
    textSecondary: "#444",
    accent: "#1A1A1A",
    accentHover: "#000000",
    card: "#FFFFFF",
    border: "#D0D0D0",
    inputBackground: "#F5F5F5",
    shadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
  },
  font: {
    family: "'Roboto', sans-serif",
    size: "16px",
    weight: {
      regular: 400,
      bold: 700,
    },
  },
  radius: {
    card: "12px",
    button: "8px",
  },
};

  
  
  export const darkTheme = {
    name: "dark",
    colors: {
      background: "#0A0A0A",
      text: "#F0F0F0",
      textSecondary: "#B0B0B0",
      accent: "#FFFFFF",
      accentHover: "#E0E0E0",
      card: "#121212",
      border: "#1F1F1F",
      inputBackground: "#161616",
      shadow: "0px 4px 12px rgba(255, 255, 255, 0.05)",
    },
    font: {
      family: "'Roboto', sans-serif",
      size: "16px",
      weight: {
        regular: 400,
        bold: 700,
      },
    },
    radius: {
      card: "12px",
      button: "8px",
    },
  };