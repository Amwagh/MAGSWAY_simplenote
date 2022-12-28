import React from 'react';
import * as RI from "react-icons/md"
import * as FA from "react-icons/fa";
import * as IO from "react-icons/io5";
import * as BI from "react-icons/bi"

const Sidebar = ({hide}) => {
  return (
    <>
      <div className={hide ? "sidebar hide" : "sidebar"}>
        <ul>
          <li>
            <span>
              <RI.MdCollectionsBookmark className="sidebar_icons" />
            </span>
            All Notes
          </li>
          <hr />
          <li>
            <span>
              <FA.FaTrashAlt className="sidebar_icons" />
            </span>
            Trash
          </li>
          <hr />
          <li>
            <span>
              <IO.IoSettings className="sidebar_icons" />
            </span>
            Settings
          </li>
          <hr />
        </ul>

        <div className="sidebar_menu">
          <hr />
          <ul>
            <li>
              <span>
                <BI.BiWifi className="sidebar_icons" />
              </span>
              Server Connection
            </li>
            <li>Keyboard Shortcuts</li>
            <li>Help & Support About</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar