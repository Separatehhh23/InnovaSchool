import React from 'react';
import SideBar from '@/components/SideBar/SideBar';
import styles from './DownloadPage.module.scss';
import layout from '../../app/layout';

function downloads() {
    layout;
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
};

const ButtonGrid = () => {
    return (
        <ul className={styles.list}>
            <GridButton />
            <GridButton />
            <GridButton />
            <GridButton />
        </ul>
    );
}

function GridButton() {
    return (
        <li>
            <a href="">
                <button className={styles.button}>Hola</button>
            </a>
        </li>
    );
}

export default downloads;