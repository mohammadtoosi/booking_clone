import React from 'react'

import Card from "react-bootstrap/Card"

const AirTicketCard = ({ image, children }) => {
  return (
    <div className='mx-2'>
        <Card>
            <Card.Img variant='top' src={image} height={200} />
            <Card.Body>
                <Card.Title className='h6'>{children}</Card.Title>
            </Card.Body>
        </Card>
    </div>
  )
}

export default AirTicketCard