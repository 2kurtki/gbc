import React from "react";
import "../../../assets/css/ControlCenter/Instruction.scss";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/oceanicNext";
import StyleReader from "../../../utils/StyleReader";


class Instruction extends React.Component {
    state = {
        textButton: "Copy",
        isDisabled: false
    }

    render() {
        const {id, componentName, componentStyle} = this.props;
        const componentText = componentStyle && componentStyle.text;
        const styleReader = new StyleReader(componentStyle);
        const className = styleReader.className;
        let text;

        switch (id) {
            case 'js':
                text = `import ${componentName} from "path/to/Library/${componentName}/${componentName}";`;
                break
            default:
                const displayingAttribute = className === '' ? '' : ` className="${className}"`;

                if (componentText === '') {
                    text = `<${componentName}${displayingAttribute}/>`;
                } else {
                    text = `<${componentName}${displayingAttribute}>${componentText}</${componentName}>`;
                }
        }

        return (
            <div className={"instruction"}>
                <div className={"instruction__text"} id={id}>
                    <Highlight {...defaultProps} code={text} language="jsx" theme={theme}>
                        {({ style, tokens, getLineProps, getTokenProps }) => (
                            <pre className={"highlight"} style={style}>
                                {tokens.map((line, i) => (
                                    <div {...getLineProps({ line, key: i })}>
                                        {line.map((token, key) => (
                                            <span {...getTokenProps({ token, key })} />
                                        ))}
                                    </div>
                                ))}
                            </pre>
                        )}
                    </Highlight>
                </div>
                <button disabled={this.state.isDisabled}
                        onClick={this.copyToClipboard}
                        className={"instruction__button"}>
                    {this.state.textButton}
                </button>
            </div>
        )
    }

    copyToClipboard = () => {
        let str = document.getElementById(this.props.id).innerText;
        let el = document.createElement('textarea');

        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        this.setState({
            textButton: "Copied",
            isDisabled: true
        })

        setTimeout(this.backCopy, 1000)
    }
    backCopy = () => {
        this.setState({
            textButton: "Copy",
            isDisabled: false
        })
    }
}

export default Instruction;