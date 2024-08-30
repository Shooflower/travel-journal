import "./TravelEntry.css"
import locationIcon from "../assets/location-icon.png"

export default function TravelEntry(props) {
    const {lastEntry, imageUrl:travelPhoto, title:destination, googleMapsUrl:googleLink, location:country, startDate, endDate, description} = props;

    return (
        <>
            <div className="travelentry">
                <img src={travelPhoto} className="travelentry--photo"/>
                <div className="travelentry--details">
                    <img src={locationIcon} className="travelentry--icon"/>
                    <span className="travelentry--country">{country.toUpperCase()}</span>
                    <span><a href={googleLink} className="travelentry--link">View on Google Maps</a></span>
                    <h2 className="travelentry--destination">{destination}</h2>
                    <h4 className="travelentry--dates">{startDate} - {endDate}</h4>
                    <p className="travelentry--description">{description}</p>
                </div>
            </div>
            {!lastEntry && <hr />}
        </>
    )
}