import '../App.css';
import cardData from '../data/card-data';

export default function Card(prop) {
    return (
        <div className="body">
            <div className="card">
                <img src={prop.img}></img>
                <div className="card-content">
                    <div className="card-top">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>{prop.country}</p>
                        <a href={prop.mapLink}>View on Google Maps</a>
                    </div>
                    <h1>{prop.touristAttraction}</h1>
                    <p id="date"><strong>{prop.date}</strong></p>
                    <p>{prop.description}</p>
                </div>
            </div>
        </div>
    )
}