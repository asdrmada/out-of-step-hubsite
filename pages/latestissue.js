import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function latestissue() {
    return (
        <div className={styles.container}>
         <Head>
            <title>Out of Step UK</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
        <div className={styles.header}>
            <h1 className={styles.title}>
                Out of Step UK
            </h1>
            <h3>
                News and blog
            </h3>
        </div>

        <div className=''>
          <nav>
          <ul className='flex flex-row justify-evenly bg-black font-bold text-white'>
            <li className='hover:text-gray-400'>
              <a className={styles.navlink} href='latestissue'>Latest Issue</a>
            </li>
            <li className='hover:text-gray-400'>
              <a className={styles.navlink} href='news'>News</a>
            </li>
            <li className='hover:text-gray-400'>
              <a className={styles.navlink} href='reviews'>Reviews</a>
            </li>
            <li className='hover:text-gray-400'>
              <a className={styles.navlink} href='interviews'>Interviews</a>
            </li>
          </ul>
          </nav>
      </div>
    
        <main className={styles.main}>
    
    
        </main>
    
          <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
              </span>
            </a>
          </footer>
        </div> 
        )  
}

export default latestissue