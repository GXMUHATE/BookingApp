import "./propertyList.css"

const PropertyList = () => {
    return (
        <div>
            <div className="pList">
               <div className="pListItem">
                <img src={require('../../images/resort.png')} alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>350 Hotels</h2>
                </div>
               </div>
               <div className="pListItem">
                <img src={require('../../images/apartment.png')} alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Apatments</h1>
                    <h2>230 Apartments</h2>
                </div>
               </div>
               <div className="pListItem">
                <img src={require('../../images/villas.png')} alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>170 Villas</h2>
                </div>
               </div>
               <div className="pListItem">
                <img src={require('../../images/cabins.png')} alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Cabins</h1>
                    <h2>250 Cabins</h2>
                </div>
               </div>
               <div className="pListItem">
                <img src={require('../../images/glamping.png')} alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Glamping</h1>
                    <h2>150 Glamping</h2>
                </div>
               </div>
            </div>
        </div>
    )
}

export default PropertyList