import './Main.css';
import { Link } from 'react-router-dom';

function Header2() {
  return (
    <div className='header'>
      <div className='nav-title'></div>
      <div className='nav-lists'>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header2;
