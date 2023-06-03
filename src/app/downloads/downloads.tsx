import React from 'react';
import SideBar from '@/components/SideBar/SideBar';
import styles from './DownloadPage.module.scss';

function Downloads() {
  return (
    <div className={styles.container}>
        <div className='flex'>
            <SideBar />
            <div className={`${styles.buttonContainer} flex flex-col space-y-16`}>
            <ButtonGrid />
            <ButtonGrid />
            </div>
        </div>
    </div>
  );
}

const ButtonGrid = () => {
  return (
    <ul className={styles.list}>
      <GridButton />
      <GridButton />
      <GridButton />
      <GridButton />
    </ul>
  );
};

const GridButton = ({ link='', text='Hola' }) => {
  return (
    <li>
      <a href={link}>
        <button className={styles.button}>{text}</button>
      </a>
    </li>
  );
}

export default Downloads;