import Link from "next/link";
import React from "react";
export default function Foam() {

    return (


        <div className="bg-slate-100 h-[500px]"> 

            <h1 className=" mt-24 text-5xl font-extrabold text-center  ">
                Enter your details</h1>

            <form className="mt-10 flex gap-7 justify-center items-center flex-col border">


                <input type="name" className=" mt-3 p-3 rounded-2xl w-1/3 border border-black" placeholder="Enter our Name" />
                <input type="number" className=" p-3 rounded-2xl w-1/3 border border-black" placeholder="Enter your CNIC" />
                <input type="name" className="p-3 rounded-2xl w-1/3 border border-black" placeholder="Enter your Address" />
                <input type="number" className="p-3 rounded-2xl w-1/3 border border-black" placeholder="Enter your Phone" />

                <button className=" py-3 px-6 rounded-xl text-lg h-12 
                bg-blue-800 text-white" ><Link href="thankyou"> place your order </Link> </button>





            </form>


            

        </div>






    );





};