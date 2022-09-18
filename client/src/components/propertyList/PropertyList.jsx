import useFetch from "../hooks/useFetch"
import "./propertyList.css"

const PropertyList = () => {

    const { data, loading, error } = useFetch("hotels/countByType")

    const img1 = require('../../images/resort.png')
    const img2 = require('../../images/apartment.png')
    const img3 = require('../../images/villas.png')
    const img4 = require('../../images/cabins.png')
    const img5 = require('../../images/glamping.png')
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5
    ]

    return (

        <div className="pList">
            {loading ? (
                "loading"
            ) : (

                <>
                    {data &&
                        images.map((img, i) => (
                            <div className="pListItem" key={i}>
                                <img src={img} alt="" className="pListImg" />
                                <div className="pListTitles">
                                    <h1>{data[i]?.type}</h1>
                                    <h2>{data[i]?.count} {data[i]?.type}</h2>
                                </div>
                            </div>
                        ))}
                </>)
            }
        </div>

    )
}

export default PropertyList