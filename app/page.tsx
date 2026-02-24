"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900">
      {/* NAVBAR */}
      <nav className="relative bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-4 md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              Breno
            </span>

            {/* Mobile button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 md:hidden dark:text-gray-200"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } mt-4 md:mt-0 md:flex md:items-center`}
          >
            <a className="block py-2 md:mx-4 text-gray-700 dark:text-gray-200 hover:text-blue-500">
              Home
            </a>
            <a className="block py-2 md:mx-4 text-gray-700 dark:text-gray-200 hover:text-blue-500">
              Projects
            </a>
            <a className="block py-2 md:mx-4 text-gray-700 dark:text-gray-200 hover:text-blue-500">
              About
            </a>
            <a className="block py-2 md:mx-4 text-gray-700 dark:text-gray-200 hover:text-blue-500">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div className="container mx-auto px-6 py-16 lg:flex lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              Building scalable <br />
              <span className="text-blue-500">web systems</span>
            </h1>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Backend-focused developer experienced in Laravel, legacy systems
              modernization and modern web architectures.
            </p>

            <a
              href="https://github.com/seu-user"
              target="_blank"
              className="inline-block px-6 py-3 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="flex justify-center w-full mt-8 lg:mt-0 lg:w-1/2">
          <Image
            src="https://merakiui.com/images/components/Catalogue-pana.svg"
            alt="Hero Illustration"
            width={500}
            height={500}
          />
        </div>
      </div>
    </header>
  );
}