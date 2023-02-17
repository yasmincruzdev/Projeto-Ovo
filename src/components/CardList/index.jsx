import Card from "../Card";
import styles from "./CardList.module.css"

export default function CardList({receitas}) {
  return (
    <div className={styles.card_list}>
      {receitas.map(receita => (
      <Card
      key={receita.id}
        titulo={receita.titulo}
        tempoPreparo={receita.tempoPreparo}
        porcoes={receita.porcoes}
        image={receita.image}
      />
      ))}
    </div>
  )
}