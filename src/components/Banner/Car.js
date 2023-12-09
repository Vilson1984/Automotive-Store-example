import './Car.css'
import Palio from '../images/palio.jpg'
import Uno from '../images/uno.jpg'
import Fiesta from '../images/fiesta.jpg'
import Onix from '../images/Onix.png'
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

function Car() {
    return (
        <>
            <h1 className='Main-Title'> Automotive Store </h1>

            
            <div className='Painel'>
                {list.map((item, index) => (
                    <div className='Box-Car'>
                        <p key={index} className='Title-car'>{item.title}</p>
                        <p key={index} className='Id-car'>ID:{item.id}</p>
                        <img src={item.imageUrl} alt={item.title} className='Image-Car' />
                        <p key={index}>{item.text}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Car