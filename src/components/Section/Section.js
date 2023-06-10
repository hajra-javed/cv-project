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
    summary: {
        fields: [
            { name: 'Summary', type: 'textarea', key: uniqid() }
        ],
        state: { 'Summary': '' },
        heading: 'Summary'
    },
    education: {
        fields: [
            { name: 'Field of Study', type: 'string', key: uniqid() },
            { name: 'School', type: 'string', key: uniqid() },
            { name: 'Graduation Date', type: 'month', key: uniqid() },
            { name: 'Grade', type: 'string', key: uniqid() }
        ],
        state: { 'School': '', 'Field of Study': '', 'Graduation Date': '', 'Grade': '' },
        heading: 'Education'
    },
    experience: {
        fields: [
            { name: 'Job Title', type: 'string', key: uniqid() },
            { name: 'Company', type: 'string', key: uniqid() },
            { name: 'Start Date', type: 'month', key: uniqid() },
            { name: 'End Date', type: 'month', key: uniqid() },
            { name: 'Responsibilities and Accomplishments', type: 'textarea', key: uniqid() }
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

        this.handleEdit = this.handleEdit.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);
        // this.handleAdd = this.handleAdd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleEdit() {
        this.setState({
            ...this.state,
            isEditing: true
        });
    }

    // handleDelete() {
    //     this.props.onDelete(this.props.className);
    // };

    // handleAdd() {
    //     this.props.onAdd(this.props.className);
    // };

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
        const heading = allFields[this.props.className].heading;

        if (!this.state.isEditing) {
            return (
                <section className={this.props.className}>
                    {(() => {
                        if (heading !== 'General Information') {
                            return (
                                <div className="heading">
                                    <h3>{heading}</h3>
                                    <div class="material-icons edit" onClick={this.handleEdit}>edit</div>
                                </div>
                            )
                        } else {
                            return <div class="material-icons edit" onClick={this.handleEdit} style={{ margin: '2.5%' }}>edit</div>
                        }
                    })()}
                    <div className="details">
                        {fields.map(f => {
                            if (this.state.fields[f.name] !== '') {
                                if (f.name === 'Graduation Date') {
                                    return <div key={f.key} className={f.name}>
                                        <div>Graduated</div>
                                        <div>{this.state.fields[f.name]}</div>
                                    </div>
                                } else if (f.name === 'Grade'){
                                    return (
                                        <div key={f.key} className={f.name}>
                                            Grade: {this.state.fields[f.name]}
                                        </div>)
                                } else if (f.name === 'Start Date'){
                                    return (
                                        <div key={f.key} className={f.name}>
                                            {this.state.fields[f.name]} - 
                                        </div>)
                                } else {
                                    return (
                                        <div key={f.key} className={f.name}>
                                            {this.state.fields[f.name]}
                                        </div>)
                                }
                            }
                        })}
                    </div>
                </section>

            );
        } else {
            return (
                <section className={this.props.className}>
                    {(() => {
                        if (heading !== 'General Information') {
                            return (
                                <div className="heading">
                                    <h3>{heading}</h3>
                                </div>
                            )
                        }
                    })()}
                    <form onSubmit={this.handleSubmit} >
                        {fields.map(field => {
                            // console.log(this.state.fields[field.name]);
                            return <Input key={field.key} name={field.name} type={field.type} value={this.state.fields[field.name]} onChange={this.handleChange} />
                        })}
                        <button type='submit'>Save</button>
                    </form>
                </section>
            );
        };
    };
};
export default Section;