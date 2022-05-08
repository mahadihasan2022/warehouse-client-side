import React from "react";
import "./AddItem.css";

const AddItem = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const product = {
            name: e.target.name.value,
            price: e.target.price.value,
            image: e.target.image.value,
        }
        // const {data} = await axios.post("http://localhost:5000/inventory", product);
    }
  return (
    <div className="add-item pb-12 ">
      <h1 className="text-center font-bold p-8 text-5xl">Add Your Items</h1>
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm text-center">
        <form className="text-center">
          <div class="form-group mb-6">
            <label
              for="exampleInputEmail1"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Image
            </label>
            <input
              type="name"
              class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Image"
            />
          </div>
          <div class="form-group mb-6">
            <label
              for="exampleInputPassword1"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Name
            </label>
            <input
              type="password"
              class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputPassword1"
              placeholder="Name"
            />
          </div>
          <div class="form-group mb-6">
            <label
              for="exampleInputPassword1"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Price
            </label>
            <input
              type="password"
              class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputPassword1"
              placeholder="Price"
            />
          </div>
          <button
            type="submit"
            class="
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
