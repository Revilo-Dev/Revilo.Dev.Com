import React from 'react';
import { Link } from 'react-router-dom';

function UnderDevelopment() {
    return (
      <div className='body flex justify-center overflow-y-hidden'>
        <h2><b>This Page is Under Development</b></h2>
        <p className='w-7/10 text-zinc-400'>Check Github For Updates.</p>
          <Link className='btn btn-soft AH-Underline AH-Pulse mt-5 mb-5' to="/modding">Return</Link>

        
      </div>
    );
  }

export default UnderDevelopment;