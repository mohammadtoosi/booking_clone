import React from "react";

import Card from "react-bootstrap/Card";

const BlogCard = ({ image, title, children }) => {
    return (
        <div>
            <a href="/" className="text-decoration-none">
                <Card>
                    <Card.Img variant="top" src={image} height={250} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {children}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </a>
        </div>
    );
};

export default BlogCard;
