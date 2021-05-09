import React, {Component} from "react";
import "../Login.css"
import StyleReader from "../../../../../utils/StyleReader";

class Email extends Component {
    state = {
        value: ""
    }

    render() {
        const {componentsState} = this.props;
        const componentStyle = componentsState && componentsState["Email"];
        const styleReader = new StyleReader(componentStyle);
        const label = this.props.children || "Email";

        return (
            <form className={styleReader.userClassName + "login__group"}>
                <input type={"email"}
                       onChange={this.handleChange}
                       className={"login__input"}
                       placeholder=""
                       value={this.state.value}
                       style={styleReader.style}/>
                <label className={"login__label"}>{label}</label>
            </form>
        )
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }
}

export default Email;