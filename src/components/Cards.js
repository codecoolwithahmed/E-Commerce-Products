function Cards(params) {
  console.log(params.productsdata);

  return (
    <div className="container px-5 py-24 mx-auto ">
    <div className="flex flex-wrap justify-center -m-4 bg-black-900 ">
  {params.productsdata.map((x) => (

    <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm lg:w-1/4 md:w-1/2 m-4 p-4 w-full">
  <div className="relative rounded-lg h-64 overflow-hidden">
    <img
      className="object-cover object-center h-full w-full"
      src={x.image}
      alt="Product Image"
    />
    <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
      SALE
    </div>
  </div>
  <div className="p-4">
    <h3 className="text-lg font-medium mb-2 overflow-hidden text-ellipsis w-full line-clamp-1">{x.title}</h3>
    <p className="text-gray-600 text-sm mb-4 overflow-hidden text-ellipsis w-full line-clamp-3">
      {x.description}
    </p>
    <div className="flex items-center justify-between">
      <span className="font-bold text-lg">${x.price}</span>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Add to Cart
      </button>
    </div>
  </div>
</div>

  ))}
</div>
</div>

  )
}

export default Cards