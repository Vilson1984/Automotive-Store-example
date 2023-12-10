import './App.css';
import Car from './components/Car/Car';
import './components/Car/Car.css'
import Palio from './assets/palio.jpg'
import Uno from './assets/uno.jpg'
import Fiesta from './assets/fiesta.jpg'

const list = [
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
    },
    
]
function App() {
  return (
    <div className='Main'>
      <Car carList={list}/>
    </div>
  )

}

export default App;
