import React from 'react';
import DropdownForm from "./InputForms/DropdownForm";
import TextForm from "./InputForms/TextForm";
import NumberForm from "./InputForms/NumberForm";
import ColorForm from "./InputForms/ColorForm";

function FormTemplate(props) {
    const {styleType, getStyles, componentStyle} = props;
    let form;

    switch (styleType) {
        case 'fs':
            form = <NumberForm label={"Font Size"}
                               styleType={'fs'}
                               getStyles={getStyles}
                               componentStyle={componentStyle}/>
            break;
        case 'bw':
            form = <NumberForm label={"Border Width"}
                               styleType={'bw'}
                               getStyles={getStyles}
                               componentStyle={componentStyle}/>
            break;
        case 'bg':
            form = <ColorForm label={"Background"}
                              styleType={'bg'}
                              getStyles={getStyles}
                              componentStyle={componentStyle}/>
            break;
        case 'cl':
            form = <ColorForm label={"Color"}
                              styleType={'cl'}
                              getStyles={getStyles}
                              componentStyle={componentStyle}/>
            break;
        case 'bc':
            form = <ColorForm label={"Border Color"}
                              styleType={'bc'}
                              getStyles={getStyles}
                              componentStyle={componentStyle}/>
            break;
        case 'fw':
            const fontWeight = ["Light", "Regular", "Bold"];
            form = <DropdownForm label={"Font weight"}
                                 elements={fontWeight}
                                 styleType={'fw'}
                                 getStyles={getStyles}
                                 componentStyle={componentStyle}/>
            break;
        case 'br':
            form = <NumberForm label={"Border Radius"}
                             styleType={'br'}
                             getStyles={getStyles}
                             componentStyle={componentStyle}/>
            break;
        case 'type':
            const types = ["Email", "Password", "Telephone", "Login"];
            form = <DropdownForm label={"Type"}
                                 elements={types}
                                 styleType={'type'}
                                 getStyles={getStyles}
                                 componentStyle={componentStyle}/>
            break;
        case 'login':
            const logins = ["Email", "Telephone", "Login"];
            form = <DropdownForm label={"Type"}
                                 elements={logins}
                                 styleType={'login'}
                                 getStyles={getStyles}
                                 componentStyle={componentStyle}/>
            break;
        case 'btn':
            const buttons = ["Classic", "Waves"];
            form = <DropdownForm label={"Button"}
                                 elements={buttons}
                                 styleType={'btn'}
                                 getStyles={getStyles}
                                 componentStyle={componentStyle}/>
            break;
        case 'text':
            form = <TextForm label={"Text"}
                             styleType={'text'}
                             getStyles={getStyles}
                             componentStyle={componentStyle}/>
            break;
        case 'url':
            form = <TextForm label={"Image URL"}
                             styleType={'url'}
                             getStyles={getStyles}
                             componentStyle={componentStyle}/>
        }


    return (
        form
    );
}

export default FormTemplate;