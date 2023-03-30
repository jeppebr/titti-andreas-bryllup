import './App.css';

import { Outlet } from 'react-router-dom';

import { NavBar } from './components/nav-bar/nav-bar';

function App() {
  return (
    <>
      <h1 className="flex justify-center  text-4xl m-8 font-satisfy">
        Titti og Andreas' Bryllup
      </h1>

      <NavBar />

      <div className="relative">
        <div className=" absolute bg-home h-96 w-full  bg-cover flex  justify-center items-center">
          <h2 className="font-cedarvilleCursiv text-6xl"> En custom text </h2>
        </div>

        <div className="mt-72 ml-24 absolute h-auto w-8/12  bg-stone-100  shadow-md hover:shadow-lg">
          <h2 className="p-4 font-bold text-lg">en custom text</h2>
          <p className="p-4"> some randome text</p>
          <p className="p-4"> some randome text</p>

          <p className="p-4"> some randome text</p>

          <p className="p-4"> some randome text</p>

          <p className="p-4"> some randome text</p>

          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
