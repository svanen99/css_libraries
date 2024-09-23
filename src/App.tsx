'use client'
import { useEffect, useState } from "react";
import Header from './components/Header';
import Button from './components/Button';
import Cards from './components/Cards';
import LogIn from './components/LogIn';

export default function RootLayout({
}: Readonly<{
}>) {
  const [userName, setUserName] = useState<string | null>(null);
  const images = [
    "/pepz.png",
    "/pepz1.png",
    "/pepz2.png",
    "/pepz3.png",
    "/pepz4.png",
    "/pepz5.png",
    "/pepz6.png",
    "/pepz7.png",
    "/pepz8.png",
    "/pepz9.png",
    "/pepz10.png",
    "/pepz11.png",
    "/pepz12.png", 
    "/pepz13.png",
    "/pepz14.png",
    "/pepz15.png",
    "/pepz16.png",
    "/pepz17.png",
    "/pepz19.png",
    "/pepz28.png"
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  useEffect(() => {
    const savedName = localStorage.getItem("savedUserName");
    if (savedName) {
      setUserName(JSON.parse(savedName));
    }
  }, []);

  return (
    <html lang="en">
      <body>
        {!userName && <LogIn updateFunction={setUserName} />}
        {userName && (
          <>
            <Header />
            <Cards
              content="I am glad you logged in! Press the button for more pics!"
              color="#f86ec5"
              image={randomImage}
            />
            <Button /> 
          </>
        )}
      </body>
    </html>
  );
}