import Head from "next/head";

import localFont from "next/font/local";
import { Inter } from "next/font/google";

import NavBar from "../components/NavBar";

const burtons = localFont({ src: "../../public/Burtons.otf" });
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kayk Mascarenhas - Portifólio</title>
      </Head>
      <main className={`${inter.className} bg-white px-10`}>
        <section className="min-h-screen">
          <NavBar />
          <div>
            <h2>Kayk Mascarenhas</h2>
          </div>
        </section>
      </main>
    </div>
  );
}
