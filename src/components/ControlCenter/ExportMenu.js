import React, { Component } from 'react';
import '../../assets/css/ControlCenter/ControlMenu.scss';
import Instruction from "./Instruction";

class StyleMenu extends Component {
    render () {
        const {componentName, fullClassName, componentText} = this.props;

        return (
            <div className="control-menu control-menu_export">
                <p className="control-menu__text">To import a component:</p>
                <Instruction id={"js"}
                             componentName={componentName}
                             fullClassName={fullClassName}
                             componentText={componentText}/>

                <p className="control-menu__text">Then you can use it:</p>
                <Instruction id={"html"}
                             componentName={componentName}
                             fullClassName={fullClassName}
                             componentText={componentText}/>
            </div>
        )
    }
}

export default StyleMenu;
