import { Component } from "react";
import './Section.css'
import Input from "../Input/Input";

// const fields = {
//     generalInformation: 
// }
class Section extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleSubmit(e){
        e.preventDefault();
        this.props.onSubmit();
    };

    handleChange(name, value){
        this.props.onChange(name, value);
    };

    render() {
        return (
            <section>
                {/* {(this.props.multiple === 'false') ?
                    <button>Edit</button> :
                    <button>Add</button>
                } */}
                <form onSubmit={this.handleSubmit}>
                    <legend>{this.props.heading}</legend>
                    {this.props.fields.map(field =>
                        <Input key={field.key} name={field.name} type={field.type} onChange={this.handleChange}/>
                    )}
                    <button type='submit'>Save</button>
                    <button type='reset'>Cancel</button>
                </form>
            </section>
        );
    };
};
export default Section;