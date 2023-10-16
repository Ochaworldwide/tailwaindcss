import { useState } from 'react'
import './App.css'
import picsman from "./assets/Frame27.png"
import vector from "./assets/Vector.png"
import vector1 from "./assets/Vector \(1).png"
import twitter from "./assets/skill-icons_twitter.png"
import call from './assets/call.png'
import message from './assets/message.png'
import AccordionBasicExample from './components/accordian';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[url(./assets/Rectangle.png)] w-full h-[70rem] pt-36 bg-no-repeat bg-cover">
      <div className="bg-white mx-auto lg:flex border-2 rounded border-sky-500 sm:w-8/12 w-full  box-border  ">
        {/* <img
        src={picsman}
        alt=""
        srcset=""
        className="object-cover object-center sm:w-full hidden lg:block h-[25%]"
      /> */}

        <div className="sm:w-full hidden lg:block h-[50rem] bg-[url(./assets/pp.png)] bg-cover bg-center bg-no-repeat pl-16 ">
          <img src={picsman} alt="" srcset="" className="mt-[30rem] mb-4" />

          <p className="text-left text-white w-[60%] font-bold mb-5 text-sm">
            eu Vestibulum convallis. Nunc risus tincidunt facilisis vitae turpis
            odio risus tincidunt maximus nisi nulla,
          </p>

          <div className="flex mb-5">
            <img
              src={twitter}
              alt=""
              srcset=""
              className="mr-4 cursor-pointer object-contain w-6"
            />
            <img
              src={vector}
              alt=""
              srcset=""
              className="mr-4 cursor-pointer object-contain w-6"
            />
            <img
              src={vector1}
              alt=""
              srcset=""
              className="cursor-pointer object-contain w-6"
            />
          </div>

          <p className="text-white flex mb-2">
            {" "}
            <img
              src={message}
              alt=""
              srcset=""
              className="mr-3 object-contain"
            />
            warmbooks@gmail.com
          </p>

          <p className="text-white flex ">
            <img src={call} alt="" srcset="" className="mr-3 object-contain" />
            +234907 865 4567, +23389 987 456
          </p>
        </div>
        <div className="container pl-10 pr-10 pt-10">
          <h1 className="font-bold text-2xl text-center">Frequently Asked Questions</h1>
          <p className="text-gray-600 text-base font-bold mb-20 text-center">
            These are few questions people frequently ask
          </p>

          <AccordionBasicExample />
        </div>
      </div>
    </div>
  );
}

export default App
