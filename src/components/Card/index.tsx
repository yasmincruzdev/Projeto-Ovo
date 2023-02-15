import Image from "next/image";
import { ReactNode } from "react";
import { Node } from "typescript";
import styles from "./Card.module.scss";

interface Props {
  titulo?: string,
  tempoPreparo?: number,
  porcoes?: number
}

export default function Card({ titulo, tempoPreparo, porcoes }: Props) {

  if (titulo)
    return (
      <div className={styles.card}>
        <h2 className={styles.card__title}>{titulo}</h2>
        <div className={styles.card__info}>
          <span>
            <Image width={21} height={21} alt="ícone relógio" src={"icons/clock.svg"}/>
            {tempoPreparo} minuto(s)
          </span>
          <span>
            <Image width={21} height={21} alt="ícone panela" src={"icons/pot.svg"}/>
            serve {porcoes} pessoa(s)
          </span>
        </div>
      </div>
    )

  return (
    <>
    </>
  )
}