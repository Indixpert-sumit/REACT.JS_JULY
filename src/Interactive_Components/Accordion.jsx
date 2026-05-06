import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { PlusCircle, DashCircle } from "react-bootstrap-icons";

function RB_Accordion() {
    const [activeKey, setActiveKey] = useState("0");

    const items = [
        { id: "0", title: "What is the cost of an online course?", content: "Lorem ipsum dolor sit amet..." },
        { id: "1", title: "Accordion Item #2", content: "Lorem ipsum dolor sit amet..." },
        { id: "2", title: "Accordion Item #2", content: "Lorem ipsum dolor sit amet..." },
        { id: "3", title: "Accordion Item #2", content: "Lorem ipsum dolor sit amet..." }

    ];

    return (
        <div className="p-3">
            <style>{`.no-arrow .accordion-button::after { display: none !important; }`}</style>

            <Accordion
                activeKey={activeKey}
                onSelect={(k) => setActiveKey(k)}
                className="no-arrow"
            >
                {items.map((item) => {
                    const isOpen = activeKey === item.id;


                    return (
                        <Accordion.Item eventKey={item.id} key={item.id}>
                            <Accordion.Header>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    alignItems: "center",
                                    paddingRight: "10px"
                                }}>
                                    <span>{item.title}</span>
                                    {isOpen ? <DashCircle color="blue" /> : <PlusCircle color="black" />}
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                {item.content}
                            </Accordion.Body>
                        </Accordion.Item>
                    );
                })}
            </Accordion>
        </div>
    );
}

export default RB_Accordion;