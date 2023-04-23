/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { Inter } from "next/font/google";
import { useEffect, useState, useRef } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumCircle,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import me3d from "../../public/3d_me.png";
import web1 from "../../public/web1.jpg";
import web2 from "../../public/web2.png";

import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [age, setAge] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const today = new Date();
    const birthDate = new Date("2003-09-28");
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setAge(age.toString());
  }, [age]);

  const ref = useRef<null | HTMLDivElement>(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Kayk Mascarenhas - Portifólio</title>
      </Head>
      <main
        className={`${inter.className} bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900`}
      >
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Kayk Mascarenhas</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <button
                  className="bg-gradient-to-r from-purple-500 text- to-violet-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  onClick={handleClick}
                >
                  Resumo
                </button>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-violet-600 font-medium md:text-6xl">
              Kayk Mascarenhas
            </h2>
            <h3 className="text-2xl py-2 md: text-3xl dark:text-white ">
              Desenvolvedor Fullstack
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
              Atualmente atuando como Estagiário em Desenvolvimento ETL.
              programador fullstack com conhecimentos em Javascript, Php e
              Python
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://github.com/KsmKayk" target="_blank">
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kaykmascarenhas/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a href="https://medium.com/@kaykdsg" target="_blank">
              <AiFillMediumCircle />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-violet-500 rounded-full w-80 h-80 mt-20 md:h-96 md:w-96">
            <Image src={me3d} layout="fill" objectFit="cover" alt="3d me" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white" ref={ref}>
              Sobre Mim
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Tenho {age} anos, estudo programação desde os 13 anos de idade, no
              grande auge do Minecraft, tentando criar mods pro mesmo em{" "}
              <span className="text-purple-500 dark:text-purple-400">java</span>
              . Após isso, comecei a estudar programação de verdade, e desde
              então acabei me apaixonado pelo{" "}
              <span className="text-purple-500 dark:text-purple-400">
                Javascript
              </span>
              , por causa dos cursos da Rocketseat e aqueles eventos que eles
              faziam: "Semana Omnistack" e "Next Level Week". Acabei de
              desvirtuando um pouco do Javascript no Ensino Médio Técnico, onde
              aprendi um pouco de{" "}
              <span className="text-purple-500 dark:text-purple-400">PHP</span>{" "}
              e fiz meu projeto final em{" "}
              <span className="text-purple-500 dark:text-purple-400">
                Laravel
              </span>
              .
            </p>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 md: mb-5 dark:text-white">
              Portifólio
            </h3>
          </div>
          <div>
            <div className="md:flex md:items-center md:mb-5">
              <Image
                src={web1}
                alt="Rapport"
                className="md:w-5/12 rounded-lg"
              />
              <p className="text-md py-2 leading-8 text-gray-800 md:px-2 md:text-center dark:text-gray-200">
                Rapport foi um projeto que visava melhorar a vida dos
                caminhoneiros, Então contava com Alertas de acidentes nas
                pistas, informações sobre serviços beira de estrada como: Hoteis
                e Restaurantes. O projeto foi feito para um Hackaton em 2020, E
                foi feito em NodeJS. Devido a falta de tempo durante a
                competição, o projeto não foi finalizado.
              </p>
            </div>
            <div className="md:flex md:items-center">
              <p className="text-md py-2 leading-8 text-gray-800 md:px-2 md:text-center hidden md:flex dark:text-gray-200">
                Personalize Geek foi um projeto que eu fiz em grupo, como
                projeto final do Ensino Médio Técnico, o projeto consistia em
                uma loja virtual, onde o cliente poderia comprar produtos geek.
                O projeto foi feito em Laravel em 2021, Foi um projeto complexo
                onde além de usar o laravel,usamos a API do Paypal para fazer o
                pagamento dos produtos e também usamos a API do Correios externa
                para calcular o frete.
              </p>
              <Image
                src={web2}
                alt="Personalize Geek"
                className="md:w-5/12 rounded-lg"
              />
              <p className="text-md py-2 leading-8 text-gray-800 md:px-2 md:text-center flex md:hidden dark:text-gray-200">
                Personalize Geek foi um projeto que eu fiz em grupo, como
                projeto final do Ensino Médio Técnico, o projeto consistia em
                uma loja virtual, onde o cliente poderia comprar produtos geek.
                O projeto foi feito em Laravel em 2021, Foi um projeto complexo
                onde além de usar o laravel,usamos a API do Paypal para fazer o
                pagamento dos produtos e também usamos a API do Correios externa
                para calcular o frete.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
