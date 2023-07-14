import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Timeline, Grid, Row, Col } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import Footer from "../components/Footer";

const TimelineWithTime = ({ align }) => (
  <Timeline align={align}>
    <Timeline.Item time="November 2022 - Present">
      <p className=" font-semibold text-xl">UX/UI Designer</p>
      <p className=" text-primary font-medium text-lg">Outsourcify</p>
      <p>Bangkok, Thailand</p>
      <ul className=" list-disc ps-5 mt-5">
        <li>
        Transforms the idea into wireframe and then high-quality designs <br />
        with good user interface and user experiences
        </li>
        <li>
        Solves design problems by creating product designs 
        </li>
        <li>
        Understands clients' brief and converts requirements into lo-fi and hi- <br />
        fi designs
        </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item time="June 2022 - October 2022">
    <p className=" font-semibold text-xl">UX/UI Designer</p>
      <p className=" text-primary font-medium text-lg">8xpand</p>
      <p>Singapore (Remote)</p>
      <ul className=" list-disc ps-5 mt-5">
        <li>
            Handles UI/UX projects 
        </li>
        <li>
            Handles designs for digital marketing projects
        </li>
        <li>
            Takes all responsibilities related with design
        </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item time="August 2019 - February 2022">
      <p className=" font-semibold text-xl">Senior UX/UI Designer</p>
      <p className=" text-primary font-medium text-lg">Aceplus Solutions</p>
      <p>Yangon, Myanmar</p>
      <ul className=" list-disc ps-5 mt-5">
        <li>
        Handled UI/UX projects 
        </li>
        <li>
        Managed the tasks associated with UI/UX perspective
        </li>
        <li>
        Considered client's requirements
        </li>
        <li>
        Created screen flows, wireframes, and prototypes
        </li>
        <li>
        Created UI interfaces of web and mobile
        </li>
        <li>
        Took responsibilities all the tasks related with design during and after final product is delivered
        </li>
      </ul>
    </Timeline.Item>
    <Timeline.Item time="August 2018 - May 2019">
    <p className=" font-semibold text-xl">Senior Designer</p>
      <p className=" text-primary font-medium text-lg">Apexand International</p>
      <p>Yangon, Myanmar</p>
      <ul className=" list-disc ps-5 mt-5">
        <li>Handled UI/UX designs for development of mobile app and website</li>
        <li>Created designs for events</li>
        <li>Created print-ads designs</li>
        <li>Created social media designs</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item time="September 2017 - July 2018">
    <p className=" font-semibold text-xl">Product Operations Executive</p>
      <p className=" text-primary font-medium text-lg">2C2P Myanmar</p>
      <p>Yangon, Myanmar</p>
      <ul className=" list-disc ps-5 mt-5">
        <li>Took responsibility for overall digital products </li>
        <li>Gave trainings to customers and juniors</li>
        <li>Created graphic designs for social media</li>
        <li>Created print-ads designs</li>
        <li>Supported customers of digital products</li>
      </ul>
    </Timeline.Item>
    <Timeline.Item time="May 2017 - August 2017">
    <p className=" font-semibold text-xl">Product Operations Intern</p>
      <p className=" text-primary font-medium text-lg">2C2P Myanmar</p>
      <p>Yangon, Myanmar</p>
      <ul className=" list-disc ps-5 mt-5">
        <li>Learned various types of operations of digital products </li>
        <li>Assisted customer services</li>
        <li>Assisted content marketing</li>
        <li>Assisted UI/UX and graphic design</li>
      </ul>
    </Timeline.Item>
  </Timeline>
);

