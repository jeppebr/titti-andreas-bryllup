import { NavLink } from 'react-router-dom';

export const NavBar: React.FC = () => {
  return (
    <header>
      <div className="container  flex justify-center m-auto">
        <nav className="flex  ">
          <NavLink
            className="inline-flex items-center py-6 hover:text-red-800 text-lg tracking-widest"
            to="/"
          >
            Hjem
          </NavLink>
          <span className="inline-flex items-center justify-start py-6 px-2 mr-4 text-lg tracking-widest">
            /
          </span>

          <NavLink
            className="inline-flex items-center py-6 hover:text-red-800 text-lg tracking-widest"
            to="/program"
          >
            Program
          </NavLink>
          <span className="inline-flex items-center justify-start py-6 px-2 mr-4 text-lg tracking-widest">
            /
          </span>

          <NavLink
            className="inline-flex items-center py-6 hover:text-red-800 text-lg tracking-widest"
            to="/introduction"
          >
            Indledning
          </NavLink>
          <span className="inline-flex items-center justify-start py-6 px-2 mr-4 text-lg tracking-widest">
            /
          </span>

          <NavLink
            className="inline-flex items-center py-6 hover:text-red-800 text-lg tracking-widest"
            to="/gallary"
          >
            Billeder
          </NavLink>
          <span className="inline-flex items-center justify-start py-6 px-2 mr-4 text-lg tracking-widest">
            /
          </span>
          <NavLink
            className="inline-flex items-center py-6 hover:text-red-800 text-lg tracking-widest"
            to="/hotels"
          >
            Hoteller
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
