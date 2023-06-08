import { Component } from "react";
import Section from "./Section/Section";
import uniqid from 'uniqid';

const fields = [
    { name: 'Company', type: 'string', key: uniqid() },
    { name: 'Job Title', type: 'string', key: uniqid() },
    { name: 'Start Date', type: 'date', key: uniqid() },
    { name: 'End Date', type: 'date', key: uniqid() },
];

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                company: '',
                jobTitle: '',
                startDate: '',
                endDate: ''
            },
            isEditing: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(name, value) {
        if (name === 'Company') {
            this.setState({
                ...this.state,
                fields: { ...this.state.fields, company: value }
            })
        } else if (name === 'Job Title') {
            this.setState({
                ...this.state,
                fields: {
                    ...this.state.fields, jobTitle: value
                }
            })
        } else if (name === 'Start Date') {
            this.setState({
                ...this.state,
                fields: {
                    ...this.state.fields, startDate: value
                }
            })
        } else {
            this.setState({
                ...this.state,
                fields: {
                    ...this.state.fields, endDate: value
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
                    <div>{[this.state.fields.company]}</div>
                    <div>{[this.state.fields.jobTitle]}</div>
                    <div>{[this.state.fields.startDate]}</div>
                    <div>{[this.state.fields.endDate]}</div>
                </section>
            );
        } else {
            return (
                <Section heading='Experience' fields={fields} onChange={this.handleChange} onSubmit={this.handleSubmit} />
            );
        };
    };
};

export default Experience;