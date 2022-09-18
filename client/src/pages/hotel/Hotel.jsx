import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "../../components/header/Header"
import Navbar from "../../components/nav/Navbar"
import MailList from "../../components/mailList/MailList"
import "./hotel.css"
import Footer from "../../components/footer/Footer"
import { useState } from "react"
import useFetch from "../../components/hooks/useFetch"
import { useLocation } from "react-router-dom"

const Hotel = () => {
    const location = useLocation()
    const id= location.pathname.split("/")[2]
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const { data, loading, error } = useFetch(`/hotels/find/${id}`)

    // const photos = [
    //     {
    //         src:require('../../images/f3.jpeg')
    //     },
    //     {
    //         src:require('../../images/f1.jpeg')
    //     },
    //     {
    //         src:require('../../images/f2.jpeg')
    //     },
    //     {
    //         src:require('../../images/f4.jpeg')
    //     },
    //     {
    //         src:require('../../images/f5.jpeg')
    //     },
    //     {
    //         src:require('../../images/f4.jpeg')
    //     }
    // ];

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
            {loading ? (
                "Loading"
                ) : (
                     <div className="hotelContainer">
            {open && (<div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
                </div>)}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">{data.name}</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>{data.address}</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - {data.distance}m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {data.photos?.map((photo, i)=>(
                            <div className="hotelImgWrapper">
                                <img onClick={() => handleOpen(i)} src={photo} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">{data.title}</h1>
                            <p className="hotelDesc">
                            {data.desc}
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
            )}
            <MailList/>
            <Footer/>
            
        </div>
    )
}

export default Hotel