const About = () => {
  return (
    <>
      <div className=" bg-black">
        <section className=" container mx-auto px-5 md:px-20 py-7">
          <div className=" min-h-screen text-white">
            <h1 className=" pt-10 text-center text-2xl font-bold">
              My <span className=" bg-primary px-3 py-2">Pathway</span>
            </h1>

            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className=" mt-10">
                <img
                  src="about.png"
                  className=" w-full h-[300px] lg:w-[503px] md:h-[624px] m-0"
                  alt=""
                />
              </div>
              <div className=" mt-10">
                <p className=" text-xl font-medium">
                  My full name is Aye Chyo Chyo Zin. I am Burmese <br />
                  and I was born and raised in Myanmar. I was <br />
                  graduated from Univeristy of Information Technology <br />
                  (UIT) with Business Information Systems specialization <br />
                  in 2017. I moved to Bangkok, Thailand in October <br />
                  2022 and I am currently working as an UX/UI <br />
                  Designer at Outsourcify based in Bangkok.
                </p>
                <br />
                <p className=" text-xl font-medium">
                  I have strong experiences of working on various kinds <br />
                  of projects for different types of clients as well as <br />
                  being a member of the teams which includes <br />
                  teammates of different nationalities since I have been <br />
                  working in the companies which provide effective IT <br />
                  solutions to businesses.
                </p>
                <br />
                <p className=" text-xl font-medium">
                  I am eager to explore new skills and opportunities to <br />
                  step up my career. Moreover, I would like to utilize my <br />
                  competences and experiences I have learned <br />
                  throughout my career journey by expanding my <br />
                  professional skill set.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className=" bg-secBlack">
        <section className=" container mx-auto px-5 md:px-20 py-7">
          <div className=" text-white">
            <h1 className=" pt-10 text-center text-2xl font-bold">
              My Professional
              <span className=" bg-primary px-3 py-2">Proficiencies</span>
            </h1>

            <div className=" grid grid-cols-3 lg:grid-cols-3 mt-10">
              <div className=" w-[188px] h-[188px] rounded bg-black">
                <img className=" block mx-auto pt-5" src="figma.svg" alt="" />
                <p className=" text-center font-semibold mt-5">Figma</p>
                <div className=" flex items-center justify-between px-10 mt-5 text-yellow-400">
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiOutlineStar size={20} />
                </div>
              </div>

              <div className=" w-[188px] h-[188px] rounded bg-black">
                <img
                  className=" block mx-auto pt-5"
                  src="photoshop.svg"
                  alt=""
                />
                <p className=" text-center font-semibold mt-5">
                  Adobe Photoshop
                </p>
                <div className=" flex items-center justify-between px-10 mt-5 text-yellow-400">
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiOutlineStar size={20} />
                </div>
              </div>

              <div className=" w-[188px] h-[188px] rounded bg-black">
                <img className=" block mx-auto pt-5" src="xd.svg" alt="" />
                <p className=" text-center font-semibold mt-5">Adobe XD</p>
                <div className=" flex items-center justify-between px-10 mt-5 text-yellow-400">
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiOutlineStar size={20} />
                  <AiOutlineStar size={20} />
                </div>
              </div>

              <div className=" w-[188px] h-[188px] rounded bg-black md:mt-5">
                <img className=" block mx-auto pt-5" src="ai.svg" alt="" />
                <p className=" text-center font-semibold mt-5">
                  Adobe Illustrator
                </p>
                <div className=" flex items-center justify-between px-10 mt-5 text-yellow-400">
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiOutlineStar size={20} />
                  <AiOutlineStar size={20} />
                </div>
              </div>

              <div className=" w-[188px] h-[188px] rounded bg-black md:mt-5">
                <img className=" block mx-auto pt-5" src="pr.svg" alt="" />
                <p className=" text-center font-semibold mt-5">
                  Adobe Premiere Pro
                </p>
                <div className=" flex items-center justify-between px-10 mt-5 text-yellow-400">
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiOutlineStar size={20} />
                  <AiOutlineStar size={20} />
                  <AiOutlineStar size={20} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" container mx-auto px-5 md:px-20 pt-5 pb-14">
          <div className=" text-white">
            <h1 className=" pt-10 text-center text-2xl font-bold">
              My Interpersonal
              <span className=" bg-primary px-3 py-2">Skills</span>
            </h1>

            <div className=" grid grid-cols-3 lg:grid-cols-3 mt-10">
              <div className=" w-[188px] h-[188px] rounded bg-black">
                <img
                  className=" block mx-auto pt-5"
                  src="communication.svg"
                  alt=""
                />
                <p className=" text-center font-semibold mt-5">Communication</p>
                <div className=" flex items-center justify-between px-10 mt-5 text-yellow-400">
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiOutlineStar size={20} />
                </div>
              </div>

              <div className=" w-[188px] h-[188px] rounded bg-black">
                <img className=" block mx-auto pt-5" src="flex.svg" alt="" />
                <p className=" text-center font-semibold mt-5">Flexibility</p>
                <div className=" flex items-center justify-between px-10 mt-5 text-yellow-400">
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiOutlineStar size={20} />
                </div>
              </div>

              <div className=" w-[188px] h-[188px] rounded bg-black">
                <img className=" block mx-auto pt-5" src="time.svg" alt="" />
                <p className=" text-center font-semibold mt-5">
                  Time Management
                </p>
                <div className=" flex items-center justify-between px-10 mt-5 text-yellow-400">
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiOutlineStar size={20} />
                </div>
              </div>

              <div className=" w-[188px] h-[188px] rounded bg-black md:mt-5">
                <img
                  className=" block mx-auto pt-5"
                  src="leadership.svg"
                  alt=""
                />
                <p className=" text-center font-semibold mt-5">Leadership</p>
                <div className=" flex items-center justify-between px-10 mt-5 text-yellow-400">
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiOutlineStar size={20} />
                  <AiOutlineStar size={20} />
                </div>
              </div>

              <div className=" w-[188px] h-[188px] rounded bg-black md:mt-5">
                <img
                  className=" block mx-auto pt-5"
                  src="creativity.svg"
                  alt=""
                />
                <p className=" text-center font-semibold mt-5">Creativity</p>
                <div className=" flex items-center justify-between px-10 mt-5 text-yellow-400">
                  <AiFillStar size={20} />
                  <AiFillStar size={20} />
                  <AiOutlineStar size={20} />
                  <AiOutlineStar size={20} />
                  <AiOutlineStar size={20} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className=" bg-black">
        <section className=" container mx-auto px-5 md:px-20 py-7">
          <div className=" min-h-screen text-white">
            <h1 className=" pt-10 text-center text-2xl font-bold">
              My Occupational{" "}
              <span className=" bg-primary px-3 py-2">Odyssey</span>
            </h1>


            <div className=" py-10">

                <TimelineWithTime align="left" />

            </div>

          </div>
        </section>
      </div>

      <div className=" bg-secBlack">
        <section className=" container mx-auto px-5 md:px-20 py-7">
            <div className=" text-white">
            <h1 className=" pt-10 text-center text-2xl font-bold">
              My Degree
              <span className=" bg-primary px-3 py-2">Showcase</span>
            </h1>

            <div className=" grid grid-cols-1 lg:grid-cols-2 mt-10">
                <div className=" w-auto lg:w-[508px] h-[200px] rounded bg-black p-7">
                    <h1 className=" text-2xl font-medium">B.C.Sc (Business Information Systems)</h1>
                    <p className=" text-primary text-xl">University of Information Technology</p>
                    <p className=" text-lg">Duration : 2012 - 2017</p>
                    <p className=" text-lg">Specialization : Business Information Systems</p>
                </div>

                <div className=" w-auto lg:w-[508px] h-[200px] rounded bg-black p-7 md:mt-5">
                    <h1 className=" text-2xl font-medium">Diploma in Business Management</h1>
                    <p className=" text-primary text-xl">STI Myanmar University</p>
                    <p className=" text-lg">Duration : 2015 - 2017</p>
                    <p className=" text-lg">Specialization : Business Management</p>
                </div>
            </div>

            </div>
        </section>

        <section className=" container mx-auto px-5 md:px-20 pt-7 pb-10">
            <div className=" text-white">
            <h1 className=" pt-10 text-center text-2xl font-bold">
            My Career-Enhancing
              <span className=" bg-primary px-3 py-2">Certificates</span>
            </h1>

            <div className=" grid grid-cols-1 lg:grid-cols-2 mt-10">
                <div className=" w-auto lg:w-[508px] h-[132px] rounded bg-black p-7">
                    <h1 className=" text-2xl font-medium">Google UX Design Professional Certificate</h1>
                    <p className=" text-primary text-xl">Google | Coursea</p>
                </div>

                <div className=" w-auto lg:w-[508px] h-[132px] rounded bg-black p-7 md:mt-5">
                    <h1 className=" text-2xl font-medium">Certificate in Professional Graphic Design</h1>
                    <p className=" text-primary text-xl">The World Design Institute</p>
                </div>
            </div>

            </div>
        </section>
      </div>

      <Footer/>
    </>
  );
};

export default About;
