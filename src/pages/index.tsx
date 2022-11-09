import { type NextPage } from "next";
import Cards from "../components/cards";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const products = trpc.testRouter.products.useQuery();

  return (
    <div className="px-5 py-3">
      <div className="grid grid-cols-3 gap-2">
        {products.isFetched &&
          products.data?.map((product) => (
            <Cards
              key={Math.random()}
              name={product.name}
              slug={product.slug}
              description={product.description}
              price={product.price}
              inventory={product.inventory}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
