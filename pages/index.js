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
        <div className="w-full flex justify-center pt-11">
          <img
            src="/Disney atrinium logo.png"
            alt="Disney by Atrinium"
            className="w-[180px] md:w-[210px]"
          />
        </div>
        <p className="text-lg text-white tracking-wide font-light text-center px-10 pt-5">
          Descubre todos los detalles sobre los personajes Disney de la
        </p>
        <p className="text-lg text-white tracking-wide font-light text-center">
          mano de Atrinium
        </p>
        <div className="grid pt-1 md:px-28">
          <img src="/ralph.png" className="img w-14 ml-4 md:ml-0 md:w-20" />
          <img
            src="/ironman4.png"
            className="img w-20 h-20 md:w-36 md:h-36 pt-1 md:ml-5"
          />
          <img src="/mickey2.png" className="img w-20 md:w-28 md:ml-3" />
          <img
            src="/woody.png"
            className="img w-11 h-11 mt-16 ml-3 md:w-44 md:h-44 md:ml-0 md:mt-0 object-cover"
          />
          <img src="/luca.png" className="img w-16 mr-4 mt-4 md:mt-0 md:mr-0 md:w-28 md:h-28" />
          <img
            src="/bb8.png"
            className="img w-12 h-12 mb-16 md:mb-0 md:w-40 md:h-40 justify-center self-center"
          />
          <img
            src="/dark.png"
            className="img w-20 h-20 md:w-32 md:h-32 ml-4 md:ml-32"
          />
          <img src="/rex3.png" className="img w-16 mr-1 md:mr-0 md:ml-16 md:w-20 ml-5 pt-1" />
          <img
            src="/anna.png"
            className="img w-14 h-14 md:w-28 md:h-28 mt-14 mr-4 object-cover"
          />
          <img src="/nemo.png" className="img w-14 h-14 mr-10 md:mr-0 md:w-28 md:h-28 object-cover" />
        </div>
        <div className="w-full flex justify-center md:pt-20">
          <div className="bg-sky-900 text-white px-10 py-2 rounded-full hover:opacity-50 transition ease-in-out">
            <Link href="/characters" className="bg-sky-900 text-white px-8 py-2 rounded-full hover:opacity-50 transition ease-in-out">Comenzar</Link>
          </div>
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
          align-self: center;
          justify-self: start;
        }

        .grid > img:nth-child(2) {
          align-self: end;
          justify-self: start;
        }
        .grid > img:nth-child(3) {
          justify-self: start;
        }
        .grid > img:nth-child(4) {
        }
        .grid > img:nth-child(5) {
          align-self: center;
          justify-self: center;
        }

        .grid > img:nth-child(6) {
          align-self: center;
          justify-self: end;
        }

        .grid > img:nth-child(7) {
          justify-self: center;
          align-self: center;
        }

        .grid > img:nth-child(8) {
          align-self: start;
          justify-self: center;
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
