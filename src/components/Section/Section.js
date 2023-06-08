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
        heading: 'General Information',
        multiple: false
    },
    education: {
        fields: [
            { name: 'School', type: 'string', key: uniqid() },
            { name: 'Field of Study', type: 'string', key: uniqid() },
            { name: 'Graduation Date', type: 'date', key: uniqid() },
            { name: 'Grade', type: 'string', key: uniqid() }
        ],
        state: { 'School': '', 'Field of Study': '', 'Graduation Date': '', 'Grade': '' },
        heading: 'Education',
        multiple: true
    },
    experience: {
        fields: [
            { name: 'Company', type: 'string', key: uniqid() },
            { name: 'Job Title', type: 'string', key: uniqid() },
            { name: 'Start Date', type: 'date', key: uniqid() },
            { name: 'End Date', type: 'date', key: uniqid() }
        ],
        state: { 'Company': '', 'Job Title': '', 'Start Date': '', 'End Date': '' },
        heading: 'Experience',
        multiple: true
    }
};

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: allFields[props.className].state,
            isEditing: true
        };

        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleEdit() {
        this.setState({
            ...this.state,
            isEditing: true
        });
    }

    handleDelete() {
        this.props.onDelete(this.props.className);
    };

    handleAdd() {
        this.props.onAdd(this.props.className);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            ...this.state,
            isEditing: false
        });
    };

    handleCancel() {

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
        const heading = allFields[this.props.className].heading;
        const multiple = allFields[this.props.className].multiple;

        if (!this.state.isEditing) {
            return (
                <section className={this.props.className}>
                    <button onClick={this.handleEdit} >Edit</button>
                    <h3>{heading}</h3>
                    {fields.map(f =>
                        <div key={f.key}>
                            {this.state.fields[f.name]}
                        </div>)
                    }
                    {multiple && 
                    <>
                        <button onClick={this.handleDelete}>Delete</button>
                        <button onClick={this.handleAdd}>Add</button>
                    </>
                    }
                </section>

            );
        } else {
            return (
                <section className={this.props.className}>
                    <h3>{heading}</h3>
                    <form onSubmit={this.handleSubmit} onReset={this.handleCancel}>
                        {fields.map(field => {
                            // console.log(this.state.fields[field.name]);
                            return <Input key={field.key} name={field.name} type={field.type} value={this.state.fields[field.name]} onChange={this.handleChange} />
                        })}
                        <button type='submit'>Save</button>
                        <button type='reset'>Cancel</button>
                    </form>
                </section>
            );
        };
    };
};
export default Section;