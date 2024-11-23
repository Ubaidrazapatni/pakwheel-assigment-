
import Link from "next/link"
import React from "react"
export default function City (){
return(

    <div className="bg-gray-100 h-full w-full">

    <div className="container flex h-[650px] w-[880px] ml-12">

        <div className="bg-slate-200 h-[300px] w-[600px] mt-36 ml-80">

            <img src="city copy.jpg" alt="w-[100px] h-[100px]" />

            <div className="text-blue-800 justify-center text-xl font-bold relative mt-6">

                <h1>Honda City 2024 Price in Pakistan, Images, Reviews</h1>

            </div>

            <div className="text-green-600 justify-center items-center text-lg font-semibold pl-[100px]">

                <h3>PKR 46.5 - 58.5 lacs (*Ex-Factory Price)</h3>

            </div>

            <div className="text-blue-900  justify-center items-center text-xl font-semibold mt-12">

                <h3>Honda City 2024 Overview</h3>

                <p className="text-black text-sm mt-3 ">The Honda City 2024 is a subcompact sedan that has been manufactured
                    by the Japanese automobile manufacturer Honda since 1981. Initially,
                    it was a 3-door hatchback/2-door convertible launched only in selected markets.
                    The second-generation Honda City was launched in 1986, but the City nameplate
                    was discontinued in 1994 and replaced by another model.</p>


            </div>

            <div className="bg-blue-700 mt-12 rounded-md h-9 w-[120px] " >

                <button className="text-white text-center text-lg ml-4 mt-1"> <Link href="foam"> Order Now </Link></button>


            </div>


        </div>



    </div>


   


</div>




);

}; 