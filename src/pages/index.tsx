import styles from '../styles/home.module.scss';
import Head from 'next/head';
import { GetServerSideProps, GetStaticProps } from 'next';


interface Props {
  nome: string;
}

const Home = ({ nome }: Props) => {
  return (
    <>
      <Head>
        <title>Home - Imobile</title>
      </Head>
      <h1 className={styles.title}>Teste</h1>
      <p>{nome}</p>
    </>
  )
}

export default Home;

// export const getServerSideProps: GetServerSideProps = async () => { //SSR  (server side rendering)

//   return {
//     props: {
//       nome: 'jonathan'
//     }
//   }
// }
export const getStaticProps: GetStaticProps = async () => { // ssg (static site generation)

  return {
    props: {
      nome: 'jonathan'
    },
    revalidate: 60 * 60 * 24 //24 hours
  }
}
