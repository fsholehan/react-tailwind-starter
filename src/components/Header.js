import { Menu } from "@headlessui/react";
import {
  AnnotationIcon,
  CashIcon,
  ChevronDownIcon,
  MenuIcon,
} from "@heroicons/react/outline";

function Header() {
  const products = [
    {
      name: "Get Started",
      icon: AnnotationIcon,
      description: "Lorem ipsum dolor sit amet,",
    },
    {
      name: "Billing",
      icon: CashIcon,
      description: "Lorem ipsum dolor sit amet,",
    },
  ];

  return (
    <header className="w-full p-5 lg:px-12 shadow-sm flex items-center justify-between">
      <div className="flex items-center justify-between flex-grow">
        <h1 className="font-bold text-2xl cursor-pointer">PayAd</h1>
        <Menu as="div" className="lg:hidden relative">
          <Menu.Button>
            {" "}
            <MenuIcon className="h-6" />
          </Menu.Button>
          <Menu.Items className="flex flex-col absolute w-screen -right-5 p-5 bg-white h-screen">
            <h3 className="link-drop">Home</h3>
            <h3 className="link-drop">Products</h3>
            <h3 className="link-drop">About</h3>
            <h3 className="link-drop">Contact</h3>
            <h3 className="link-drop">How To</h3>
          </Menu.Items>
        </Menu>
      </div>
      <div className="flex space-x-12 items-center">
        <ul className="hidden lg:inline-flex items-center space-x-16 relative">
          <li className="link">Home</li>
          <Menu as="li" className="relative">
            <Menu.Button className="link flex items-center">
              Product <ChevronDownIcon className="h-5 ml-2" />
            </Menu.Button>
            <Menu.Items className="bg-white z-50 absolute top-10 -left-14 right-2 border border-gray-100  w-80 rounded-lg p-3">
              {products.map((product, index) => (
                <div
                  className="flex space-x-3 p-2 rounded-lg items-center cursor-pointer hover:bg-gray-100 group"
                  key={index}
                >
                  <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-xl">
                    {<product.icon className="h-6 w-6 text-blue-500" />}
                  </div>
                  <div>
                    <a
                      href="/"
                      className="font-bold group-hover:text-blue-500 text-gray-900"
                    >
                      {product.name}
                    </a>
                    <p className="text-gray-400 group-hover:text-gray-800">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </Menu.Items>
          </Menu>
          <li className="link">Contact</li>
          <li className="link">About</li>
          <li className="link">How To</li>
        </ul>
        <button className="hidden lg:block bg-blue-500 text-white rounded-xl py-1 px-3 border border-blue-200 focus:outline-none focus:ring focus:ring-blue-300">
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
