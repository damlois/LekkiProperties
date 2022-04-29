import { useState, useEffect } from "react";
import propertiesService from '../../../services/properties'
import PropertyCard from "../../includes/propertyCard/propertyCard";
import Search from "../../includes/search/search";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    propertiesService
      .getAll()
      .then(properties => {
        setProperties(properties)
      })
  }, [])
  

  return (
    <div>
      <div className="container mb-5 mt-5">
        <div className="row">
          {properties.sort((a,b) => new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1)
          .slice(0,9)
          .map((property, id) =>
            <div className="col-sm-4">
              <PropertyCard 
              key={id}
              name={property.address}
              description={property.description}
              imageUrl={property.images.length >= 1 ? property.images[0].path : ""}
              numberOfBedrooms={property.bedroom}
              numberOfBathrooms={property.bathroom}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Properties;
