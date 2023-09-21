"use client";

import { navLinks } from "@constant";
import Link from "next/link";
import { FC, useState } from "react";
import { Button } from "./Button";
import Image from "next/image";
import "animate.css";
import { motion } from "framer-motion";

interface Props {}

export function Nav() {
  const [visible, setVisible] = useState(false);
  return (
    <header className="bg-blue-dark max-container relative">
      <nav className="max-md:bg-blue-darker flex items-center justify-between max-container padding-x py-3 relative ">
        <Link href="/">
          <h1 className="w-fit font-bold text-2xl uppercase text-white">
            Logo
          </h1>
        </Link>
        <div className="flex gap-5">
          <ul className="flex items-center justify-center gap-5 max-md:hidden">
            {navLinks.map((nav) => (
              <li key={nav.label}>
                <Link
                  href={nav.href}
                  className="nav_text hover:text-blue-light">
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-5 max-md:hidden">
            <Link href="/offering">
              <Button label="Offering" iconUrl="/icon/sell.svg" />
            </Link>
            <Image
              src="/icon/alternate_email.svg"
              alt="icon"
              width={30}
              height={30}
              className="cursor-pointer hover:scale-90 transition-all ease-linear duration-300"
            />
          </div>
          <div className="hidden max-md:block">
            <Image
              onClick={() => setVisible((prev) => !prev)}
              src="/icon/hamburger.svg"
              alt="hamburger-menu"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        </div>

        {visible && (
          <>
            <div
              onClick={() => setVisible((prev) => !prev)}
              className="hidden max-lg:block fixed z-[1] inset-0 h-screen w-screen bg-blue-gray bg-opacity-30 backdrop-blur blur-sm"
            />
            <motion.div
              className="z-10 hidden max-lg:flex items-start justify-between top-0 left-0 absolute w-full bg-blue-darker px-10 py-5"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}>
              <ul className="flex flex-col gap-2">
                {navLinks.map((nav) => (
                  <li key={nav.label}>
                    <Link
                      onClick={() => setVisible((prev) => !prev)}
                      href={nav.href}
                      className="nav_text hover:text-blue-light">
                      {nav.label}
                    </Link>
                  </li>
                ))}
                <li className="nav_text hover:scale-90 transition-all duration-300">
                  <Link
                    className="py-1.5 px-3 bg-blue-light rounded-md"
                    href="/offering"
                    onClick={() => setVisible((prev) => !prev)}>
                    Offer
                  </Link>
                </li>
              </ul>
              <Image
                onClick={() => setVisible((prev) => !prev)}
                src="/icon/close.svg"
                alt="close"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </motion.div>
          </>
        )}
      </nav>
    </header>
  );
}
