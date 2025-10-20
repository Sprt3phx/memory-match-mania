import React from 'react'
import { NavLink } from 'react-router-dom'

const linkStyle = ({ isActive }) => ({
  padding: '8px 12px',
  borderRadius: 8,
  textDecoration: 'none',
  fontWeight: 600,
  background: isActive ? '#ececec' : 'transparent',
});

export default function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px',
        borderBottom: '1px solid #ddd',
      }}
    >
      <div>
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        <NavLink to="/game" style={linkStyle}>Game</NavLink>
        <NavLink to="/settings" style={linkStyle}>Settings</NavLink>
        <NavLink to="/results" style={linkStyle}>Results</NavLink>
      </div>
    </nav>
  );
}
