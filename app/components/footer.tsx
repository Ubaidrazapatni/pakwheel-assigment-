import React from 'react';
import Link from 'next/link';
// import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "Nextjs-icons/fa"

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
                        <p className="text-gray-400 mb-4">
                            PakWheels is the largest online marketplace for buying and selling cars, bikes, and accessories in Pakistan.
                        </p>
                        <p className="text-gray-400">
                            For inquiries, email us at: <br />
                            <Link href="mailto:info@pakwheels.com" className="text-blue-500 hover:underline">info@pakwheels.com</Link>
                        </p>
                    </div>

                    <div className="pl-[190px]">
                        <h2 className="text-white text-lg font-semibold mb-4 ">Quick Links</h2>
                        <ul>
                            <li className="mb-2">
                                <Link href="/about">
                                About
                                    {/* <a className="text-gray-400 hover:text-white">About</a> */}
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/contact">
                                Contect us
                                    {/* <a className="text-gray-400 hover:text-white">Contact Us</a> */}
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/sell-your-car"> Your Car
                                    {/* <a className="text-gray-400 hover:text-white">Sell Your Car</a> */}
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/privacy-policy">Privacy Policy
                                    {/* <a className="text-gray-400 hover:text-white">Privacy Policy</a> */}
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/terms">Terms & Conditions
                                    {/* <a className="text-gray-400 hover:text-white">Terms & Conditions</a> */}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-white text-lg font-semibold mb-4 pl-[200px]">Follow Us</h2>
                        <div className="flex flex-col space-x-4 pl-[200px]">
                            
                            <Link href="https://facebook.com" className="text-gray-400 hover:text-white mt-0 pl-2">Facebook</Link>
                                {/* <FaFacebook size={24} /> */}
                            
                            <Link href="https://twitter.com" className="text-gray-400 hover:text-white mt-3 pr-8">Twitter</Link>
                                {/* <FaTwitter size={24} /> */}
                            
                            <Link href="https://instagram.com" className="text-gray-400 hover:text-white mt-3">Instagram</Link>
                                {/* <FaInstagram size={24} /> */}
                            
                            <Link href="https://youtube.com" className="text-gray-400 hover:text-white mt-3">Youtube</Link>
                                {/* <FaYoutube size={24} /> */}
                        </div>
                    </div>
                </div>
                <hr className="my-8 border-gray-700" />
                <p className="text-center text-gray-500">
                    &copy; {new Date().getFullYear()} PakWheels. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer