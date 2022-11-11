import { FC, useState, useContext } from "react";
import { CartContext } from "../contexts/cart.context";

type ProductProps = {
  name: string;
  slug: string;
  description: string;
  inventory: number;
  price: number;
};

const Cards: FC<ProductProps> = (props) => {
  const [details, setDetails] = useState(false);
  const { addItemToCart } = useContext(CartContext);

  const toggleDetails = () => {
    setDetails(!details);
  };

  return (
    <div className="relative max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.name}
      </h2>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {props.price}
      </p>
      {details ? (
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
      ) : null}

      {details ? (
        <button
          className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => toggleDetails()}
        >
          Hide
        </button>
      ) : (
        <button
          className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => toggleDetails()}
        >
          Details
        </button>
      )}

      <button
        className="absolute right-5 inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => addItemToCart(props)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Cards;
