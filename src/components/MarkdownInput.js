import React, { createContext, useState } from 'react';
import { Badge } from "react-bootstrap";
import { marked } from 'marked';
import { DataSetter } from './MarkdownPreviewer';


export const UserContext = createContext();

const MarkdownInput = () => {
    const [input, setInput] = useState({ markdown: '' });


    var inputStyle = {
        width: "100%",
        height: "50vh",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "10px"
    };

    const handleChange = (markdown) => {
        setInput({ markdown });
    }


    const convertedData = marked(input.markdown);
    // console.log(input)
    // console.log(convertedData)

    return (
        // <UserContext.Provider value={convertedData}>
        <>
            <div className="col text-center">
                <h4>
                    <Badge className='' varient='secondary'>
                        Markdown Input
                    </Badge>
                </h4>
            </div>
            <div className="mark-input" >
                <textarea
                    value={input.markdown}
                    className="input"
                    style={inputStyle}
                    onChange={e => {
                        handleChange(e.target.value)
                    }}
                ></textarea>
            </div>
            <DataSetter convertedData={convertedData}/>
        </>
            // {/* <MarkdownPreviewer /> */ }
             // {/* <div dangerouslySetInnerHTML={{__html:convertedData}}></div> */ }
             // {/* // </UserContext.Provider> */}
    )
}

export default MarkdownInput;