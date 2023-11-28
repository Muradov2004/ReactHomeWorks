import {NavLink, Outlet} from "react-router-dom";

let Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li><NavLink to='posts'>Posts</NavLink></li>
          <li><NavLink to='comments'>Comments</NavLink></li>
        </ul>
      </nav>

      <Outlet/>
    </div>
  );
}

export default Home;