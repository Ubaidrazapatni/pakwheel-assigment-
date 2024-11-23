import React from "react";
import Link from "next/link";
function Navbar() {

  return (

    <div>

      <header className="text-white bg-slate-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">


            <img src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-c4cd16ae34613cc1fa16d7840f34a71e.svg" alt="" />

            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>

            <span className="text-slate-900 ml-3 text-xl">PAKWHEELCOM</span>
          </a>
          <nav className="md:ml-auto flex flex-initial items-center text-base justify-center">


            <ul className=" flex space-x-4">

              <li className="mr-5 hover:text-red-700 items-center"><Link href="/">Used Cars</Link> </li>
              <hr />
              <li className="mr-5 hover:text-red-700 "><Link href="/about">New Cars</Link></li>
              <hr />
              <li className="mr-5  hover:text-red-700"><Link href="/product">Bikes</Link></li>
              <hr />
              <li className="mr-5 hover:text-red-700"><Link href="/contect">Auto Store</Link></li>
              <hr />
              <li className="mr-5 hover:text-red-700"><Link href="/service">Videos</Link></li>
              <hr />
              <li className="mr-5 hover:text-red-700"><Link href="/service">Forums</Link></li>
              <hr />
              <li className="mr-5 hover:text-red-700"><Link href="/service">blog</Link></li>
              <hr />
              <li className="mr-5 hover:text-red-700"><Link href="/service">More</Link></li>

            </ul>

            <hr />
            <hr />

          </nav>


          <hr />

          <div className="ml-6 bg-red-900 p-2 rounded-lg pr-6 pl-6">
            <button>Post An Ad</button>
          </div>
        </div>
      </header>
      <div>

      </div>
    </div>


  )
}

export default Navbar;