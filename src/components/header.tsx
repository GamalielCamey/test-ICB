import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="relative h-14 py-0">
      <h1 className="absolute inset-y-1 left-5 mt-0 mb-6 px-5 text-5xl font-bold">
        Online Shop
      </h1>
      <button className="absolute inset-y-1 right-5 mr-3 w-16 rounded-lg bg-blue-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0">
        Cart
      </button>
    </div>
  );
};

export default Header;
