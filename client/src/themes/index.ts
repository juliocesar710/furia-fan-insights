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
      background: "#f9f9f9",
      text: "#1f1f1f",
      textSecondary: "#444",
      accent: "#ff4655",
      accentHover: "#e53947",
      card: "#ffffff",
      border: "#e0e0e0",
      inputBackground: "#f0f0f0",
      shadow: "rgba(0, 0, 0, 0.1)",
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
  }
  
  
  export const darkTheme = {
    name: "dark",
    colors: {
      background: "#0D0D0D",
      text: "#FFFFFF",
      textSecondary: "#B3B3B3",
      accent: "#FF4655",
      accentHover: "#FF2E44",
      card: "#1a1a1a",
      border: "#2c2c2c",
      inputBackground: "#121212",
      shadow: "rgba(255, 70, 85, 0.2)",
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
  }
  