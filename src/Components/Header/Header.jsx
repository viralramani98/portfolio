import { Link } from "react-router";
import { Menus } from "../../App";

const Header = () => {
  return (
    <div>
      <header className="bg-white shadow-md py-4 px-6">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">

          <div className="text-xl font-bold text-blue-600">Viral Dev</div>


          <div className="flex gap-6">
            {Menus.map((ele) => (
              <Link
                key={ele.title}
                to={ele.path}
                className="text-gray-700 hover:text-blue-600 transition font-medium hover:blue-500"
              >
                {ele.title}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
