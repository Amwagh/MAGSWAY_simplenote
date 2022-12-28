import React, { useState } from 'react';
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CloseSidebar from './components/CloseSidebar';



const App = () => {
  const [hide, setHide] = useState(false);

  const handleSidebar = () => {
    setHide(!hide)
  }

  return (
    <>
      <Header click={handleSidebar} />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            {/* <CloseSidebar click={handleSidebar} hide={hide} /> */}
            <Sidebar hide={hide} />
            <LeftSide />
          </div>
          <div className="col-md-8">{/* <RightSide/> */}</div>
        </div>
      </div>
    </>
  );
}

export default App