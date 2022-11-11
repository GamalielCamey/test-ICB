import { type NextPage } from "next";
import { useState } from "react";
import Cards from "../components/cards";
import Cart from "../components/cart";
import CreateForm from "../components/create";
import Header from "../components/header";
import { CartProvider } from "../contexts/cart.context";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const [cartModal, setCartModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const products = trpc.testRouter.products.useQuery();

  const toggleCreate = () => {
    setCreateModal(!createModal);
  };

  const toggleCart = () => {
    setCartModal(!cartModal);
  };

  return (
    <div>
      <CartProvider>
        <Header toggleCart={toggleCart} toggleCreate={toggleCreate} />
        <div className="px-5 py-3 ">
          {cartModal ? <Cart toggleCart={toggleCart} /> : null}

          <div className="px-5 py-3 ">
            {createModal ? <CreateForm toggleCreate={toggleCreate} /> : null}

            <div className="m-3 grid grid-cols-3 items-center gap-2">
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
        </div>
      </CartProvider>
    </div>
  );
};

export default Home;
