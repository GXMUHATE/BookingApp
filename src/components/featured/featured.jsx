import "./featured.css"

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src={require('../../images/woman1.png')} alt="paradise" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Manchester</h1>
                    <h2>320 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={require('../../images/thailand.png')} alt="paradise" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Thailand</h1>
                    <h2>120 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={require('../../images/paradise.png')} alt="paradise" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Maldives</h1>
                    <h2>80 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured