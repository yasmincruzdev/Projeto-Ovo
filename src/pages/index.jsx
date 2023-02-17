import CardList from '@/components/CardList'
import Header from '@/components/Header'


export default function Home() {

  const receitas = [
    { id: 1, titulo: "Roscovo", tempoPreparo: "25", porcoes: "2" , image: "OvoComArroz.svg"},
    { id: 2, titulo: "Arroz com pepino", tempoPreparo: "20", porcoes: "1", image: "OvoComOregano.svg" },
  ]
  return (
    <>
      <Header />
      <CardList receitas={receitas} />
    </>
  )
}
