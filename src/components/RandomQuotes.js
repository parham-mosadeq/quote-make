import React, { useState } from 'react';
// functions
import { getRandom } from '../services/Api';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
const RandomQuotes = () => {
  const [random, setRandom] = useState([]);

  const handleQuote = async () => {
    setRandom(await getRandom('random'));
  };
  const { _id, content, author } = random;
  return (
    <div className='container h-100 mt-5 d-flex-row  align-items-center justify-content-center '>
      {random && (
        <h1 className='badge bg-primary'>click the button for random quotes</h1>
      )}
      {random ? (
        <div key={_id}>
          <p className='display-6 overflow-hidden'>{content}</p>
          {content && <i className='blockquote-footer '>{author}</i>}
        </div>
      ) : null}
      <button
        type='button'
        className='mt-4 btn btn-outline-primary'
        onClick={handleQuote}
      >
        Random
      </button>
    </div>
  );
};

export default RandomQuotes;
