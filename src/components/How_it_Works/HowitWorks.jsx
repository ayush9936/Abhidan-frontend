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
										CHOOSE A CAUSE
									</h1>
									<p className=' px-2 text-center text-md font-semibold text-gray-600'>
										Browse different campaigns and select a cause.
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
										SELECT PRODUCTS
									</h1>
									<p className=' px-2 text-center text-md font-semibold text-gray-600'>
										Select products and quantity you wish to donate.
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
										ORDER PROCESSING
									</h1>

									<p className=' px-2 text-center text-md font-semibold text-gray-600'>
										Checkout and pay for your contributions.
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
										DELIVERY REPORT
									</h1>
									<p className=' px-2 text-center text-md font-semibold text-gray-600'>
										Donatekart delivers the products and the organisation
										updates about product utilization.
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
									Fill Request A Campaign form and send us your requirement
								</p>
							</div>
							
						</div>

						<div className=' d-flex justify-content-center'>
							<div className='subcontainer-card'>
								<img
									className='w-[11rem] h-[11rem]'
									src={slider6}
									alt='slider6'
								/>
								<h1 className=' text-xl text-center'>
									GET IN TOUCH
								</h1>
								<p className=' px-2 text-center text-md font-semibold text-gray-600'>
									Our campaign manager will reach out based on the enquiry
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
									CAMPAIGN IS LIVE
								</h1>
								<p className=' px-2 text-center text-md font-semibold text-gray-600'>
									Campaign goes live on Donatekart with content, images and
									product.
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
									CAMPAIGN UPDATES
								</h1>
								<p className=' px-2 text-center text-md font-semibold text-gray-600'>
									activeTab are to be updated using photos videos of the
									distribution drive of products to the needy
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
