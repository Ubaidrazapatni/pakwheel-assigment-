import React from "react";
import Link from "next/link";
function Card() {
     return (

          <div className=" bg-slate-100 h-[600px] w-full">

               <div className="text-black text-3xl text-left relative font-bold justify-center mt-25 pl-20 pr-6 pt-4" >

                    <h1>Featured New Cars</h1>

               </div>

               <div className="container flex flex-row mt-20 p-4 ml-10 gap-2 justify-between items-center">



                    <div className="bg-slate-50 h-[300px] w-[300px]">
                         <div className="h-[100px] w-96" >

                              <img src={"Corolla-Cars-.jpg"} alt="w-82 h-48" />


                              <div className="mt-4 items-center justify-center pl-20">

                                   <h4 className="text-blue-900 justify-center font-semibold pr-4"> <Link href="carolla">Toyota Corolla </Link></h4>
                                   <h4 className="text-green-700">PKR 59.7 - 75.5 lacs</h4>

                              </div>



                         </div>
                    </div>

                    <div className="bg-slate-50 h-[300px] w-[300px]">



                         <div className=" h-80 w-68">
                              <img src={"Suzuki_Alto_-_PNG.png"} alt="w-78 h-42" />

                              <div className="mt-4 items-center justify-center pl-20">

                                   <h4 className="text-blue-900 justify-center font-semibold pr-4"><Link href="alto" >Suzuki Alto</Link></h4>
                                   <h4 className="text-green-700 ">PKR 23.3 - 30.5 lacs</h4>

                              </div>


                         </div>
                    </div>

                    <div className="bg-slate-50 h-[300px] w-[300px]">


                         <div className="h-[100px] w-96">
                              <img src={"HondaCity.jpg"} alt="w-82 h-48" />

                              <div className="mt-4 items-center justify-center pl-20">

                                   <h4 className="text-blue-900 justify-center font-semibold pr-4"> <Link href="city" > Honda City </Link></h4>
                                   <h4 className="text-green-700 ">PKR 46.5 - 58.5 lacs</h4>

                              </div>


                         </div>
                    </div>

                    <div className="bg-slate-50 h-[300px] w-[300px] mr-6" >

                         <div className="h-[100px] w-96">
                              <img src={"Civic.jpg"} alt="w-82 h-48" />

                              <div className="mt-4 items-center justify-center pl-20">

                                   <h4 className="text-blue-900 justify-center font-semibold pr-4"> <Link href="civic" > Honda Civik </Link></h4>
                                   <h4 className="text-green-700 ">PKR 86.6 - 99.0 lacs</h4>

                              </div>



                         </div>

                    </div>

               </div>

          </div>




     );

};

export default Card;