import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Slot = props => {
  const slot = props.location.state;

  return (
    <div>
      <h1>Slot successfully confirmed.</h1>
      <p>Time start: {slot.timeStart}</p>
      <p>Time end: {slot.timeEnd}</p>
      <p>
        Zoom URL:
        <a href="https://us02web.zoom.us/j/85913143612?pwd=Y21XeFNEcVBDZ1Q1RDVzdFBTQnVYUT09">
          https://us02web.zoom.us/j/85913143612?pwd=Y21XeFNEcVBDZ1Q1RDVzdFBTQnVYUT09
        </a>
      </p>
    </div>
  );
};

export default Slot;
