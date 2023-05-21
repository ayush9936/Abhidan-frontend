import React from "react";
import {Link} from "react-router-dom"
import CountUp from "react-countup"; 
import img4 from "./images/img4.png";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";


const AboutUs = () => {
  const images = [
    {
      src: "https://picsum.photos/id/1015/800/400",
      alt: "Donation Image 1",
    },
    {
      src: "https://picsum.photos/id/1016/800/400",
      alt: "Donation Image 2",
    },
    {
      src: "https://picsum.photos/id/1018/800/400",
      alt: "Donation Image 3",
    },
  ];

  const stats = [
    {
      label: "NGOs Collaborated",
      value: 28,
      icon: "fas fa-users",
    },
    {
      label: "Funds Raised",
      value: 785000,
      icon: "fas fa-hand-holding-usd",
    },
    {
      label: "People Helped",
      value: 31000,
      icon: "fas fa-hands-helping",
    },
  ];

  const team = [
    {
      name: "Ashish Soni",
      src: "https://randomuser.me/api/portraits/men/1.jpg",
      desc: "MERN full Stack Developer",
    },
    {
      name: "Ayush Dubey",
      src: "https://randomuser.me/api/portraits/women/2.jpg",
      desc: "MERN full Stack Developer"
    },
    {
      name: "Aman Gupta",
      src: "https://randomuser.me/api/portraits/men/3.jpg",
      desc: "Team Leader",
    },
    {
      name: "Arpit Tiwari",
      src: "https://randomuser.me/api/portraits/women/4.jpg",
      desc: "Content Writer",
    },
    {
      name: "Anurag Yadav",
      src: "https://randomuser.me/api/portraits/women/4.jpg",
      desc: "Content Writer",
    },
  ];

  const ngos = [
    {
      id: 1,
      name: "Charity 1",
      logo: "https://dummyimage.com/100x100/ccc/000&text=C1",
    },
    {
      id: 2,
      name: "Charity 2",
      logo: "https://dummyimage.com/100x100/ccc/000&text=C2",
    },
    {
      id: 3,
      name: "Charity 3",
      logo: "https://dummyimage.com/100x100/ccc/000&text=C3",
    },
  ];

	return (
    <>
      <div className="  overflow-x-hidden px-3 mb-4 ">
        {/* Our Purpose */}
        <section className="w-full">
          <div className="bg-[#f8f9fa] grid grid-cols-1 mt-5 space-y-4 py-3  justify-center md:grid-cols-2 gap-x-4">
            <div className="text-center pt-5 flex flex-col items-center ">
              <h2 className="text-2xl font-semibold font-inter text-black ">
                Our Purpose
              </h2>
              <div className="w-[100px] h-1 rounded-md bg-yellow-400 mt-1 mb-3 "></div>
              <p className="w-full  text-xl subpixel-antialiased px-4 py-2 text-justify sm:mt-5 leading-relaxed">
                Our purpose is to bring all the NGOs on single platform to
                enhance communication between the NGO and the doner. there are
                many people living in scarcity of resources food, clothes,
                books, electronics etc. so, it is an approach with socialistic
                ideals to help who are needy by those who have resources in
                excess. In our households we have multiple items and gadgets
                which is of no use for us neither has good resale value like old
                used smartphone, or Telivision because you have shifted to LED
                or Smart TV. But these could be useful for others who are
                rebuilding thier home after any environmental disaster.
              </p>
            </div>
            <div>
              <img
                src="https://s35422.pcdn.co/wp-content/uploads/2021/05/7.5.21_WhyAmIHere-1024x683-1.jpg"
                alt="Our Purpose"
                className="rounded-lg "
              />
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="w-full">
          <div className="bg-[#f8f9fa] grid grid-cols-1 mt-5 space-y-4  justify-center md:grid-cols-2 gap-x-4">
            <div className="flex flex-row items-center py-3 justify-center w-full h-full">
              <img
                src="https://blog.ipleaders.in/wp-content/uploads/2020/07/4_these-are-the-voyages_journey_adventure_team_have-your-back-100771134-large.jpg"
                alt="Our Journey"
                className="rounded-lg h-full  "
              />
            </div>
            <div className="text-center pt-5 flex flex-col items-center py-3 ">
              <h2 className="text-2xl font-semibold font-inter text-black ">
                Our Journey
              </h2>
              <div className="w-[100px] h-1 rounded-md bg-yellow-400 mt-1 mb-3 "></div>
              <p className="w-full text-justify  text-xl subpixel-antialiased px-4 py-2  sm:mt-5 leading-relaxed ">
                The idea for ABHIDAN is born. You or someone in your team
                realizes the need for a platform that can connect people who
                want to donate to NGOs and organizations that need help. You
                conduct extensive research on the needs of various NGOs, the
                donation process, and the legal requirements for starting a
                donation platform. You develop a plan for ABHIDAN, including the
                mission, vision, and values of the organization. You also decide
                on the type of NGO partnerships you want to establish and the
                features you want to include in your website.
                <br />
                Overall, the journey of ABHIDAN is one of constant learning,
                growth, and impact. It is a project that has the potential to
                make a real difference in the lives of people in need, and I
                wish you all the best in your efforts to achieve your mission.
              </p>
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="bg-white mt-2">
          <div className="w-full py-2 flex flex-col items-center">
            <h2 className="text-center text-2xl font-semibold font-inter text-black ">
              Our Impact
            </h2>
            <div className="w-[100px] h-[4px] rounded-md bg-yellow-400 mt-1 mb-3  "></div>
          </div>
          <div className="flex flex-col md:flex-row justify-evenly items-center space-y-4 md:space-y-0 md:space-x-2  ">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="w-[100%] px-5 flex flex-col items-center max-w-sm py-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <i className={`${stat.icon} fa-2x mb-3 `}></i>
                <h4 className="mb-0 text-xl">
                  <CountUp end={stat.value} separator="," />
                </h4>
                <p className="text-xl">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What Makes Us Unique */}
        <section className="bg-white pt-4">
          <div className="w-full py-2 flex flex-col items-center">
            <h2 className="text-center text-2xl font-semibold font-inter text-black ">
              What Makes Us Unique
            </h2>
            <div className="w-[100px] h-[4px] rounded-md bg-yellow-400 mt-1 mb-3 "></div>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between items-center">
            <p className=" w-full md:w-[40%] text-xl subpixel-antialiased px-4 py-2 text-justify sm:mt-5 ">
              Our purpose is to bring all the NGOs on single platform to enhance
              communication between the NGO and the doner. there are many people
              living in scarcity of resources food, clothes, books, electronics
              etc. so, it is an approach with socialistic ideals to help who are
              needy by those who have resources in excess. In our households we
              have multiple items and gadgets which is of no use for us neither
              has good resale value like old used smartphone, or Telivision
              because you have shifted to LED or Smart TV. But these could be
              useful for others who are rebuilding thier home after any
              environmental disaster. <br />
              <div className="text-gray-800 my-2 ">Our main purpose is to-</div>
              <ul className="text-justify">
                <li> Reduce E-waste by reusing electronic items</li>
                <li>Providing resources to those who suffer from deficit</li>
                <li>from those who have in excess </li>
                <li> Bringing all NGOs on one platform </li>
                <li>
                  Establish direct communication channel between donor and
                </li>
                <li>Spread awareness among users by its influential blogs</li>
                <li>Providing gaurenteed supply to the NGOs</li>
              </ul>
            </p>
            <img src={img4} alt="" className="w-full md:w-[60%] float-right" />
          </div>
        </section>

        {/* Our Team */}
        <section className="bg-white mt-2">
          <div className="w-full py-2 flex flex-col items-center">
            <h2 className="text-center text-2xl font-semibold font-inter text-black ">
              Our Team
            </h2>
            <div className="w-[100px] h-[4px] rounded-md bg-yellow-400 mt-1 mb-3 "></div>
          </div>
          <div className="flex teamList flex-row flex-wrap items-center justify-center space-x-2  lg:space-x-8 ">
            {team.map((member, index) => (
              <div
                key={index}
                className="w-[15rem] p-6 bg-white border border-gray-200 space-y-3 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center mt-4 "
              >
                <img src={member.src} alt="" className="rounded-full" />
                <h1 className="text-xl">{member.name}</h1>
                <p>{member.desc}</p>
                <div className="flex items-center gap-x-5">
                  <Link to={"#"}>
                    <FaFacebookSquare
                      size={32}
                      className="text-blue-500 hover:text-blue-700"
                    />
                  </Link>
                  <Link to={"#"}>
                    <FaInstagramSquare
                      size={32}
                      className="text-red-500 hover:text-red-700"
                    />
                  </Link>
                  <Link to={"#"}>
                    <FaLinkedin
                      size={32}
                      className="text-blue-500 hover:text-blue-700"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Get Involved */}
        <section className="bg-white mt-2">
          <div className="w-full py-2 flex flex-col items-center">
            <h2 className="text-center text-2xl font-semibold font-inter text-black ">
              Get Involved
            </h2>
            <div className="w-[100px] h-[4px] rounded-md bg-yellow-400 mt-1 mb-3 "></div>
          </div>
          <div className="flex flex-col md:flex-row justify-between  items-center py-5 px-[5rem] ">
            <Link to={"#"}>
              <button className="w-full border rounded px-3 py-2  text-white bg-blue-500 hover:bg-blue-700 shadow-2xl shadow-blue-500 capitalize ">
                Request a Campaign
              </button>
            </Link>
            <Link to={"#"}>
              <button className="w-full border rounded px-3 py-2 text-white bg-green-500 hover:bg-green-700 shadow-2xl shadow-green-500 capitalize">
                Donate Now
              </button>
            </Link>
            <Link to={"#"}>
              <button className="w-full border rounded px-3 py-2 text-white bg-orange-500 hover:bg-orange-700 shadow-2xl shadow-orange-500 capitalize">
                Collaborate with Us
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
