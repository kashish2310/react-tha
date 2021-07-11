import './Card.css'
import img from './images.jpg';
function Card(){
   return(
       <div className="container">
       <img src={img} alt="meme_image"/>
       <h2>Meme Card</h2>
       </div>
   );
}

export default Card;