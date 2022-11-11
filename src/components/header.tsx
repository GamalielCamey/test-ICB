import { FC } from "react";

const Header: FC = ({ toggleCart }) => {
  return (
    <div className="relative mt-3.5 h-14 py-0">
      <h1 className="absolute inset-y-1 left-5 mt-0 mb-6 px-5 text-5xl font-bold">
        Online Shop
      </h1>
      <button
        onClick={() => toggleCart()}
        className="absolute top-2 right-0 mr-2 rounded-lg bg-blue-700 px-5 py-3 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Cart
      </button>
    </div>
  );
};

export default Header;
