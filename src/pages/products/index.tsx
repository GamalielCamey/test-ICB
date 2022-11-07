import { NextPage } from "next";
import Cards from "../../components/cards";
import { trpc } from "../../utils/trpc";

const Products: NextPage = () => {
  const testCall = trpc.testRouter.test.useQuery("Gama");
  const testMutation = trpc.testRouter.test_mutate.useMutation();

  const callMutation = (
    name: string,
    description: string,
    inventory: number,
    price: number
  ) => {
    testMutation.mutateAsync({
      name: name,
      description: description,
      inventory: inventory,
      price: price,
    });
  };

  return (
    <div>
      <h1 className="text-3xl text-green-800">Featured Products</h1>
      {<h1 className="text-yellow-600">{testCall.data}</h1>}

      <Cards />

      <button
        onClick={() => callMutation("the name", "the description", 2, 12.33)}
      >
        Click
      </button>
    </div>
  );
};

export default Products;
