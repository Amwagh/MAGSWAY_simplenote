import React from 'react'
import "./style.css"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FaEdit } from "react-icons/fa";
import { FiColumns } from "react-icons/fi";
import { VscChecklist } from "react-icons/vsc";
import * as AI from "react-icons/ai";

const Header = ({ click}) => {
  return (
    <>
      <div className="container-fluid header_section">
        <div className="row">
          <div className="col-md-12">
            <div className="left">
              <AI.AiOutlineMenu className="toggle-menu-icon" onClick={click} />
              <h6>All Notes</h6>          
                <FaEdit className="edit_button toggle-menu-icon" />            
            </div>
            <FiColumns className="toolbar-icons" />
            <AI.AiOutlineMessage className="toolbar-icons-right" />
            <AI.AiOutlineInfoCircle className="toolbar-icons-right" />
            <VscChecklist className="toolbar-icons-right" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;