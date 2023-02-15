import Card from "../Card";
import styles from "./CardList.module.scss"

export default function CardList() {
  return (
    <div className={styles.card_list}>
      <Card
        titulo="Ovo com arroz e pepino"
        tempoPreparo={25}
        porcoes={2}
      />
      <Card
        titulo="Ovo com arroz e pepino"
        tempoPreparo={25}
        porcoes={2}
      />
      <Card
        titulo="Ovo com arroz e pepino"
        tempoPreparo={25}
        porcoes={2}
      />
    </div>
  )
}