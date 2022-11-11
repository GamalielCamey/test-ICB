import { FC, useState, useContext } from "react";
import { trpc } from "../utils/trpc";

type ProductProps = {
  name: string;
  slug: string;
  description: string;
  inventory: number;
  price: number;
};

const CreateForm: FC<ProductProps> = ({ toggleCreate }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [inventory, setInventory] = useState(0);

  const context = trpc.useContext();
  const createMutation = trpc.testRouter.product_create.useMutation({
    async onSuccess() {
      context.testRouter.invalidate();
    },
  });

  const createProduct = (
    name: string,
    description: string,
    price: number,
    inventory: number
  ) => {
    createMutation.mutateAsync({
      name: name,
      description: description,
      price: price,
      inventory: inventory,
    });
  };

  return (
    <div className="fixed top-0 right-0 left-0 z-50 w-full overflow-y-auto overflow-x-hidden md:inset-0 md:h-full">
      <div className="relative h-full w-full max-w-md p-4 md:h-auto">
        <div className="relative items-center rounded-lg bg-white p-5 shadow dark:bg-gray-700">
          <button
            onClick={() => toggleCreate()}
            type="button"
            className="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <form className="space-y-6">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Create a product
            </h3>
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
              Name
            </label>
            <input
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />

            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
              Price
            </label>
            <input
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              type="number"
              onChange={(e) => setPrice(parseInt(e.target.value, 10))}
            />

            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
              Description
            </label>
            <textarea
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              onChange={(e) => setDescription(e.target.value)}
            />

            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
              Inventory
            </label>
            <input
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              type="number"
              onChange={(e) => setInventory(parseInt(e.target.value, 10))}
            />
            <button
              onClick={() => createProduct(name, description, price, inventory)}
              type="submit"
              className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
