import React, { useEffect, useState } from "react";
import axios from "axios";
import Products2 from "../../Components/Products2";
import Images from "../../Images/red image.jpg";
import img from "../../Images/brush-stroke-blue-coloring.png";
import ProductCards3 from "../../Components/ProductCards3";

const Home = () => {
  const [product, setProduct] = useState("");
  const [limit, setLimit] = useState(32);

  // get api
  const productList = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/?limit=${limit}&skip=10`
      );
      setProduct(response.data);
    } catch (error) {}
  };
  useEffect(() => {
    productList();
  }, [limit]);

  return (
    <div className="flex flex-col gap-5 bg-yellow-200 p-5">
      <div className=" flex justify-between px-2 pb-10">
        <div className="flex flex-col justify-between">
          <span className="font-bold lg:text-xl text-sm">
            SKIN PROTECTION CREAM
          </span>
          <div className="flex flex-col">
            <span className="font-bold lg:text-2xl text-sm">
              Trendy Collections
            </span>
            <span className="lg:text-lg text-xs">
              Seedily say has suitable and boy.
              <br /> Execute joy man children rejoined
            </span>
          </div>
        </div>
        <div className=" shadow-xl shadow-yellow-900 rounded-full">
          <img
            src="https://img.freepik.com/premium-photo/daily-habit-personal-care-skincare-beauty-cosmetic-presenting-female-cosmetic-product_545934-16574.jpg?w=900"
            alt=""
            className=" rounded-full lg:h-80 h-56 duration-1000 hover:scale-110 "
          />
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex flex-col ">
            <span className="font-bold lg:text-2xl text-sm">1.5m</span>
            <span className="lg:text-lg text-xs">Monthly</span>
          </div>
          <div className="flex flex-col ">
            <span className="font-bold lg:text-2xl md:text-sm">100k</span>
            <span className="lg:text-lg text-xs">Happy Customer</span>
          </div>
        </div>
      </div>
      <div>
        <Products2 />
      </div>
      <div className="flex justify-between items-center px-5 py-5">
        <div className="flex flex-col gap-1">
          <p className="font-bold lg:text-xl text-sm">VIRTUAL TRY-ON</p>
          <p>
            NEVER BUY THE WRONG <br />
            SHADES AGAIN!
          </p>
        </div>
        <div className="flex shadow-xl shadow-yellow-900 rounded-2xl items-end">
          <img
            src="https://img.freepik.com/premium-photo/happy-young-caucasian-female-yellow-sweater-pointing-fingers-away_81340-14729.jpg?w=826"
            alt=""
            className="lg:h-56 h-[100px] rounded-2xl duration-1000 hover:scale-110"
          />
        </div>
        <span className="flex flex-col">
          <span className="font-bold text-2xl pt-7">Try Now!</span>
          <img src={img} alt="" className="h-10" />
        </span>
      </div>
      <div className=" text-center font-bold text-3xl py-5">
        Our Feature products
      </div>
      <div className="flex justify-between ">
        {/* <ArrowBackIosIcon
          onClick={() => setLimit(limit - 4)}
          className="bg-white rounded-full p-1"
        /> */}
        <div className="flex flex-col font-bold text-xl justify-center gap-3 px-5">
          <span>All</span>
          <span>Skin Care</span>
          <span>Conditioner</span>
          <span>Foundation</span>
        </div>
        <div className="grid grid-cols-4 h-[350px] overflow-y-scroll overflow-auto hide-scroll  scroll-smooth gap-5 ">
          {product?.products?.map((item) => {
            return <ProductCards3 key={item.id} productData={item} />;
          })}
        </div>
        {/* <ArrowForwardIosIcon
          onClick={() => setLimit(limit + 4)}
          className="bg-white rounded-full p-1"
        /> */}
      </div>
      {/* new cards end  */}
      <div className="flex justify-between items-center p-5 px-7">
        <span className="flex flex-col ">
          <span className="font-bold text-xl">TOP RATED</span>
          <span className=" text-sm">
            SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY <br />
            EXERSICE JOY MAN CHILDREN REJOICED.
          </span>
        </span>
        <div>
          <img src={Images} alt="" className="h-64 w-96 rounded-full" />
        </div>

        <div className="flex flex-col ">
          <span className="font-bold text-xl">100K</span>
          <span className="text-sm">HAPPY CUSTOMER WITH US.</span>
        </div>
      </div>
      {/* card 1 */}
      <div className="text-xl text-center font-bold p-5">REVIEWS</div>
      <div className="flex justify-between h-full hide-scroll overflow-auto overflow-x-scroll gap-5 py-10 px-5">
        {/* card 3  */}
        <div className="relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvwf1P6w-3WxwZc2NFN9rEzs29MTil0ybTIQ&usqp=CAU"
            alt=""
            className="rounded-full h-20 w-20 absolute bottom-48 left-28"
          />
          <div className=" flex flex-col w-80 gap-5 rounded-xl text-center p-2 pt-16 bg-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              maiores ex voluptatum. Nihil maxime, ab minima hic asperiores
              eveniet vero commodi dolorum dolores libero perferendis voluptate
            </p>
            <p>Skin Care</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://img.freepik.com/free-photo/young-woman-with-shopping-bags-beautiful-dress-hat_1303-17526.jpg?size=626&ext=jpg&ga=GA1.1.570809898.1687667281&semt=sph"
            alt=""
            className="rounded-full h-20 w-20 absolute bottom-48 left-28"
          />
          <div className="flex flex-col w-80 gap-5 rounded-xl text-center items-center p-2 pt-16 bg-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              maiores ex voluptatum. Nihil maxime, ab minima hic asperiores
              eveniet vero commodi dolorum dolores libero perferendis voluptate
            </p>
            <p>Skin Care</p>
          </div>
        </div>
        {/* card 3  */}
        <div className="relative">
          <img
            src="https://img.freepik.com/free-photo/woman-with-shopping-bags-studio-yellow-background-isolated_1303-14294.jpg?size=626&ext=jpg&ga=GA1.1.570809898.1687667281&semt=sph"
            alt=""
            className="rounded-full h-20 w-20 absolute bottom-48 left-28"
          />
          <div className=" flex flex-col w-80 gap-5 rounded-xl text-center p-2 pt-16 bg-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              maiores ex voluptatum. Nihil maxime, ab minima hic asperiores
              eveniet vero commodi dolorum dolores libero perferendis voluptate
            </p>
            <p>Skin Care</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://img.freepik.com/premium-photo/portrait-young-woman-background-generate-ai_166669-702.jpg?size=626&ext=jpg&ga=GA1.1.570809898.1687667281&semt=ais"
            alt=""
            className="rounded-full h-20 w-20 absolute bottom-48 left-28"
          />
          <div className="flex flex-col w-80 gap-5 rounded-xl text-center items-center p-2 pt-16 bg-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              maiores ex voluptatum. Nihil maxime, ab minima hic asperiores
              eveniet vero commodi dolorum dolores libero perferendis voluptate
            </p>
            <p>Skin Care</p>
          </div>
        </div>
        {/* card 3  */}
        <div className="relative">
          <img
            src="https://img.freepik.com/premium-photo/portrait-beautiful-sensual-female-with-long-curly-hair-against-gray-background_669798-3752.jpg?size=626&ext=jpg&ga=GA1.2.570809898.1687667281&semt=ais"
            alt=""
            className="rounded-full h-20 w-20 absolute bottom-48 left-28"
          />
          <div className=" flex flex-col w-80 gap-5 rounded-xl text-center p-2 pt-16 bg-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              maiores ex voluptatum. Nihil maxime, ab minima hic asperiores
              eveniet vero commodi dolorum dolores libero perferendis voluptate
            </p>
            <p>Skin Care</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://img.freepik.com/free-photo/young-woman-with-shopping-bags-beautiful-dress-hat_1303-17527.jpg?size=626&ext=jpg"
            alt=""
            className="rounded-full h-20 w-20 absolute bottom-48 left-28"
          />
          <div className="flex flex-col w-80 gap-5 rounded-xl text-center p-2 pt-16 bg-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              maiores ex voluptatum. Nihil maxime, ab minima hic asperiores
              eveniet vero commodi dolorum dolores libero perferendis voluptate
            </p>
            <p>Skin Care</p>
          </div>
        </div>
        {/* card 2  */}
        <div className="relative">
          <img
            src="https://img.freepik.com/free-photo/young-woman-with-shopping-bags-beautiful-dress-hat_1303-17526.jpg?size=626&ext=jpg&ga=GA1.1.570809898.1687667281&semt=sph"
            alt=""
            className="rounded-full h-20 w-20 absolute bottom-48 left-28"
          />
          <div className="flex flex-col w-80 gap-5 rounded-xl text-center items-center p-2 pt-16 bg-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              maiores ex voluptatum. Nihil maxime, ab minima hic asperiores
              eveniet vero commodi dolorum dolores libero perferendis voluptate
            </p>
            <p>Skin Care</p>
          </div>
        </div>
        {/* card 3  */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1611042553484-d61f84d22784?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="rounded-full h-20 w-20 absolute bottom-48 left-28"
          />
          <div className=" flex flex-col w-80 gap-5 rounded-xl text-center p-2 pt-16 bg-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              maiores ex voluptatum. Nihil maxime, ab minima hic asperiores
              eveniet vero commodi dolorum dolores libero perferendis voluptate
            </p>
            <p>Skin Care</p>
          </div>
        </div>
        {/* card 4  */}
        <div className="relative ">
          <img
            src="https://img.freepik.com/premium-photo/illustration_987030-848.jpg?size=626&ext=jpg&ga=GA1.2.570809898.1687667281&semt=ais"
            alt=""
            className="rounded-full h-20 w-20 absolute bottom-48 left-28"
          />
          <div className="flex flex-col w-80 gap-5 rounded-xl text-center p-2 pt-16 bg-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              maiores ex voluptatum. Nihil maxime, ab minima hic asperiores
              eveniet vero commodi dolorum dolores libero perfe
            </p>
            <p>Skin Care</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://img.freepik.com/premium-photo/portrait-young-woman-background-generate-ai_166669-702.jpg?size=626&ext=jpg&ga=GA1.1.570809898.1687667281&semt=ais"
            alt=""
            className="rounded-full h-20 w-20 absolute bottom-48 left-28"
          />
          <div className="flex flex-col w-80 gap-5 rounded-xl text-center items-center p-2 pt-16 bg-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              maiores ex voluptatum. Nihil maxime, ab minima hic asperiores
              eveniet vero commodi dolorum dolores libero perferendis voluptate
            </p>
            <p>Skin Care</p>
          </div>
        </div>
        {/* card 3  */}
        <div className="relative">
          <img
            src="https://img.freepik.com/premium-photo/girl-have-nice-hairstyle-wearing-trendy-high-quality-clothes-fashion-photography_758367-17982.jpg?size=626&ext=jpg&ga=GA1.1.570809898.1687667281&semt=ais"
            alt=""
            className="rounded-full h-20 w-20 absolute bottom-48 left-28"
          />
          <div className=" flex flex-col w-80 gap-5 rounded-xl text-center p-2 pt-16 bg-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              maiores ex voluptatum. Nihil maxime, ab minima hic asperiores
              eveniet vero commodi dolorum dolores libero perferendis voluptate
            </p>
            <p>Skin Care</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
