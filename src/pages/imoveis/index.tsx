import { GetServerSideProps, GetStaticPaths } from "next";
import CardImmobile, { Immobile } from "../../components/CardImmobile";



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

// export const getServerSideProps: GetServerSideProps = ({ req, params }) => {


// }