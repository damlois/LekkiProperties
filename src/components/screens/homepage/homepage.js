import Banner from "../../../assets/images/homepage_banner.jpg"
import Input from "../../includes/input/input";
import PropertyCard from "../../includes/propertyCard/propertyCard";
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
                <div class="centered">
                    <h1>Whether you're buying, selling or renting, we can help you to get your desired apartment.</h1>
                    <p style={{ color: '#e3e1e1' }}>
                        LekkProperty offers clients an on-demand experience for selling, buying,
                        leasing and financing with a transparent and virtually seamless end-to-end service.</p>
                </div>
            </div>
            <form className="form-inline mx-auto mt-n3 search_form text-center"
                style={{ backgroundColor: "#0A2138", maxWidth: "85%", padding: '15px' }}
            >
                <Input
                    type="text"
                    placeholder="Search"
                />

                <Input
                    type="text"
                    placeholder="Location"
                />

                <Input
                    type="text"
                    placeholder="Owner"
                />

                <Input
                    type="number"
                    placeholder="No. of Bedrooms"
                />

                <Input
                    type="number"
                    placeholder="No. of Bathrooms"
                />

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <div className="mt-5">
                <h1 className="heading-title">Featured Properties</h1>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4">
                            <PropertyCard />
                        </div>
                        <div class="col-sm-4">
                            <PropertyCard />
                        </div>
                        <div class="col-sm-4">
                            <PropertyCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage;
