import React, { Component } from 'react';

class DropdownForm extends Component {
    state = {
        value: '',
    }

    render () {
        const {label, elements} = this.props;

        const optionList = elements.map((element, index) => {
           return <option value={element} key={index}>{element}</option>
        });

        return (
            <form className="form">
                <label className="form__label">{label}</label>
                <div className="form__wrapper">
                    <select className="form__dropdown"
                            value={this.state.value}
                            onChange={this.handleChange}>
                        {optionList}
                    </select>
                </div>
            </form>
        )
    }

    handleChange = (event) => {
        const {getStyles, styleType} = this.props;

        this.setState({
            value: event.target.value
        }, () => {
            getStyles(styleType, this.state.value);
        });
    }
}

export default DropdownForm;
