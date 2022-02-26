import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className='navbar fixed-top navbar-expand-sm navbar-light bg-light'>
      <div className='container-fluid'>
        <NavLink to='/recent-questions' className='navbar-brand'>Q&A</NavLink>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavDarkDropdown" 
          aria-controls="navbarNavDarkDropdown" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav'>
            <li className='nav-item dropdown'>
              <NavLink 
                id='navbar-dropdown-elementary'
                to='/'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
                className='nav-link dropdown-toggle'
              >초등</NavLink>

              <ul
                className='dropdown-menu'
                aria-labelledby='navbar-dropdown-elementary'
              >
                <li><NavLink to='/elementary/korean' className='dropdown-item'>국어</NavLink></li>
                <li><NavLink to='/elementary/english' className='dropdown-item'>영어</NavLink></li>
                <li><NavLink to='/elementary/mathematics' className='dropdown-item'>수학</NavLink></li>
                <li><NavLink to='/elementary/science' className='dropdown-item'>과학</NavLink></li>
              </ul>
            </li>

            <li className='nav-item dropdown'>
              <NavLink
                id='navbar-dropdown-middle'
                to='/'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
                className='nav-link dropdown-toggle'
              >중등</NavLink>

              <ul 
                className='dropdown-menu'
                aria-labelledby='navbar-dropdown-middle'
              >
                <li><NavLink to='/middle/korean' className='dropdown-item'>국어</NavLink></li>
                <li><NavLink to='/middle/english' className='dropdown-item'>영어</NavLink></li>
                <li><NavLink to='/middle/mathematics' className='dropdown-item'>수학</NavLink></li>
                <li><NavLink to='/middle/science' className='dropdown-item'>과학</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>

        <ul className='navbar-nav me-auto'>
          <li className='nav-item'>
            <NavLink to='/sign-in' className='nav-link'>로그인</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/sign-up' className='nav-link'>회원가입</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
