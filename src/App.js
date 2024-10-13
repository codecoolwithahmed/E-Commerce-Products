// import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './layout/header';
import Hero from './layout/Hero';

function App() {

  const [apiData , apiDataFunction] = useState([])

  const getApiData = ()=>{
    axios
    .get('https://fakestoreapi.com/products')
    .then((res) =>{
      console.log(res.data);
      apiDataFunction([...res.data])
      // console.log(apiData);
      
    })
    .catch((err) =>{
      console.log(err);
      
    })
  }
// const data = apiData.map((x) =>{
  // console.log(x);
  
// })
// console.log(data);

  // fetch()
  //   .then((res) =>{
  //     console.log(res);
      
  //   })
  //   .catch((err) =>{
  //     console.log(err);
      
  //   })

  useEffect( () =>{
    getApiData()
  },[])

  return (
    <div>
      {/* <button onClick={getApiData}>Click</button> */}

      <Header />
      <Hero />
      <Cards  productsdata = {apiData}/>
      
      {/* <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {apiData.map((x, i) => {
            return(
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={x.id} >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={x.image}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {x.category}
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  {x.title}
                </h2>
                <p className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {x.description}
                </p>
                <p className="mt-1">{x.price}</p>
              </div>
            </div>
            )
          })}


        </div>
      </div>
    </section> */}
    </div>
  );
}

export default App;
