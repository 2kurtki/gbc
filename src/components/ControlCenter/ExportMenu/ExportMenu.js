import React, { Component } from 'react';
import '../../../assets/css/ControlCenter/ControlMenu.scss'
import Import from "./Import";
import Tag from "./Tag";

class ExportMenu extends Component {
    render () {
        const {componentName, componentsState} = this.props;

        return (
            <div className="control-menu control-menu_export">
                <p className="control-menu__text">To import a component:</p>
                <Import componentName={componentName}/>
                <p className="control-menu__text">Then you can use it:</p>
                <Tag componentName={componentName} componentsState={componentsState}/>
            </div>
        )
    }
}

export default ExportMenu;
