import React, { Component } from 'react';
import AddProperty from './properties/addProperty';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div></div>
            // <div className='form-div'>
            //     {this.props.name === 'inventory' && (
            //         <AddInventory
            //             handleFormSubmit={(val) => this.props.handleFormSubmit(val)}
            //             closeForm={this.props.closeForm}
            //         />
            //     )}
            //     {this.props.name === 'category' && (
            //         this.props.type === 'add' ?
            //             <AddCategory
            //                 handleFormSubmit={(val) => this.props.handleFormSubmit(val)}
            //                 closeForm={this.props.closeForm}
            //             /> :
            //             <AddCategory
            //                 handleFormSubmit={(val) => this.props.handleFormSubmit(val)}
            //                 closeForm={this.props.closeForm}
            //                 item={this.props.item}
            //                 type="edit"
            //             />
            //     )}
            //     {this.props.name === 'vendor' && (
            //         this.props.type === 'add' ?
            //             <AddVendor
            //                 handleFormSubmit={(val) => this.props.handleFormSubmit(val)}
            //                 closeForm={this.props.closeForm}
            //             /> :
            //             <AddVendor
            //                 handleFormSubmit={(val) => this.props.handleFormSubmit(val)}
            //                 closeForm={this.props.closeForm}
            //                 item={this.props.item}
            //                 type="edit"
            //             />
            //     )}
            //     {this.props.name === 'purchase' && (
            //         <AddPurchase
            //             handleFormSubmit={(val) => this.props.handleFormSubmit(val)}
            //             closeForm={this.props.closeForm}
            //         />
            //     )}
            //     {this.props.name === 'sale' && (
            //         this.props.type === 'add' ?
            //         <AddSale
            //             handleFormSubmit={(val) => this.props.handleFormSubmit(val)}
            //             closeForm={this.props.closeForm}
            //         /> :
            //         <AddSale
            //         handleFormSubmit={(val) => this.props.handleFormSubmit(val)}
            //         closeForm={this.props.closeForm}
            //         item={this.props.item}
            //         type="edit"
            //     />
            //     )}
            // </div>
        );
    }
}

export default Form;