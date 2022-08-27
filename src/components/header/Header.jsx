import { faBed, faCar, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="headerContainer">
               <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Taxis</span>
                    </div>
                </div>
                <h1 className="headerTitle">Travel with the best Price!</h1>
                <p className="headerDesc">
                    Get reward for your travels - unlock instant savings of 10% or more 
                    with a free AATravel Account
                </p>
                <button className="headerBtn">Sign in / Register</button> 
            </div>
        </div>
    )
}

export default Header