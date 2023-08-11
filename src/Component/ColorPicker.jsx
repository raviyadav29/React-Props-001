import React from 'react'

function ColorPicker(props) {
    const { title, color } = props;

    const cardStyle = {
        backgroundColor: color,
        padding: '100px',
        borderRadius: '5px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        margin: '10px',
        display: 'inline-block',
        minWidth: '162px',
    };

    const titleStyle = {
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '5px',
    };

    return (
        <div style={cardStyle}>
            <div style={titleStyle}>{title}</div>
            <div style={{color:"white"}}>Color: {color}</div>
        </div>
    )
}

export default ColorPicker