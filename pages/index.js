import Head from "next/head";
import Product from "./components/Product";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shield 🛡️</title>
        <meta name="description" content="Vision Shield Sunglasses" />
        <link rel="icon" href="/shield.png" />
      </Head>

      <main>
        <Product />
      </main>
    </div>
  );
}
