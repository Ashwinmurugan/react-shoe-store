import {
  Hero,
  PopularProducts,
  Footer,
  Specialoffer,
  Services,
  Subscribe,
  SuperQuality,
  CustomerReviews,
} from "./sections";


import Nav from "./components/Nav";
const App = () => (
  <main className="relative">
    <Nav/>
    {/* Custom tailwind padding in INdex.css */}
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <Specialoffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py16 w-full">
      <Subscribe />
    </section>
    <section className="text-white-400 padding bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);
export default App;
