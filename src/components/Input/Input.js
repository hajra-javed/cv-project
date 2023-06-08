import { Component } from "react";

class Input extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e){
        this.props.onChange(this.props.name, e.target.value);
    }

    render(){
        return(
            <div className="field">
                <label htmlFor={this.props.name}>{this.props.name}</label>
                <input type={this.props.type} id={this.props.name} value={this.props.value} onChange={this.handleChange}/>
            </div>
        );
    };
};

export default Input;