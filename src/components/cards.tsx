import { FC, useState, useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import { trpc } from "../utils/trpc";

type ProductProps = {
  name: string;
  slug: string;
  description: string;
  inventory: number;
  price: number;
  id: string;
};

const Cards: FC<ProductProps> = (props) => {
  const [details, setDetails] = useState(false);
  const { addItemToCart } = useContext(CartContext);

  const context = trpc.useContext();
  const deleteMutation = trpc.testRouter.product_delete.useMutation({
    async onSuccess() {
      context.testRouter.invalidate();
    },
  });

  const deleteProduct = (id: string) => {
    deleteMutation.mutateAsync({
      id: props.id,
    });
  };

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
        className="focus:ring-blue==-300 absolute top-2 right-2 items-center rounded-lg bg-red-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => deleteProduct(props.id)}
      >
        Delete
      </button>

      <button
        className="absolute right-5 inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => addItemToCart(props)}
      >
        <svg
          aria-hidden="true"
          className="mr-2 -ml-1 h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
        </svg>
        Add to Cart
      </button>
    </div>
  );
};

export default Cards;
