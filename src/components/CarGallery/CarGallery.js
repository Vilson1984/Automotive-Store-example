import Car from "../Car/Car"
import Fiesta from "../../assets/Fiesta.jpg"
import Palio from "../../assets/Palio.jpg"
import Uno from "../../assets/Uno.jpg"

function CarGallery() {
    const list = [ //Lista de carros, chamada pelo component CarGallery
    {
      id: 1,
      title: 'Fiesta',
      text: 'O Fiesta, dinâmico e estiloso, oferece uma experiência de condução envolvente, combinando eficiência e inovação.',
      imageUrl: Fiesta
    },
    {
      id: 2,
      title: 'Palio',
      text: 'Destaca-se por seu design versátil, eficiência energética e tecnologia inovadora, oferecendo uma experiência de condução única e envolvente.',
      imageUrl: Palio
    },
    {
      id: 3,
      title: 'Uno',
      text: 'O Uno, compacto e ágil, destaca-se pela eficiência urbana e design prático, proporcionando condução versátil.',
      imageUrl: Uno
    }
  ]

  return (
        <>

            <h1 className='Main-Title'> Galeria de Carros </h1>
            <div className='Painel'>
                {list.map((item) => (
                    <a key={item.title} href={`../Car/${item.title}`}>
                        <Car
                            title={item.title}
                            id={item.id}
                            text={item.text}
                            imageUrl={item.imageUrl}
                        />
                    </a>
                ))}
            </div>
        </>
    )
}

export default CarGallery;