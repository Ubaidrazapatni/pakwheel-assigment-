import React from "react";
import Link from "next/link";
export default function Thankyou(){
return(

<div  className="bg-gray-100 h-[500px]">
    <div className="text-5xl text-blue-800 font-extrabold justify-center items-center mt-[180px] pl-[310px]">

        <h1>Thank you for Your Purchase</h1>
     
       

    </div>

    <div className="text-2xl text-red-800 font-bold items-center mt-[120px] pl-[260px]">

        <p>Your order has been successfully placed. We appreciate your trust in us!</p>


    </div >

    <div  className="text-2xl text-red-800 font-bold items-center mt-3 pl-[310px]">

         <p>You will receive an order confirmation email shortly with details.</p>

    </div>

     <div>

        <button className="bg-blue-800 text-white rounded-lg text-xl mt-12 ml-[620px] h-10 w-24 item-center"><Link href="navbar">Back</Link></button>

     </div>


    </div>

);

};

