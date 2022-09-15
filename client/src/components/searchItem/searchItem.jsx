import "./searchItem.css"

const SearchItem = () => {
    return (
            <div className="searchItem">
                <img src={require('../../images/f5.jpeg')} alt="" className="siImg" />
                <div className="siDesc">
                    <h1 className="siTitle">Housing Vacation Apartment</h1>
                    <span className="siDistance">300m from center</span>
                    <span className="siTaxiOp">Free airport taxi</span>
                    <span className="siSubtitle">
                        House with Air conditioning
                    </span>
                    <span className="siFeatures">
                        Entire studio . 2 bathroom . 23m2 1 full bed
                    </span>
                    <span className="siCancelOp">Free Cancellation</span>
                    <span className="siCancelOpSubtitle">
                        You can cancel later, so lock in hits great price today!
                    </span>
                </div>
                <div className="siDetails">
                    <div className="siRating">
                        <span>Excellent</span>
                        <button>8.9</button>
                    </div>
                    <div className="siDetailTexts">
                        <span className="siPrice">$212</span>
                        <span className="siTaxOp">Includes taxes and fees</span>
                        <button className="siCheckButton">See availability</button>
                    </div>
                </div>
            </div>
    )
}

export default SearchItem