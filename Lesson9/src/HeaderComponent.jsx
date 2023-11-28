import {NavLink} from "react-router-dom";

let HeaderComponent = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink activeclassname='active' to='/'>Home</NavLink></li>
          <li><NavLink activeclassname='active' to='about'>About</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderComponent;