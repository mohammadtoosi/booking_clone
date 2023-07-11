import React from "react";

const TourCard = ({ image, children }) => {
    return (
        <div className="bg-white text-center p-4 border shadow-sm tour-card__border">
            <a href="/" className="text-decoration-none">
                <img alt="tour" src={image} />
                <p className="text-dark mt-3">
                    <strong>{children}</strong>
                </p>
            </a>
        </div>
    );
};

export default TourCard;
