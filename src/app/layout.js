"use client"

import './globals.css';
import { useState } from 'react';
import { SidebarButton, MenuButton } from './components/Buttons';
import Sidebar from './components/Sidebar';
import Appbar from './components/Appbar'
import LoginDialog from './components/LoginDialog';

export default function RootLayout({ children }) {

  const [sidebarState, setSidebarState] = useState(true);
  const toggleSidebar = () => setSidebarState(!sidebarState);

  return (
    <html lang="ru">
      <body>
        <div className="layout">
          <Sidebar />
          <div className="content">
            <Appbar />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
