import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "../../components/header/Header"
import Navbar from "../../components/nav/Navbar"
import MailList from "../../components/mailList/MailList"
import "./hotel.css"
import Footer from "../../components/footer/Footer"
import { useState } from "react"

const Hotel = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const photos = [
        {
            src:require('../../images/f3.jpeg')
        },
        {
            src:require('../../images/f1.jpeg')
        },
        {
            src:require('../../images/f2.jpeg')
        },
        {
            src:require('../../images/f4.jpeg')
        },
        {
            src:require('../../images/f5.jpeg')
        },
        {
            src:require('../../images/f4.jpeg')
        }
    ];

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };

    const handleMove = (direction) => {
        let newSlideNumber;

        if(direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber)
    };

    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
                </div>}
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Elton St 136 Maputo</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $123 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo, i)=>(
                            <div className="hotelImgWrapper">
                                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                            <p className="hotelDesc">
                            In the Salford district of Manchester, close to Opera House Manchester, 
                            Atelier Chapel Apartments features a garden, free WiFi and a washing machine. This property offers access to a pool table and darts.This apartment is equipped with 2 bedrooms, a kitchen with a dishwasher and a microwave, a flat-screen TV, a seating area and 2 bathrooms equipped with a shower. Towels and bed linen are provided.
                            The apartment provides a terrace.
                            Popular points of interest near Atelier Chapel Apartments include John Rylands Library, Royal Exchange Theatre and Albert Square. The nearest airport is Manchester Airport, 13 km from the accommodation.
                            This is our guests' favourite part of Manchester, according to independent reviews.
                            Atelier Chapel Apartments has been welcoming Booking.com guests since 18 Aug 2022.
                            Distance in property description is calculated using © OpenStreetMap

                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night saty!</h1>
                            <span>
                                Located in the real heart of Krakow, this property has an
                                excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>$945</b> (8 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
            </div>
            <MailList/>
            <Footer/>
        </div>
    )
}

export default Hotel