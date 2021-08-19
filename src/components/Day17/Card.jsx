import './Card.css';

function Card(props){
    const {title,dis}=props;
    return(
        <div className="card">
        <h1>{title}</h1>
        <h5>{dis}</h5>
        </div>
    );
}

export default Card;