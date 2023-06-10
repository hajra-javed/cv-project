import { Component } from "react";

class Input extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        this.props.onChange(this.props.name, e.target.value);
    }

    render() {
        const required = ['Name', 'Email'].includes(this.props.name);
        return (
            <div className="field">
                {/* <label htmlFor={this.props.name}>{this.props.name}</label> */}
                {(() => {
                    if (this.props.type === 'month') {
                        return <label htmlFor={this.props.name}>{this.props.name}</label>
                    }
                })()}
                {(() => {
                    if (this.props.type === 'textarea') {
                        return (
                        <textarea
                            id={this.props.name}
                            rows='5'
                            placeholder={this.props.name}
                            onChange={this.handleChange}>
                            {this.props.value}
                        </textarea>)
                    } else {
                        return (
                        <input
                            required={required}
                            type={this.props.type}
                            id={this.props.name}
                            placeholder={this.props.name}
                            value={this.props.value}
                            onChange={this.handleChange}/>)
                    }
                })()}
            </div>
        );
    };
};

export default Input;