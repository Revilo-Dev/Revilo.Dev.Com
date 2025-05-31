import React from 'react';
import { Link } from 'react-router-dom';

function NoMatch() {
    return (
      <div className='body flex justify-center'>
        <h2><b>Wrong Turn!</b></h2>

          <Link className='btn btn-soft AH-Underline AH-Pulse mt-5 mb-5' to="/">Back to Home</Link>
  
        <p className='w-7/10 text-zinc-400'>The specified link was not found. Please check the URL for mistakes and try again.</p>
        
      </div>
    );
  }

export default NoMatch;