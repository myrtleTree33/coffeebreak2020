import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, List, Button } from 'antd';

const Book = props => {
  const therapist = props.location.state;

  const slots = [
    { timeStart: '0900', timeEnd: '0930', isAvailable: true },
    { timeStart: '1000', timeEnd: '1030', isAvailable: false },
    { timeStart: '1100', timeEnd: '1130', isAvailable: true },
    { timeStart: '1200', timeEnd: '1230', isAvailable: true },
    { timeStart: '1300', timeEnd: '1330', isAvailable: false },
    { timeStart: '1400', timeEnd: '1430', isAvailable: true },
    { timeStart: '1500', timeEnd: '1530', isAvailable: true },
    { timeStart: '1600', timeEnd: '1630', isAvailable: true },
    { timeStart: '1700', timeEnd: '1730', isAvailable: true },
    { timeStart: '1800', timeEnd: '1830', isAvailable: true }
  ];

  const history = useHistory();

  const goBookSlot = slot => history.push('/bookslot', slot);

  return (
    <div>
      <Card
        title={therapist.displayName}
        // cover={<img alt="example" src={therapist.photoURL} />}
        cover={
          <iframe
            // width="1280"
            height="200"
            src="https://www.youtube.com/embed/kayOhGRcNt4"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        }
      >
        <p>{therapist.description}</p>
      </Card>

      <div
        style={{
          padding: '0 1.2rem',
          textAlign: 'center'
        }}
      >
        <h2>Booking slots</h2>
        {slots.map(slot => (
          <Button
            type={slot.isAvailable ? 'primary' : 'danger'}
            shape="round"
            block
            size="large"
            style={{
              margin: '.7rem 0'
            }}
            onClick={() => goBookSlot(slot)}
          >
            {slot.timeStart} - {slot.timeEnd}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Book;
