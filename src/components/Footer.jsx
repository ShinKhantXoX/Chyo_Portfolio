import React from 'react'
import { MdMail } from "react-icons/md"
import { BiLogoLinkedinSquare,BiLogoSkype,BiLogoGmail } from "react-icons/bi";


const Footer = () => {
  return (
    <div className=' bg-black text-white py-10'>
        <h3 className=' text-center font-semibold text-xl'>Don't hold back - get in touch with me today!</h3>

        <div className=' flex justify-center mt-10 pb-16'>
            <button className=' font-bold bg-primary rounded-md w-[139px] h-[48px] flex items-center justify-center gap-3'> <MdMail size={20}/>  Hire Me</button>
        </div>

        <div className=' container mx-auto px-5 md:px-20 py-7 flex justify-between items-center '>
            <p>© 2023 All rights reserved.</p>
            <div>
                <ul className=" inline-flex items-center gap-5">
                    <li>
                        <a href="#">
                            <img src="be.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <BiLogoLinkedinSquare size={30}/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <BiLogoSkype size={30}/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <BiLogoGmail size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer