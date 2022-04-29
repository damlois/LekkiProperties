import Banner from "../../../assets/images/homepage_banner.jpg"
import Search from "../../includes/search/search";
import Properties from "../properties/properties";
import Agents from "../agents/agents";
import "./style.css"

function Homepage() {
    return (
        <>
            <div className="banner_container" style={{ zIndex: -9999 }}>
                <img src={Banner}
                    style={{
                        objectFit: 'cover',
                        width: '100%',
                        maxHeight: '500px',
                        filter: 'brightness(40%)'
                    }}
                    alt="homepage banner"
                >
                </img>
                <div className="centered">
                    <h1>Whether you're buying, selling or renting, we can help you to get your desired apartment.</h1>
                    <p style={{ color: '#e3e1e1' }}>
                        LekkProperty offers clients an on-demand experience for selling, buying,
                        leasing and financing with a transparent and virtually seamless end-to-end service.</p>
                </div>
            </div>
            <Search />
            <div className="mb-5" style={{ marginTop: '80px' }}>
                <p className="pre-heading-title">Lekki</p>
                <h1 className="heading-title mb-5">Featured Properties</h1>
                <Properties />
            </div>
            <Agents />
        </>
    );
}

export default Homepage;
