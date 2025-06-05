import { BiErrorCircle } from "react-icons/bi"; 
import { BsFillPersonFill } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { MdFastfood } from "react-icons/md";

export default function ListMenu() {
  const baseMenuClass = `flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-100 hover:text-hijau hover:font-extrabold transition-colors duration-200`;

  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <NavLink
            id="menu-1"
            to="/"
            className={({ isActive }) =>
              `${baseMenuClass} ${isActive ? "bg-green-600 text-white" : ""}`
            }
          >
            <MdDashboard className="mr-4 text-2xl" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            id="menu-2"
            to="/Orders"
            className={({ isActive }) =>
              `${baseMenuClass} ${isActive ? "bg-green-600 text-white" : ""}`
            }
          >
            <CgShoppingCart className="mr-4 text-2xl" />
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            id="menu-3"
            to="/Customers"
            className={({ isActive }) =>
              `${baseMenuClass} ${isActive ? "bg-green-600 text-white" : ""}`
            }
          >
            <BsFillPersonFill className="mr-4 text-2xl" />
            Customers
          </NavLink>
        </li>
        <li>
          <NavLink
            id="menu-3"
            to="/Users"
            className={({ isActive }) =>
              `${baseMenuClass} ${isActive ? "bg-green-600 text-white" : ""}`
            }
          >
            <BsFillPersonFill className="mr-4 text-2xl" />
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
                  id="menu-4"
                  to="/products"
                  className={baseMenuClass}
              >
                  <MdFastfood className="mr-4 text-xl" />
                  Products
          </NavLink>
        </li>
        <li>
          <NavLink
            id="menu-4"
            to="/NotFound400"
            className={({ isActive }) =>
              `${baseMenuClass} ${isActive ? "bg-green-600 text-white" : ""}`
            }
          >
            <BiErrorCircle  className="mr-4 text-2xl" />
            Not Found 400
          </NavLink>
        </li>
        <li>
          <NavLink
            id="menu-5"
            to="/NotFound401"
            className={({ isActive }) =>
              `${baseMenuClass} ${isActive ? "bg-green-600 text-white" : ""}`
            }
          >
            <BiErrorCircle  className="mr-4 text-2xl" />
            Not Found 401
          </NavLink>
        </li>
        <li>
          <NavLink
            id="menu-5"
            to="/NotFound403"
            className={({ isActive }) =>
              `${baseMenuClass} ${isActive ? "bg-green-600 text-white" : ""}`
            }
          >
            <BiErrorCircle  className="mr-4 text-2xl" />
            Not Found 403
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
