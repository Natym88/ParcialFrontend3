import './Card.css'

const Card = (props) => {

    return (
        <div className='Card'>
            <p>Hola {props.data.name}!! <br /> Tu país de recidencia es: {props.data.country}</p>
            <img src={`https://flagcdn.com/16x12/${props.data.code.toLowerCase()}.png`}
                srcSet="https://flagcdn.com/32x24/za.png 2x, https://flagcdn.com/48x36/za.png 3x"
                width="16"
                height="12"
                alt={props.data.country} />
        </div>
    )
}

export default Card;