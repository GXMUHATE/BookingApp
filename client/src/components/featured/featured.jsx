import useFetch from "../hooks/useFetch"
import "./featured.css"

const Featured = () => {

    const { data, loading, error } = useFetch("hotels/countByCity?cities=Maputo,Tokyo,Cape Town")


    return (
        <div className="featured">

            {loading ? (
                "Loading please wait"
            ) : (
                <>
                    <div className="featuredItem">
                        <img src={require('../../images/woman1.png')} alt="paradise" className="featuredImg" />
                        <div className="featuredTitles">
                            <h1>Maputo</h1>
                            <h2>{data[0]} properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src={require('../../images/thailand.png')} alt="paradise" className="featuredImg" />
                        <div className="featuredTitles">
                            <h1>Tokyo</h1>
                            <h2>{data[1]} properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src={require('../../images/paradise.png')} alt="paradise" className="featuredImg" />
                        <div className="featuredTitles">
                            <h1>Cape Town</h1>
                            <h2>{data[2]} properties</h2>
                        </div>
                    </div></>)}
        </div>
    )
}

export default Featured