import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import CardImmobile, { Immobile } from "../../components/CardImmobile";
import api from "../../services/api";



interface PropertiesProps {
  properties: Immobile[];
}

const Properties = ({ properties }: PropertiesProps) => {
  return (

    <>
      <h1>imoveis</h1>
      {properties.map(immobile => (
        <CardImmobile name={immobile.name} src={immobile.src} tags={immobile.tags} key={immobile.src} />
      ))}
    </>
  );
}

export default Properties;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/imoveis');
  return {
    props: {
      properties: data,
    },
    revalidate: 60 * 5 // 5 minutes
  }
}
// export const getServerSideProps: GetServerSideProps = ({ req, params }) => {


// }