import React from 'react';
import SideBar from '@/components/SideBar';
import styles from '@/styles/Page.module.scss';
import { type NextPage } from 'next';
import Head from 'next/head';

const App: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Pylinker</title>
        <meta name="description" content="Nah Siesque Rili" />
        <link rel="icon" href="../../public/svgs/vercel.svg" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className={styles.container}>
          <div className='flex'>
            <SideBar />

            <h1 className={styles.title}>PyLinker</h1>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;