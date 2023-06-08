import { Component } from "react";
import Section from "./Section/Section";
import uniqid from 'uniqid';

const fields = [
    { name: 'Name', type: 'string', key: uniqid() },
    { name: 'Email', type: 'email', key: uniqid() },
    { name: 'Phone number', type: 'tel', key: uniqid() },
    { name: 'Address', type: 'string', key: uniqid() },
];

class GeneralInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                name: '',
                email: '',
                phone: '',
                address: ''
            },
            isEditing: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(name, value) {
        if (name === 'Name') {
            this.setState({
                ...this.state,
                fields: { ...this.state.fields, name: value }
            })
        } else if (name === 'Email') {
            this.setState({
                ...this.state,
                fields: {
                    ...this.state.fields, email: value
                }
            })
        } else if (name === 'Phone number') {
            this.setState({
                ...this.state,
                fields: {
                    ...this.state.fields, phone: value
                }
            })
        } else {
            this.setState({
                ...this.state,
                fields: {
                    ...this.state.fields, address: value
                }
            })
        };
    };

    handleSubmit() {
        console.log(1);
        this.setState({
            ...this.state, isEditing: false
        });
    }

    render() {
        if (!this.state.isEditing) {
            return (
                <section>
                    <div>{[this.state.fields.name]}</div>
                    <div>{[this.state.fields.email]}</div>
                    <div>{[this.state.fields.phone]}</div>
                    <div>{[this.state.fields.address]}</div>
                </section>

            );
        } else {
            return (
                <Section heading='General Information' fields={fields} onChange={this.handleChange} onSubmit={this.handleSubmit} />
            );
        };
    };
};

export default GeneralInfo;