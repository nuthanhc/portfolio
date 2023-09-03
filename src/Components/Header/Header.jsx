import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div className='nav-title'></div>
      <div className='nav-lists'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/#skillset">SkillSet</Link></li>
          <li><Link to="/#tools-languages">Tools & Languages</Link></li>
          <li><Link to="/#internship">Internship</Link></li>
          <li><Link to="/#footer">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
