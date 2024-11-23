
import React from "react";
import Link from "next/link";
export default function Carolla() {
    return (

        <div className="bg-gray-100 h-full w-full">

            <div className="container flex h-[650px] w-[880px] ml-12">

                <div className="bg-slate-200 h-[300px] w-[600px] mt-36 ml-80">

                    <img src="carolla copy.jpg" alt="w-[100px] h-[100px]" />

                    <div className="text-blue-800 justify-center text-xl font-bold relative mt-6">

                        <h1>Toyota Corolla 2024 Price in Pakistan, Image & Reviews</h1>

                    </div>

                    <div className="text-green-600 justify-center items-center text-lg font-semibold pl-[120px]">

                        <h3>PKR 59.7 - 75.5 lacs (*Ex-Factory Price)</h3>

                    </div>

                    <div className="text-blue-900  justify-center items-center text-xl font-semibold mt-12">

                        <h3>Toyota Corolla 2024 Overview</h3>

                        <p className="text-black text-sm mt-3 ">Toyota Corolla 2024 is a series of compact sedans produced by the Japanese 
                            manufacturer Toyota. With its comfort, sleek design, and good performance,
                            it has gained a huge following around the world. Introduced in 1966, it has
                            become one of the best-selling cars worldwide The latest generation available
                            in Pakistan is the 11th generation, with the 12th generation being introduced
                            globally but not yet available in Pakistan.</p>


                    </div>

                    <div className="bg-blue-700 mt-12 rounded-md h-9 w-[120px] " >

                        <button className="text-white text-center text-lg ml-4 mt-1"> <Link href="foam" > Order Now </Link></button>


                    </div>


                </div>



            </div>



        </div>




    );

};