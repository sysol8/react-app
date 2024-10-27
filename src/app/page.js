import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "./Sidebar"

export default function App() {
  return (
    <div className="main">
      <header className="appbar" role="banner">
        <button id="sidebar-btn"></button>
        <h1>Sex</h1>
        <button id="menu-btn"></button>
      </header>
      <Sidebar />
    </div>
  )
}
