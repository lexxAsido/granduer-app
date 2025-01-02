"use client"
import Link from 'next/link'
import React from 'react'
import { FaCopyright, FaInstagram, FaWhatsapp, FaSquareXTwitter, FaTwitter, FaTwitterSquare } from 'react-icons/fa'
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
        <main className='flex max-lg:flex-col items-center justify-center mb-10 gap-6 '>

          
                <div className=" flex max-md:flex-col max-md:text-sm items-center gap-4">
                <h3 className='italic max-md:text-sm'>Follow Us On Social Media</h3>
                <div className='flex gap-5 flex-wrap max-md:gap-1'>
                    <Link href="https://www.instagram.com">
                        <div className="icon-container text-[#e6399b]">
                            <FaInstagram />
                        </div>
                    </Link>
                    <Link href="https://www.x.com">
                        <div className="icon-container text-blue hover:text-white">
                            <BsTwitterX />
                        </div>
                    </Link>
                    <Link href="https://www.whatsapp.com">
                        <div className="icon-container text-[#26e600]">
                            <FaWhatsapp />
                        </div>
                    </Link>
                </div>
                </div>
            <div className="flex items-center  font-semibold gap-2 max-md:text-sm">
                <FaCopyright className="lg:text-2xl max-md:text-sm max-md:ml-3" />
                <h3 className='max-lg:text-sm'>@2025 Grandeursmart Limited. All Rights Reserved</h3>
            </div>
            

<style jsx>{`
    .icon-container {
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        font-size: 1rem;
        border: 4px solid;
      border-radius: 0.5rem;
      overflow: hidden;
      transition: transform 0.5s ease, box-shadow 0.5s ease;
      cursor: pointer;
    }
  
    .icon-container::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      transform: scaleY(0);
      transform-origin: bottom;
      transition: transform 0.5s ease;
      z-index: -1;
      }
      
      .icon-container:hover {
        transform: scale(1.2);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
        
        .icon-container:hover::before {
            transform: scaleY(1);
            }
            
            .icon-container svg {
                z-index: 1;
                }
                
                
                // @media (max-width: 768px) {
                //     .icon-container {
                //         width: 2.5rem;
                //         height: 2.5rem;
                //         font-size: 1.5rem;
                //         border-width: 2px;
                //         }
                        
                //         .icon-container:hover {
                //             transform: scale(1.1); 
                //             }
                //             }
                            `}</style>
                            </main>
    )
}

export default Footer;