import { Component } from "react";
import './Section.css'
import Input from "../Input/Input";
import uniqid from 'uniqid';

const allFields = {
    generalInformation: {
        fields: [
            { name: 'Name', type: 'string', key: uniqid() },
            { name: 'Email', type: 'email', key: uniqid() },
            { name: 'Phone number', type: 'tel', key: uniqid() },
            { name: 'Address', type: 'string', key: uniqid() }
        ],
        state: { 'Name': '', 'Email': '', 'Phone number': '', 'Address': '' },
        heading: 'General Information'
    },
    education: {
        fields: [
            { name: 'School', type: 'string', key: uniqid() },
            { name: 'Field of Study', type: 'string', key: uniqid() },
            { name: 'Graduation Date', type: 'date', key: uniqid() },
            { name: 'Grade', type: 'number', key: uniqid() }
        ],
        state: { 'School': '', 'Field of Study': '', 'Graduation Date': '', 'Grade': '' },
        heading: 'Education'
    },
    experience: {
        fields: [
            { name: 'Company', type: 'string', key: uniqid() },
            { name: 'Job Title', type: 'string', key: uniqid() },
            { name: 'Start Date', type: 'date', key: uniqid() },
            { name: 'End Date', type: 'date', key: uniqid() }
        ],
        state: { 'Company': '', 'Job Title': '', 'Start Date': '', 'End Date': '' },
        heading: 'Experience'
    }
};

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: allFields[props.className].state,
            isEditing: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            ...this.state,
            isEditing: false
        });
    };

    handleChange(name, value) {
        // this.props.onChange(name, value);
        this.setState({
            ...this.state,
            fields: {
                ...this.state.fields,
                [name]: value
            }
        });
    };

    render() {
        const fields = allFields[this.props.className].fields;
        const heading= allFields[this.props.className].heading;

        if (!this.state.isEditing) {
            return (
                <section>
                    {fields.map(f => 
                        <div>
                            {this.state.fields[f.name]}
                        </div> )}
                </section>

            );
        } else {
            return (
                <section>
                    <form onSubmit={this.handleSubmit}>
                        <legend>{heading}</legend>
                        {fields.map(field =>
                            <Input key={field.key} name={field.name} type={field.type} onChange={this.handleChange} />
                        )}
                        <button type='submit'>Save</button>
                        <button type='reset'>Cancel</button>
                    </form>
                </section>
            );
        };
    };
};
export default Section;