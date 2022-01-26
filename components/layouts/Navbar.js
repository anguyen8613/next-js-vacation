import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return <div className='flex justify-end bg-gray-800 text-white'>
      <Link href='/'><button className={styles.navButton}>Home</button></Link>
      <Link href='/vacations'><button className={styles.navButton}>Vacations</button></Link>
      <Link href='/cars'><button className={styles.navButton}>Cars</button></Link>
      <Link href='/hotels'><button className={styles.navButton}>Hotels</button></Link>
      <Link href='/restaurants'><button className={styles.navButton}>Restaurants</button></Link>
  </div>;
};

export default Navbar;
