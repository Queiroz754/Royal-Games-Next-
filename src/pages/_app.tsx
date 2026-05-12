// Tudo que você colocar aqui vai existir em todas as telas.
// O que normalmente vai aqui:
// CSS global
// Layout padrão (header, footer)
import "../styles/global.css";
import type { AppProps } from "next/app";
import { Orbitron } from "next/font/google";
import { Exo_2 } from "next/font/google";
import { Component } from "react";
// import { ToastContainer } from "react-toastify";

const orbitron = Orbitron({
  variable: "--fonte-padrao",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const exo2 = Exo_2({
  variable: "--fonte-secundaria",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${orbitron.variable} ${exo2.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}