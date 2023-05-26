/** @format */

import React, { useState } from 'react';
import './HowitWorks.css';

import slider1 from './images/slider1.svg';
import slider2 from './images/slider2.svg';
import slider3 from './images/slider3.svg';
import slider4 from './images/slider4.svg';
import slider5 from './images/slider5.svg';
import slider6 from './images/slider6.svg';
import slider8 from './images/slider8.svg';
import slider10 from './images/slider10.jpg';

const HowitWorks = () => {
	const [activeTab, setActiveTab] = useState(1);

	const ngoHandler = (index) => {
		setActiveTab(index);
	};
	

	return (
		<div className='how-it-works bg-white'>
			<div className='subcontainer'>
				<div className=' subcontainer-title_heading mb-3'>
					<div className='subcontainer-section-headingWrapper'>
						<div className='flex flex-col items-center   '>
						<h2 className='text-2xl  font-bold text-gray-800'
						>How it Works
					</h2>
					<div className='w-[70%] h-1 bg-yellow-400 rounded-md mt-1'></div>
						</div>
						</div>
				</div>

				<div className='subcontainer-buttons '>
					<h2 onClick={()=>ngoHandler(1)} style={{backgroundColor:activeTab === 1 ? 'orange' : 'white'}} className='switch'>For Donor's</h2>
					<h2 onClick={()=>ngoHandler(2)}  style={{backgroundColor:activeTab === 2 ? 'orange' : 'white'}}className='switch-1'>For NGO's</h2>
				</div>

				{activeTab === 1 &&
					<div className='subcontainer-donor '>
						<div className='flex flex-col md:flex-row gap-x-4 px-3 py-2 gap-y-2 md:gap-y-0'>
							<div className=' justify-content-center'>
								<div className='subcontainer-card'>
									<img
										className='w-[11rem] h-[11rem]'
										src={slider1}
										alt='slider1'
									/>
									<h1 className=' text-xl text-center'>
										LOGIN AND SIGNUP
									</h1>
									<p className=' px-2 text-center text-md font-semibold text-gray-600'>
										"Browse different campaigns and select a cause".
									</p>
								</div>
								
							</div>
							<div className='d-flex justify-content-center'>
								{' '}
								<div className='subcontainer-card'>
									<img
										className='w-[11rem] h-[11rem]'
										src={slider2}
										alt='slider2'
									/>
									<h1 className=' text-xl text-center'>
										SELECT PRODUCTS AND NGO'S
									</h1>
									<p className=' px-2 text-center text-md font-semibold text-gray-600'>
										"Select products And NGO'S you wish to donate".
									</p>
								</div>
								
							</div>
							<div className='d-flex justify-content-center'>
								{' '}
								<div className='subcontainer-card'>
									<img
										className='w-[11rem] h-[11rem]'
										src={slider3}
										alt='slider3'
									/>
									<h1 className=' text-xl text-center'>
										RAISE REQUEST AND WAIT FOR CONFIRMATION.
									</h1>

									<p className=' px-2 text-center text-md font-semibold text-gray-600'>
										"Fill the donation form and wait for response from the NGO's".
									</p>
								</div>
								
							</div>
							<div className='d-flex justify-content-center'>
								{' '}
								<div className='subcontainer-card'>
									<img
										className='w-[11rem] h-[11rem]'
										src={slider4}
										alt='slider4'
									/>
									<h1 className=' text-xl text-center'>
										DONATION EXECUTED
									</h1>
									<p className=' px-2 text-center text-md font-semibold text-gray-600'>
									"After verifying the donation , give your donation".
									</p>
								</div>
								
							</div>
						</div>
					</div>}
				
					{activeTab === 2 && 
					<div className='subcontainer-ngo'>
					<div className='flex flex-col md:flex-row gap-x-4 px-3 py-2 gap-y-2 md:gap-y-0'>
						<div className=' d-flex justify-content-center'>
							<div className='subcontainer-card'>
								<img
									className='w-[11rem] h-[11rem]'
									src={slider5}
									alt='slider5'
								/>
								<h1 className=' text-xl text-center'>
									FILL THE FORM
								</h1>
								<p className=' px-2 text-center text-md font-semibold text-gray-600'>
									"Fill Request form TO GET CONNCTED WITH US". 
								</p>
							</div>
							
						</div>

						<div className=' d-flex justify-content-center'>
							<div className='subcontainer-card'>
								<img
									className='w-[11rem] h-[11rem]'
									src={slider10}
									alt='slider10'
								/>
								<h1 className=' text-xl text-center'>
									WAIT FOR VERIFICATION 
								</h1>
								<p className=' px-2 text-center text-md font-semibold text-gray-600'>
									"Our campaign manager will reach out based on the enquiry".
								</p>
							</div>
							</div>

						<div className=' d-flex justify-content-center'>
							<div className='subcontainer-card'>
								<img
									className='w-[11rem] h-[11rem]'
									src={slider6}
									alt='slider7'
								/>
								<h1 className=' text-xl text-center'>
									GET LISTED
								</h1>
								<p className=' px-2 text-center text-md font-semibold text-gray-600'>
									"After verification from our side get listed in our NGO's list" .
								</p>
							</div>
							
						</div>

						<div className=' d-flex justify-content-center'>
							<div className='subcontainer-card'>
								<img
									className='w-[11rem] h-[11rem]'
									src={slider8}
									alt='slider8'
								/>
								<h1 className=' text-xl text-center'>
									Wait for the request 
								</h1>
								<p className=' px-2 text-center text-md font-semibold text-gray-600'>
									"Wait for a donor to get requested for donation".
								</p>
							</div>
							
						</div>
					</div>
				</div>}
			
			</div>
		</div>
	);
};

export default HowitWorks;
