import Image from "next/image";
import styles from "./Header.module.scss"

export default function Header() {
  return (
    <header className={styles.header}>
      <Image width={64} height={64} alt={"logo"} src={"logo.svg"}/>
      <div className={styles.header__text}>
        <span className={styles.header__title}>Fritando ovo</span>
        <span className={styles.header__subtitle}>Receitas fáceis</span>
      </div>
    </header>
  )
}