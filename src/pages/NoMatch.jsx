import React from 'react';

function NoMatch() {
    return (
      <div className='body'>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/"><button>Back to Home</button></Link>
        </p>
  
        
      </div>
    );
  }

export default NoMatch;