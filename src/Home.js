import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import "./index.css";
import { Context } from "./context";

const Home = () => {
  const { openSidebar, openModal, sidebarOpen } = useContext(Context);

  return (
    <main className="home">
      <header className="header">
        <button className="sidebar-toggle" onClick={openSidebar}>
          <FaBars className="toggle" />
        </button>
      </header>

      <div className="modal-and-msg">
        <section className="modal-section">
          <button className="modal-btn" onClick={openModal}>
            Show Overlay
          </button>
        </section>

        <h3 className="msg">click the buttons!</h3>
      </div>
    </main>
  );
};

export default Home;
