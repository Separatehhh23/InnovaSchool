import React from 'react';
import SideBar from '@/components/SideBar';
import styles from '../styles/Page.module.scss';

function App() {
  return (
      <div className={styles.container}>
        <div className='flex'>
          <SideBar />

          <h1 className={styles.title}>InnovaSchool</h1>
        </div>
      </div>
  );
}

export default App;