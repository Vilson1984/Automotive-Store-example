import './App.css';
import CarGallery from './components/CarGallery/CarGallery';
import Car from './components/Car/Car'
import './components/CarGallery/CarGallery.css'
import Palio from './assets/Palio.jpg'
import Uno from './assets/Uno.jpg'
import Fiesta from './assets/Fiesta.jpg'


function App() {
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
    <div className='Main'>
      {/*<CarGallery carList={list}/>*/}
      <Car
        title="Fiesta"
        id={1}
        text="O Fiesta, dinâmico e estiloso, oferece uma experiência de condução envolvente, combinando eficiência e inovação.'"
        imageUrl = {Fiesta}
      />
      <Car
        title="Palio"
        id={2}
        text="Design versátil, eficiente e tecnologia inovadora. Oferece uma experiência de condução única e envolvente."
        imageUrl = {Palio}
      />
            <Car
        title="Uno"
        id={3}
        text='O Uno, compacto e ágil, destaca-se pela eficiência urbana e design prático, proporcionando condução versátil.'
        imageUrl = {Uno}
      />
    </div>
  )

}

export default App;
