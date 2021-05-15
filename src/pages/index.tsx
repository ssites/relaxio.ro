//= React components
// Others
import { NextPage } from "next";
import Head from "next/head";

//= Style & Assets
// Own
import "../styles/index.css";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center relative px-4">
      <Head>
        <title>Relaxio</title>
        <meta
          name="viewport"
          content="target-densitydpi=device-dpi, width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui"
        />
      </Head>
      <img
        src="/frunza.svg"
        className="absolute w-48 md:w-64 left-8 md:left-12 top-0"
      />
      <img
        src="/frunza.svg"
        className="absolute w-48 md:w-64 -right-28 md:-right-40 top-3 md:top-6"
        style={{ transform: "scaleY(-1) rotate(20deg)" }}
      />
      <div className="flex flex-col items-center mt-60 md:mt-80">
        <img src="/logo.svg" className="w-60" />
        <div
          className="text-logo text-3xl font-medium"
          style={{ margin: "-30px" }}
        >
          relaxio
        </div>
      </div>
      <div className="flex flex-col space-y-3 mt-44 md:mt-52 text-center items-center">
        <a
          href="https://www.facebook.com/relaxiocluj/"
          target="_blank"
          rel="noreferrer noopener"
          className="w-6"
        >
          <img src="/facebook.svg" />
        </a>
        <div className="text-2xl">Website-ul nostru este in constructie</div>
        <div className="font-medium">
          Pentru programari si alte informatii ne poti contacta pe{" "}
          <u>
            <a
              href="https://www.facebook.com/relaxiocluj/"
              target="_blank"
              rel="noreferrer noopener"
            >
              facebook
            </a>
          </u>{" "}
        </div>
      </div>
      <div className="mt-40"></div>
    </div>
  );
};

export default Home;
