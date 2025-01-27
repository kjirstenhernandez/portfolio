import type { Metadata } from "next";
import { Esteban, Quicksand } from "next/font/google";
import "./globals.css";


const quicksand = Quicksand({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
})


const esteban = Esteban({
  subsets: ["latin"], weight: ["400"]
})

export const metadata: Metadata = {
  title: "Portfolio - Kjirsten Hernandez",
  description: "Thanks for vising my online portfolio!  I'm a Software Engineering student with a passion for building dynamic, high-performance applications.  Explore my projects, technical skills, and experience in languages like JavaScript, Next.js, and ASP.NET Core. I'm eager to develop my expertise with innovative teams -- contact me to discuss how I can contribute to your team's success!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${esteban.className} ${quicksand.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
