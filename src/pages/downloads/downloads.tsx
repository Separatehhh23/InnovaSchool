import React from 'react';
import SideBar from '@/components/SideBar/SideBar';
import styles from '@/styles/DownloadPage.module.scss';
import { NextPage } from 'next';



type Grid = {
  buttons: {
    text: string;
    link: string;
  }[];
};

const Downloads: NextPage  = (props) => {
  const grid1: Grid = {
    buttons: [
      { text: 'Button 1', link: '#' },
      { text: 'Button 2', link: '#' },
      { text: 'Button 3', link: '#' },
      { text: 'Button 4', link: '#' },
    ],
  };
  const grid2: Grid = {
    buttons: [
      { text: 'Button 1', link: '#' },
      { text: 'Button 2', link: '#' },
      { text: 'Button 3', link: '#' },
      { text: 'Button 4', link: '#' },
    ],
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className={styles.container}>
        <div className='flex'>
          <SideBar />
          <div className={`${styles.buttonContainer} flex flex-col space-y-16`}>
            <ButtonGrid grid={grid1} />
            <ButtonGrid grid={grid2} />
          </div>
        </div>
      </div>
    </main>
  );
}

const ButtonGrid = ({ grid }: { grid?: Grid }) => {
  const { buttons } = grid || { buttons: [] };

  return (
    <ul className={styles.list}>
      {buttons.map((button, index) => (
        <GridButton key={index} link={button.link} text={button.text} />
      ))}
    </ul>
  );
};

const GridButton = ({ link = '', text = 'Hola' }: { link?: string; text?: string }) => {
  return (
    <li>
      <a href={link}>
        <button className={styles.button}>{text}</button>
      </a>
    </li>
  );
};

export default Downloads;