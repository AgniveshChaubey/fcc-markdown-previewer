import React, { useContext, useState } from 'react';
import { Badge } from 'react-bootstrap';
import { UserContext } from './MarkdownInput';


let myData = '';
export const DataSetter = (props) => {
    myData = props.convertedData;
    // return convertedData
}

const MarkdownPreviewer = () => {
    console.log(myData)
    var outputStyle = {
        width: '100%',
        height: "50vh",
        backgroundColor: "#DCDCDC",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "10px"
    };

    return (
        <>
            <div className="col text-center">
                <h4>
                    <Badge className='' varient='secondary' color='secondary'>
                        Markdown Preview
                    </Badge>
                </h4>
            </div>
            <div
                style={outputStyle}
                dangerouslySetInnerHTML={{ __html: myData }}
            >
            </div>
        </>
    )
}

export default MarkdownPreviewer