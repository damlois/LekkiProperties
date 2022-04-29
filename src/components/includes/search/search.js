import React from 'react';
import Input from '../input/input';

const Search = (props) => {
    return (
        <form className="form-inline mx-auto mt-n4 mb-5 search_form text-center"
                style={{ backgroundColor: "#0A2138", maxWidth: "95%", padding: '15px', fontSize: '13px' }}
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

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
    );
}

export default Search;