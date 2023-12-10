function Car({ carList }) {
    return (
        <>
            <h1 className='Main-Title'> Automotive Store </h1>        
            <div className='Painel'>
                {carList.map((item, index) => (
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