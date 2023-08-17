import './Main.css';

function Header() {
  return (
    <div className='header'>
      <div className='nav-title'></div>
      <div className='nav-lists'>
        <ul>
          <li><a href="#skillset">SkillSet</a></li>
          <li><a href="#tools-languages">Tools & Languages</a></li>
          <li><a href="#internship">Internship</a></li>
          <li><a href="#connect">Connect</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
