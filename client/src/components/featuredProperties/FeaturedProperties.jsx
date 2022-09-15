import "./featuredProperties.css"

const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img src={require('../../images/f1.jpeg')} alt="" className="fpImg" />
                <span className="fpName">ApartHotel Satre Masto</span>
                <span className="fpCity">Madrid</span>
                <span className="fpPrice">Starting from $125</span>
                <div className="fpRating">
                    <button>7.5</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src={require('../../images/f2.jpeg')} alt="" className="fpImg" />
                <span className="fpName">ApartHotel Satre Masto</span>
                <span className="fpCity">Madrid</span>
                <span className="fpPrice">Starting from $125</span>
                <div className="fpRating">
                    <button>7.5</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src={require('../../images/f3.jpeg')} alt="" className="fpImg" />
                <span className="fpName">ApartHotel Satre Masto</span>
                <span className="fpCity">Madrid</span>
                <span className="fpPrice">Starting from $125</span>
                <div className="fpRating">
                    <button>7.5</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src={require('../../images/f4.jpeg')} alt="" className="fpImg" />
                <span className="fpName">ApartHotel Satre Masto</span>
                <span className="fpCity">Madrid</span>
                <span className="fpPrice">Starting from $125</span>
                <div className="fpRating">
                    <button>7.5</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties