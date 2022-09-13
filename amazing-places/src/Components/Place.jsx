

export default function Place(props){
    let linea
    if (props.item.id < 3){
        linea = "1";
    }
   
    return (
    <div className="container">
        <div className="place-group">
            <img className="place-img" src={`${props.item.imageUrl}`} />
            <div className="place-info">
                <div className="location-group">
                    <img className="icono" src="icono.png" />
                    <span>{props.item.location}</span>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <div className="date-group">
                    <span>{`${props.item.startDate} - ${props.item.endDate}`}</span>
                </div>
                <p className="place-description"><span>{props.item.description}</span></p>
            </div>
        </div>
        {linea && 
            <span className="division">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rainbow" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M22 17c0 -5.523 -4.477 -10 -10 -10s-10 4.477 -10 10" />
                    <path d="M18 17a6 6 0 1 0 -12 0" />
                    <path d="M14 17a2 2 0 1 0 -4 0" />
                </svg>
        </span> }
    </div>
        
    )
}