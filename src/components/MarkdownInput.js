import React from 'react'
import { Badge } from "react-bootstrap";


const MarkdownInput = () => {
    var inputStyle = {
        width: "400px",
        height: "50vh",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "10px"
    };
    return (
        <>
            <div className="col text-center">
                <h4>
                    <Badge className='' varient='secondary'>
                        Markdown Input
                    </Badge>
                </h4>
            </div>
            <div className="mark-input" style={inputStyle}>
                <textarea className="input" style={inputStyle}></textarea>
            </div>
        </>
    )
}

export default MarkdownInput;