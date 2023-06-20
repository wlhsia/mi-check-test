import { useNavigate } from "react-router-dom";

const AppBar = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-gray-500">
      <nav className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-12 w-20" src="/fcfc.png" alt="Logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-bold"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/item");
                  }}
                >
                  查項目基本資料
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-bold"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/project");
                  }}
                >
                  查核案件
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-bold"
                >
                  查核案件彙總
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <a className="text-gray-300">N000171574</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppBar;
