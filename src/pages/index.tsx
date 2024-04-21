import { Inter } from "next/font/google";
import Head from "next/head";
import { useRouter  } from 'next/navigation';
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const { push } = useRouter();

  useEffect(() => {
     push('/tambola');
  }, []);

  return (

    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Head>
        <title>Landing Screen</title>
      </Head>
      <h2>Landing Screen</h2>
     


    </main>
  );
}
