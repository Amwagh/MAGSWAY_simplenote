import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineSearch } from 'react-icons/ai'
import "./style.css"

const LeftSide = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <AiOutlineSearch className='search'/>
            <input type="text" placeholder="Search all notes and tags" />
          </div>          
        </div>
      </div>
    </>
  );
}

export default LeftSide