import "./App.css";
import Porfile from "./assets/pic yousaf.jpg";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if(window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  return (
    <div className="relative max-w-4xl m-auto">
      <header className={`${scrolling ? 'border-b border-gray-900' : ''}  fixed left-0 right-0 top-0 z-20`} id="home">
        <div className="container max-w-4xl px-4 py-6 m-auto bg-black">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h1 className="text-2xl font-bold">Yousaf Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a href="#projects" className="text-gray-400 cursor-pointer hover:text-white">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-gray-400 cursor-pointer hover:text-white">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#coursework" className="text-gray-400 cursor-pointer hover:text-white">
                    Course Work
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section>
          <div className="container flex flex-col gap-6 px-4 pt-12 pb-12 m-auto text-center sm:pt-20 sm:flex-row sm:text-left">
            <div>
              <h2 className="text-4xl font-bold">Hello, I'm Yousaf,</h2>
              <div>
                <h2 className="mt-1 text-4xl font-bold gradiant-text">frontend developer</h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400">
                  Former digital-marketing specialist, seeking to apply
                  competent development skills with focus on collaboration,
                  communication, and passion
                </p>
                <button className="px-8 py-5 mt-5 rounded-full shadow-md shadow-gray-500 bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                  Download resume
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./smal.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                <img src={Porfile} className="relative z-10 w-[280px] m-auto sm:w-[600px]" />
              </div>
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <div className="container px-4 m-auto sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col gap-10 sm:flex-row mt-11">
              <div className="flex-1 p-5 border border-gray-500 rounded-md">
                <img src={Project1} className="w-full h-auto" />
                <h3 className="mt-8 text-2xl font-semibold">
                  Furniture store landing page
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  Responsive HTML/CSS/javascript/react.js for online furniture store.
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 py-3 text-sm rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 py-3 text-sm border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="flex-1 p-5 border border-gray-500 rounded-md">
                <img src={Project2} className="w-full h-auto" />
                <h3 className="mt-8 text-2xl font-semibold">
                  Designer furniture store landing page
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  Responsive  Website using HTML/CSS/javaScript , React.js and Tailwind css
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 py-3 text-sm rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 py-3 text-sm border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 sm:flex-row mt-11 " >
              <div className="flex-1 p-5 border border-gray-500 rounded-md">
                <img src={Project3} className="w-full h-52" />
                <h3 className="mt-8 text-2xl font-semibold">
                  Landing page for front-end developer
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                Responsive  Website using HTML/CSS/javaScript , React.js and Tailwind css
                </p>
                <div className="flex gap-4 mt-12">
                  <button className="flex-1 py-3 text-sm rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 py-3 text-sm border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="flex-1 p-5 border border-gray-500 rounded-md">
                <img src={Project4} className="w-full h-auto" />
                <h3 className="mt-8 text-2xl font-semibold">
                  Website redesign for The Venus project
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                Responsive  Website using HTML/CSS/javaScript , React.js and Tailwind css
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 py-3 text-sm rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 py-3 text-sm border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technoglies section */}
        <section className="py-10" id="technologies">
          <div className="container px-4 m-auto">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
            <div>
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold">HTML , CSS</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="block w-full h-2 mt-2 rounded-md bg-gradient-to-t from-blue-500 to-cyan-500" />
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold">Tailwind CSS</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="block w-full h-2 mt-2 rounded-md bg-gradient-to-t from-blue-500 to-cyan-500" />
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold">
                    JavaScript
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div> <span className="block w-full h-2 mt-2 rounded-md bg-gradient-to-t from-blue-500 to-cyan-500" />
              </div>


              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold">
                    React.js
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="block w-full h-2 mt-2 rounded-md bg-gradient-to-t from-blue-500 to-cyan-500" />
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold">C/C++</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="block w-full h-2 mt-2 rounded-md bg-gradient-to-t from-blue-500 to-cyan-500" />
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold">My Sql</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
           
                <span className="w-[45%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
          </div>
        </section>
        {/* Additional skills section */}
        <section>
          <div className="container px-4 m-auto py-14">
            <h2 className="text-2xl font-semibold">
             Course Work
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="relative font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute left-5">
                  Web Development
                </p>
              </div>
              <div>
                <p className="relative font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute left-5">
                 App Development
                </p>
              </div>
              <div>
                <p className="relative font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute left-5">
                Artificial Intelligent
                </p>
              </div>
              <div>
                <p className="relative font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute left-5">
                Data Structure and Algorithm
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="relative font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute left-5">
                  Linear Algebra
                </p>
              </div>
              
             
            </div>
          </div>
        </section>
       
      </main>
      <footer>
        <div className="container flex justify-between px-4 py-6 m-auto">
          <div>
            <p className="text-sm text-gray-300">Copyright @ 2024</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a>
                  <img src={Facebook} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={Instagram} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {
        scrolling && (
          <button className="fixed bottom-0 block w-24 right-8" onClick={() => {
            window.scrollTo(0,0);
          }}>
            <img src={ArrowDown} />
          </button>
        )
      }
    </div>
  );
}

export default App;
