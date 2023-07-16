"use client";

// import "./globals.css";
import { Montserrat } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Manual Landing Page",
  description: "A landing page by Manual.co",
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#34d1d1",
    pineGreen: "#0c3c3d",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <GlobalStyle />
        <body className={montserrat.className}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
