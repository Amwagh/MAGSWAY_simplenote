import React, { useEffect, useState } from 'react';
import "./style.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const RightSide = () => {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    localStorage.setItems('notes', JSON.stringify(items))
  }, [items]); 

  return (
    <>
      <div>
        <textarea className='note_section' rows="4" cols="110">        
        </textarea>
      </div>
    </>
  );
}

export default RightSide
