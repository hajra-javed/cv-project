import { Component } from "react";
import Section from "./Section/Section";
import uniqid from 'uniqid';

const fields = [
    { name: 'School', type: 'string', key: uniqid() },
    { name: 'Field of Study', type: 'string', key: uniqid() },
    { name: 'Graduation Date', type: 'date', key: uniqid() },
    { name: 'Grade', type: 'number', key: uniqid() },
];

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                school: '',
                fieldOfStudy: '',
                graduationDate: '',
                grade: ''
            },
            isEditing: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(name, value) {
        if (name === 'School') {
            this.setState({
                ...this.state,
                fields: { ...this.state.fields, school: value }
            })
        } else if (name === 'Field of Study') {
            this.setState({
                ...this.state,
                fields: {
                    ...this.state.fields, fieldOfStudy: value
                }
            })
        } else if (name === 'Graduation Date') {
            this.setState({
                ...this.state,
                fields: {
                    ...this.state.fields, graduationDate: value
                }
            })
        } else {
            this.setState({
                ...this.state,
                fields: {
                    ...this.state.fields, grade: value
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
                    <div>{[this.state.fields.school]}</div>
                    <div>{[this.state.fields.fieldOfStudy]}</div>
                    <div>{[this.state.fields.graduationDate]}</div>
                    <div>{[this.state.fields.grade]}</div>
                </section>

            );
        } else {
            return (
                <Section heading='Educationn' fields={fields} onChange={this.handleChange} onSubmit={this.handleSubmit} />
            );
        };
    };
};

export default Education;