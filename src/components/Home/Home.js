import slide01 from "../../images/slide01.jpg";
import slide02 from "../../images/slide02.jpg";
import DashBoard from "../DashBoard/DashBoard";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div
        id="carouselDarkVariant"
        class="carousel slide carousel-fade carousel-dark relative"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <img src={slide01} class="block w-full" alt="" />
            <div class="carousel-caption hidden md:block absolute text-center">
              <h1 class="text-4xl font-bold p-4">Exclusive</h1>
              <p className="text-sm font-semibold p-4">
                Whether you’re loyal to Windows, a Mac fan, or willing to try
                something new, you should know what to look for in a laptop
                before making an investment.
              </p>
              <button className="btn-color w-28 h-12">Visit Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h1 className="text-center font-bold text-4xl p-4">Inventory</h1>
        <Services></Services>
      </div>

      <div>
        <h1 className="text-5xl text-center font-bold p-4">ExcluSive </h1>
        <div className="grid grid-cols-2 gap-4 p-4">
          <div className="p-4">
            <img src={slide02} className="rounded-lg" alt="" />
          </div>
          <div className="pt-12">
            <h1 className="text-2xl font-semibold text-center">
              This is our exclusive.{" "}
            </h1>
            <p className="text-lg p-4">
              We have accumulated Laptop prices in bd list including top laptops
              available in Bangladesh. Our extensive laptop price in the bd list
              allows you to choose.
            </p>
            <p className="text-center"><button className="btn-color h-10 w-16 text-center">
              Show
            </button></p>
          </div>
        </div>
      </div>

      <div>
        <DashBoard></DashBoard>
      </div>
    </div>
  );
};

export default Home;
