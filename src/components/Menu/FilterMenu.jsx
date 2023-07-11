import React from "react";

import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";

import cities from "../../utilities/iran-cities.json";

const FilterMenu = () => {
    return (
        <div className="sticky-top">
            <div className="bg-white p-1 rounded">
                <p className="iranBold mt-2 mx-2">فیلتر کردن</p>
            </div>
            <Accordion className="mt-3 mb-3" defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>مبدا و مقصد</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group>
                            <Form.Label>مبدا</Form.Label>
                            <Form.Select>
                                {cities.map((city) => (
                                    <option value={city.name} key={city.id}>
                                        {city.name}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label>مقصد</Form.Label>
                            <Form.Select>
                                {cities.map((city) => (
                                    <option value={city.name} key={city.id}>
                                        {city.name}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>تاریخ رفت</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>تاریخ برگشت</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FilterMenu;
