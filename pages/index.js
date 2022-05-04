import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Disney by Atrinium</title>
        <link rel="icon" href="/disney.ico" />
      </Head>

      <main className="bg-disney min-h-screen">
        <div className="w-full flex justify-center pt-10">
          <img
            src="/Disney atrinium logo.png"
            alt="Disney by Atrinium"
            className="w-[180px] md:w-[210px]"
          />
        </div>
        <p className="text-lg text-white font-light text-center px-10 pt-6">
          Descubre todos los detalles sobre los personajes Disney de la
        </p>
        <p className="text-lg text-white font-light text-center">
          mano de Atrinium
        </p>
        <div className="grid md:px-36">
          <img src="/mickey2.png" className="img w-20 md:w-32" />
          <img
            src="/ironman4.png"
            className="img w-24 h-24 md:w-36 md:h-36 pt-1 md:ml-5"
          />
          <img src="/mickey2.png" className="img w-20 md:w-32" />
          <img
            src="/woody.png"
            className="img w-24 h-24 md:w-44 md:h-44 md:mt-2"
          />
          <img src="/mickey2.png" className="img w-20 md:w-32" />
          <img
            src="/bb8.png"
            className="img w-28 h-30 md:w-40 md:mt-3 justify-center self-center"
          />
          <img
            src="/dark (1).png"
            className="img w-24 h-24 md:w-32 md:h-32 ml-4 md:ml-32"
          />
          <img src="/mickey2.png" className="img w-20 md:w-32" />
          <img
            src="/rex3.png"
            className="img w-20 h-20 md:w-28 md:h-28 mt-10 pt-1 "
          />
          <img src="/mickey2.png" className="img w-20 md:w-32" />
        </div>
        <div className="w-full flex justify-center md:pt-20">
          <button className="bg-sky-900 text-white px-8 py-2 rounded-full hover:opacity-50 transition ease-in-out">
            <Link href="/characters">Comenzar</Link>
          </button>
        </div>
      </main>

      <style jsx>{`
        .img {
          border-radius: 100%;
          shape-outside: circle();
          transition: transform 0.3s ease;
          background-color: #0369a1;
        }

        .img:hover {
          transform: scale(1.1);
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          height: 30vh;
          margin-top: 20px;
          min-height: 300px;
        }

        .grid > img:nth-child(1) {
          align-self: end;
          justify-self: center;
        }

        .grid > img:nth-child(2) {
          align-self: end;
        }
        .grid > img:nth-child(3) {
          justify-self: end;
        }
        .grid > img:nth-child(4) {
        }
        .grid > img:nth-child(5) {
          justify-self: end;
        }

        .grid > img:nth-child(6) {
          align-self: center;
          justify-self: center;
        }

        .grid > img:nth-child(7) {
          justify-self: center;
          align-self: center;
        }

        .grid > img:nth-child(8) {
          justify-self: end;
        }
        .grid > img:nth-child(9) {
          justify-self: end;
        }

        .grid > img:nth-child(10) {
          justify-self: end;
        }
      `}</style>
    </div>
  );
}
