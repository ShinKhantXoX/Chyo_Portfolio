import React from 'react'
import { MdMail } from "react-icons/md";
import Footer from '../components/Footer';

  const items = [
    {
      path: 'case-cover-1.png',
      desc: 'Bouquets For You | Bouquets Ordering Website Case Study',
      category: 'E-Commerce',
      env: 'Website'
    },
    {
      path: 'case-cover-2.png',
      desc: 'We Track | Crimes Tracker App Case Study',
      category: 'Social Good',
      env: 'Mobile Application'
    },
    {
      path: 'case-cover-3.png',
      desc: 'Little Kitty | Cat Accessories E-Commerce App Case Study',
      category: 'E-Commerce',
      env: 'Moile Application'
    },
    {
      path: 'case-cover-4.png',
      desc: 'Aflac | Associate Matching',
      category: 'E-Commerce',
      env: 'Website'
    },
    {
      path: 'case-cover-5.png',
      desc: 'AIA Cambodia | AIA Active App',
      category: 'Health',
      env: 'Mobile Application'
    },
    {
      path: 'case-cover-6.png',
      desc: 'Aflac | AI Learning System',
      category: 'E-Commerce',
      env: 'Mobile Application'
    },
    {
      path: 'case-cover-7.png',
      desc: 'AIA Myanmar | MyanX App',
      category: 'Insurance',
      env: 'Mobile Application'
    },
    {
      path: 'case-cover-8.png',
      desc: 'Myanma Insurance | Claim App',
      category: 'Insurance',
      env: 'Mobile Application'
    },
    {
      path: 'case-cover-9.png',
      desc: 'Colors Rainbow | Magazine App',
      category: 'Magazines',
      env: 'Mobile Application'
    },
    {
      path: 'case-cover-10.png',
      desc: 'ICAP | HIV Clinical Job Aids App',
      category: 'Health',
      env: 'Mobile Application'
    },
    {
      path: 'case-cover-11.png',
      desc: 'Myanma Insurance | Claim App',
      category: 'Insurance',
      env: 'Mobile Application'
    },
    {
      path: 'case-cover-12.png',
      desc: 'FNI Insurance | Insurance Website',
      category: 'Insurance',
      env: 'Website'
    },
    {
      path: 'case-cover-13.png',
      desc: 'Nail Polish Advertising Design',
      category: 'Ads Desgin',
      env: 'Social Media Desgin'
    },
    {
      path: 'case-cover-14.png',
      desc: 'Freshgora | Backdrop Design',
      category: 'Backdrop',
      env: 'Event Desgin'
    },
    {
      path: 'case-cover-15.png',
      desc: 'Heartbeat Typography Design',
      category: 'Typography Design',
    },
    {
      path: 'case-cover-16.png',
      desc: 'Airline Advertising Design',
      category: 'Ads Desgin',
      env: 'Social Media Desgin'
    },
    {
      path: 'case-cover-17.png',
      desc: 'Freshgora | Photo Booth Design',
      category: 'Photo Booth',
      env: 'Event Desgin'
    },
    {
      path: 'case-cover-18.png',
      desc: 'Freshgora | Flyer Design',
      category: 'E-Commerce',
      env: 'Mobile Application'
    },
    {
      path: 'case-cover-19.png',
      desc: 'Beauty Typography',
      category: 'Typography Design',
    },
    {
      path: 'case-cover-20.png',
      desc: 'Happy New Year Illustration Design',
      category: 'Perspective',
      env: 'Illustration Design'
    },
    {
      path: 'case-cover-21.png',
      desc: 'Colors Rainbow | Magazine App',
      category: 'Flyer',
      env: 'Print Ads Design'
    },
  ]

const Work = () => {
  return (
    <div className=' min-h-screen bg-black'>
    
    <section className=' w-[300px] md:w-[800px] mx-auto md:pt-10 text-white'>
        <img className=' mx-auto' src="profile.png" alt="" />
        <p className=' block text-xl text-center py-10'>Hello, I am Chyo!</p>
        <p className=' w-[300px] md:w-[579px] text-2xl mx-auto'>An experienced <span className=' bg-primary px-3 py-2'>UX/UI designer</span> who is passionate 
        <span className=' text-center block py-5'>about solving design challenges</span>
        <span className=' block text-center'>of digital products</span>
        </p>

        <div className=' flex justify-center mt-5 pb-16'>
            <button className=' font-bold bg-primary rounded-md w-[139px] h-[48px] flex items-center justify-center gap-3'> <MdMail size={20}/>  Hire Me</button>
        </div>
    </section>

    <section className=' min-h-screen bg-secBlack text-white py-10'>
          <h1 className=' mt-10 text-center text-2xl font-bold'>My Past <span className=' bg-primary px-3 py-2'>Endeavors</span></h1>
          <div className=' w-[300px] mx-auto my-7 flex justify-between items-center'>
            <p className=' text-primary font-bold'>UI/UX
            <span className=' block bg-primary w-[15px] h-1'></span>
            </p>
            <p>Graphics</p>
          </div>

          <div className=' container mx-auto px-5 md:px-20 py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-14'>
            {items?.map((item,index) => {
              return (
                <div key={index} className=' md:w-[300px] w-[331px] h-[376px] rounded-md bg-black'>
                  <img src={item.path} alt="" />
                  <p className=' p-5 font-bold'>{item.desc}</p>
                  <div className=' px-5 flex items-center gap-5'>
                    <p>{item.category}</p>
                    {item?.env && <span className=' block w-2 h-2 rounded-full bg-primary'></span>}
                    <p>{item?.env}</p>
                  </div>
                </div>
              )
            })}
          </div>

    </section>
    
    <Footer/>

    </div>
  )
}

export default Work