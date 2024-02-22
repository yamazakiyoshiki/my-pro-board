import styles from './card.module.css';

const Card = ({item}) => {
  return (
    <div className={styles.container}>
      {item.icon}
      <div className={styles.texts}>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.number}>{item.number}</span>
        <span className={styles.detail}>
          <span className={styles.positive}>{item.change}</span>先週より上昇
        </span>
      </div>
    </div>
  );
};

export default Card;