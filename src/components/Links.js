import React from 'react';

function Links({ github, linkedin }) {
    
    return (
      <div>
        <h3>Links
          <a href={github}> {github}</a>
          <a href={linkedin}> {linkedin}</a>
        </h3>
      </div>
    
    )
}
export default Links;