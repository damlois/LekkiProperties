import React, { Component } from 'react';
import Input from '../../includes/input/input';
import Button from '../../includes/button/button';
import propertiesService from '../../../services/properties';
import Alert from '../../includes/alert/alert';

class AddProperty extends Component {

    constructor(props) {
        super(props);

        this.state = {
            address: this.props.type === 'edit' ? this.props.item.address : "",
            type: this.props.type === 'edit' ? this.props.item.type : "",
            bedroom: this.props.type === 'edit' ? this.props.item.bedroom : 0,
            bathroom: this.props.type === 'edit' ? this.props.item.bathroom : 0,
            sittingRoom: this.props.type === 'edit' ? this.props.item.sittingRoom : 0,
            kitchen: this.props.type === 'edit' ? this.props.item.kitchen : 0,
            toilet: this.props.type === 'edit' ? this.props.item.toilet : 0,
            propertyOwner: this.props.type === 'edit' ? this.props.item.propertyOwner : "",
            description: this.props.type === 'edit' ? this.props.item.description : "",
            validFrom: this.props.type === 'edit' ? this.props.item.validFrom : "",
            validTo: this.props.type === 'edit' ? this.props.item.validTo : "",
            images: this.props.type === 'edit' ? this.props.item.images : [],
            status: "",
            message: ""
        }
    }
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleFileChange = event => {
        this.setState({ images: event.target.files });  
      };
    handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(this.state.images);
        const response = await propertiesService.create(
            {
                address: this.state.address, type: this.state.type, bedroom: this.state.bedroom, bathroom: this.state.bathroom,
                sittingRoom: this.state.sittingRoom, kitchen: this.state.kitchen, toilet: this.state.toilet,
                propertyOwner: this.state.propertyOwner, description: this.state.description, validFrom: this.state.validFrom,
                validTo: this.state.validTo, images: this.state.images
            }
        );
        response.status === "error" ?
            this.setState({ status: "error", message: response.message }) :
            this.setState({ status: "success", message: "Property Added Successfully" })
    }

    render() {
        return (
            <div>
                <form style={{ margin: '50px auto', width: '50%' }}>
                    <div className="form-group">
                        <Input
                            name="address"
                            type="text"
                            placeholder="Property address"
                            value={this.state.address}
                            handleChange={this.handleInputChange}
                        />
                        <Input
                            name="type"
                            type="text"
                            placeholder="Property type"
                            value={this.state.type}
                            handleChange={this.handleInputChange}
                        />
                        <Input
                            name="propertyOwner"
                            type="text"
                            placeholder="Property Owner"
                            value={this.state.propertyOwner}
                            handleChange={this.handleInputChange}
                        />
                        <Input
                            name="description"
                            type="textArea"
                            placeholder="Description"
                            value={this.state.description}
                            handleChange={this.handleInputChange}
                        />
                        <Input
                            name="bedroom"
                            type="number"
                            label="Number of bedrooms"
                            value={this.state.bedroom}
                            handleChange={this.handleInputChange}
                        />
                        <Input
                            name="bathroom"
                            type="number"
                            label="Number of bathrooms"
                            value={this.state.bathroom}
                            handleChange={this.handleInputChange}
                        />
                        <Input
                            name="sittingRoom"
                            type="number"
                            label="Number of sitting rooms"
                            value={this.state.sittingRoom}
                            handleChange={this.handleInputChange}
                        />
                        <Input
                            name="kitchen"
                            type="number"
                            label="Number of kitchens"
                            value={this.state.kitchen}
                            handleChange={this.handleInputChange}
                        />
                        <Input
                            name="toilet"
                            type="number"
                            label="Number of toilets"
                            value={this.state.toilet}
                            handleChange={this.handleInputChange}
                        />
                        <Input
                            name="validFrom"
                            type="date"
                            label="Valid From"
                            value={this.state.validFrom}
                            handleChange={this.handleInputChange}
                        />
                        <Input
                            name="validTo"
                            type="date"
                            label="Valid To"
                            value={this.state.validTo}
                            handleChange={this.handleInputChange}
                        />
                        <Input
                            name="images"
                            type="file"
                            label="Select images"
                            handleChange={this.handleFileChange}
                            isMultiple
                        />
                        {this.state.message && <Alert
                            status={this.state.status}
                            message={this.state.message}
                        />}
                        <Button
                            name="Cancel"
                        />
                        <Button
                            name="Save"
                            action={this.handleFormSubmit}
                            style={{ float: 'right' }}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default AddProperty;