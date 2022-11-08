import React, { useContext } from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { Context } from "./context";

const Sidebar = () => {
  const { sidebarOpen, closeSidebar } = useContext(Context);
  return (
    <aside className={`${sidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <header className="sidebar-header">
        <button className="close-sidebar-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </header>
      <ul className="menu">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id} className="menu-li">
              <a href={url} className="menu-link">
                <span className="link-icon">{icon}</span>
                <span className="link-text">{text}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons-ul">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url} className="social-icon">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
