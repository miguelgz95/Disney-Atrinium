import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children, title }) {
  return (
    <div className="bg-disney min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/disney.ico" />
      </Head>

      <header className="w-full flex justify-between px-4 pt-4">
        <Link href="/characters">
          <img
            src="/images/Disney atrinium logo.png"
            alt="Disney by Atrinium"
            className="w-[100px] md:w-[100px] hover:cursor-pointer"
          />
        </Link>
        <button className="px-2 pt-1">
          <Link href="/favorites">
            <img
              src="/images/like (1).png"
              alt="favoritos"
              width="28px"
              className="invert hover:cursor-pointer hover:animate-pulse"
            />
          </Link>
        </button>
      </header>

      <main>{children}</main>

      <footer></footer>
    </div>
  );
}
