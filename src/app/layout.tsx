import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JMTechSolutions - Desenvolvimento de Sistemas sob Medida",
  description: "Automação e APIs para empresas que buscam inovação, eficiência e crescimento acelerado. Desenvolvimento web, automação de processos, integrações e consultoria técnica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
