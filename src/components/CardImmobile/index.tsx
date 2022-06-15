
import styles from './styles.module.scss'
import Img from 'next/image';

interface Tags {
  [key: string]: string;
}

export interface Immobile {
  src: string;
  name: string;
  tags: Tags[];
}

const CardImmobile = ({ name, src, tags }: Immobile) => {
  return (
    <div className={styles.card} >
      <Img src={src} alt={name} loading='lazy' />
      <div>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default CardImmobile;