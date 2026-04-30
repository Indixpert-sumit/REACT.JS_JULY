import React, { useState } from 'react'; // Added useState import
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaPen } from 'react-icons/fa';

const RB_Buttons = () => {
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);

    const textStyle = {
        fontWeight: bold ? "bold" : "normal",
        fontStyle: italic ? "italic" : "normal",
        textDecoration: underline ? "underline" : "none",
        marginTop: "10px",
    };

    return (
        <div className="p-4">
            {/* Button Styles Section */}
            <h2 className='d-flex'>BUTTON STYLES</h2>
            <div className='d-flex gap-2' >
                <Button variant="primary">Normal Button</Button>
                <Button variant="primary">
                    <FaPen /><span style={{ paddingLeft: "5px" }}>Edit Record</span>
                </Button>
                <Button variant="outline-primary">Outline Button</Button>
                <Button variant="primary" disabled>Disabled</Button>
            </div>

            {/* Button Types Section */}
            <h2 className='d-flex' style={{ marginTop: "70px" }}>BUTTON TYPES</h2>
            <div className='d-flex gap-2' >
                <Button variant="primary">Link</Button>
                <Button variant="primary">Button</Button>
                <Button variant="primary" type="button">Input</Button>
                <Button variant="primary" type="submit">Submit</Button>
                <Button variant="primary" type="reset">Reset</Button>
            </div>

            {/* Toggle Buttons Section */}
            <h3 className="mt-4 d-flex">Toggle Buttons</h3>
            <div className="mt-4 d-flex">
                <Button 
                    variant={bold ? "primary" : "outline-primary"}
                    onClick={() => setBold(!bold)}>
                    <b>B</b>
                </Button>

                <Button
                    variant={italic ? "primary" : "outline-primary"}
                    onClick={() => setItalic(!italic)}>
                    <i>I</i>
                </Button>

                <Button
                    variant={underline ? "primary" : "outline-primary"}
                    onClick={() => setUnderline(!underline)}>
                    <u>U</u>
                </Button>
                </div>

            <div style={textStyle} className="mt-4 d-flex">
                Sample Text Preview
            </div>
        </div>
    );
};

export default RB_Buttons;