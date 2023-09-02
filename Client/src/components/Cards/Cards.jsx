import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={styles.divDiv}>
      {characters.map((character) => (
        <Card
          className={styles.divG}
          key={character.id}
          character={character}
          onClose={() => onClose(character.id)}
        />
      ))}
    </div>
  );
}
