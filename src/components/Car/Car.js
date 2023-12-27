import './Car.css';


function Car({ title, id, text, imageUrl }) {
    return (
        <div className="Box-Car">
            <p className="Title-Car"> {title}</p>
            <p className="Id-Car"> ID: {id} </p>
            <img src={imageUrl} alt={title} />
            <p className="Text-Car">  {text} </p>
        </div>
    )
}


export default Car;