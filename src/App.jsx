import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Nav } from "./components";
import { useState } from "react";
import { useEffect } from "react";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";
import Cart from "./components/Cart";
import SignInSignUp from "./components/SignInSignUp";
import Loader from "./components/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false);
    }, 1000); 
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <Nav />
          <Routes>
            <Route
              path="/"
              element={
                <main className="relative">
                  <section className="xl:padding-l wide:padding-r padding-b">
                    <Hero />
                  </section>
                  <section className="padding">
                    <PopularProducts />
                  </section>
                  <section className="padding">
                    <SuperQuality />
                  </section>
                  <section className="py-10 padding-x">
                    <Services />
                  </section>
                  <section className="padding">
                    <SpecialOffer />
                  </section>
                  <section className="bg-pale-blue padding">
                    <CustomerReviews />
                  </section>
                  <section className="w-full py-16 padding-x sm:py-32">
                    <Subscribe />
                  </section>
                  <section className="pb-8 bg-black padding-x padding-t">
                    <Footer />
                  </section>
                </main>
              }
            />

            <Route path="/cart" element={<Cart />} />

            <Route path="/signin" element={<SignInSignUp />} />
          </Routes>
        </Router>
      )}
    </div>
  );
};

export default App;