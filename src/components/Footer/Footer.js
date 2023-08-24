import React from 'react';
import './Footer.css'
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (

    <MDBFooter className='footer text-center' >
    <div className='text-center  copy  p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <span className='text-white'>© 2023 Copyright: </span>
      <a className='text-white' href='https://www.arshuinfinity.com/'>
        arshuinfinity.com
      </a>
    </div>
  </MDBFooter>
  );
}