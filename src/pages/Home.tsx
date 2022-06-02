import React from 'react'
import useStore from '../useStore'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import {Twitter, Telegram, Facebook,Medium, Email, Phone, Play} from '../components/Icons'
import logo from '../assets/img/logo.png'
import card_img_1 from '../assets/img/img_(31).png'
import card_img_2 from '../assets/img/img_(32).png'
import card_img_3 from '../assets/img/img_(33).png'

import card_1 from '../assets/img/img_(5).png'
import card_2 from '../assets/img/img_(6).png'
import card_3 from '../assets/img/img_(7).png'

import card_8 from '../assets/img/img_(8).png'
import card_9 from '../assets/img/img_(9).png'
import card_10 from '../assets/img/img_(10).png'
import card_11 from '../assets/img/img_(11).png'
import card_12 from '../assets/img/img_(12).png'
import card_13 from '../assets/img/img_(13).png'


import card_14 from '../assets/img/img_(14).png'
import card_15 from '../assets/img/img_(15).png'
import card_16 from '../assets/img/img_(16).png'
import card_17 from '../assets/img/img_(17).png'
import card_18 from '../assets/img/img_(18).png'
import card_19 from '../assets/img/img_(19).png'

import card_21 from '../assets/img/img_(21).png'
import card_22 from '../assets/img/img_(22).png'
import card_23 from '../assets/img/img_(23).png'
import card_24 from '../assets/img/img_(24).png'

import card_25 from '../assets/img/img_(25).png'
import card_27 from '../assets/img/img_(27).png'
import card_29 from '../assets/img/img_(29).png'



const Home = () => {
	const {update, loading} = useStore()
	
	React.useEffect(() => {
		update({loading : true})
		setTimeout(() => {
			update({loading : false})
		}, 500);
	}, [])
	return (
		<>
			<Header />
			<div className="home">
				<div className="section-1">
					<div className="container">
						<div className="row" >
							<div className="col-lg-7 col-md-12">
								<div style={{marginTop:'200px'}}>
									<h1 className='text-white'>CoinAge</h1>
									<h1 className='text-white'>Be your Own Bank</h1>
									<h3 className='text-white'>World Most Secure & Easy Way</h3>
									<button className='button-white'>Learn More</button>
								</div>
							</div>
							<div className="col-5">
							
							</div>
						</div>
					</div>
				</div>
				<div className="section-2">
					<div className="container">
						<h3 className='text-center'>About CoinAge</h3>
						<h5 className='text-center text-primary linear-border'>Introduce</h5>
						<div className="row mt5 pt5">
							<div className="col-lg-6 col-md-12">
								<div className="video-panel">
									<span className='play-btn row center middle ml1'  style={{color:'white'}}>
											<Play width={20} height={20} />
									</span>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<h3>Everything You Need To Know!</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uto labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
								<br />
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uto labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
								<button className='button-white'>Learn More</button>
							</div>
						</div>
					</div>
				</div>
				<div className="section-3">
					<div className="container">
						<h3 className="text-center">How It’s Work</h3>
						<p className='text-center text-primary linear-border' >More Easy</p>
						<div className="row mt5 pt5">
							<div className="col-lg-4 col-sm-12">
								<Card img={card_1} title={'Sign Up For CoinAge'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'}/>
							</div>
							<div className="col-lg-4 col-sm-12">
								<Card img={card_2} title={'Connect Your Bank Account'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'}/>
							</div>
							<div className="col-lg-4 col-sm-12">
								<Card img={card_3} title={'Buy And Sale Coin'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'}/>
							</div>
						</div>
						<div className="row center mt3">
							<button className='button-white'>Learn More</button>
						</div>
					</div>
				</div>
				<div className="section-roadmap">
					<div className="container">
						<h3 className="text-center">Road Map</h3>
						<p className='text-center text-primary linear-border' >More Easy</p>
						<div className="row mt5 pt5">
							<div className="col-lg-2 col-md-4 col-6" style={{padding:'1px'}}>
								<div className="roadmap">
									<div className="block">
										<img src={card_8} />
										<div className="line" />
									</div>
									<div className='border top type1' />
									<div className="block">
										<h5>Q1 2015</h5>
										<p>Lorem ipsum dolor site in to amet consectetur.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-4 col-6" style={{padding:'1px'}}>
								<div className="roadmap">
									<div className="block">
										<h5>Q1 2016</h5>
										<p>Lorem ipsum dolor site in to amet consectetur.</p>
									</div>
									<div className='border bottom type2' />
									<div className="block">
										<div className="line" />
										<img src={card_9} />
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-4 col-6" style={{padding:'1px'}}>
								<div className="roadmap">
									<div className="block">
										<img src={card_10} />
										<div className="line" />
									</div>
									<div className='border top type1' />
									<div className="block">
										<h5>Q1 2017</h5>
										<p>Lorem ipsum dolor site in to amet consectetur.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-4 col-6" style={{padding:'1px'}}>
								<div className="roadmap">
									<div className="block">
										<h5>Q1 2018</h5>
										<p>Lorem ipsum dolor site in to amet consectetur.</p>
									</div>
									<div className='border bottom type2' />
									<div className="block">
										<div className="line" />
										<img src={card_11} />
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-4 col-6" style={{padding:'1px'}}>
								<div className="roadmap">
									<div className="block">
										<img src={card_12} />
										<div className="line" />
									</div>
									<div className='border top type1' />
									<div className="block">
										<h5>Q1 2019</h5>
										<p>Lorem ipsum dolor site in to amet consectetur.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-4 col-6" style={{padding:'1px'}}>
								<div className="roadmap">
									<div className="block">
										<h5>Q1 2020</h5>
										<p>Lorem ipsum dolor site in to amet consectetur.</p>
									</div>
									<div className='border bottom type2' />
									<div className="block">
										<div className="line" />
										<img src={card_13} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section-4">
					<div className="container">
						<h3 className="text-center">CoinAge Features</h3>
						<p className='text-center text-primary linear-border' >Luscious For Your Business</p>
						<div className="row mt5 pt5">
							<div className="col-lg-4 col-sm-12">
								<Card img={card_14} title={'Safe And Secure'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'}/>
							</div>
							<div className="col-lg-4 col-sm-12">
								<Card img={card_15} title={'Awesome Mobile App'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'}/>
							</div>
							<div className="col-lg-4 col-sm-12">
								<Card img={card_16} title={'Secure Wallet'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'}/>
							</div>
							<div className="col-lg-4 col-sm-12">
								<Card img={card_17} title={'Covered By Insurance'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'}/>
							</div>
							<div className="col-lg-4 col-sm-12">
								<Card img={card_18} title={'Recurring Buying'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'}/>
							</div>
							<div className="col-lg-4 col-sm-12">
								<Card img={card_19} title={'Instant Exchange'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'}/>
							</div>
						</div>
						<div className="row center">
							<button className='button-white'>Learn More</button>
						</div>
					</div>
				</div>
				<div className="section-price">
					<div className="container center">
						<h3 className="text-center">Suitable Price</h3>
						<div className="row center">
							<p className='text-center w70 linear-border' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
						</div>
						<div className="row mt5 pt5">
							<div className="col-lg-3 col-sm-6">
								<div className="price-card">
									<h5>Get 0.0102 BTC</h5>
									<p>for</p>
									<h3>$100</h3>
									<button className='button-white'>Buy Now</button>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6">
								<div className="price-card">
									<h5>Get 0.0202 BTC</h5>
									<p>for</p>
									<h3>$200</h3>
									<button className='button-white'>Buy Now</button>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6">
								<div className="price-card">
									<h5>Get 0.0502 BTC</h5>
									<p>for</p>
									<h3>$500</h3>
									<button className='button-white'>Buy Now</button>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6">
								<div className="price-card">
									<h5>Get 0.1002 BTC</h5>
									<p>for</p>
									<h3>$1000</h3>
									<button className='button-white'>Buy Now</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section-5">
					<div className="container">
						<div className="row">
							<div className="col-lg-3  col-md-6 col-sm-12">
								<img src={card_21}/>
								<h3>4.9</h3>
								<h5>MLN TRANSACTIONS</h5>
							</div>
							<div className="col-lg-3  col-md-6 col-sm-12">
								<img src={card_22}/>
								<h3>80</h3>
								<h5>ONLINE CONSULTANTS</h5>
							</div>
							<div className="col-lg-3  col-md-6 col-sm-12">
								<img src={card_23}/>
								<h3>34</h3>
								<h5>COUNTRIES SERVED</h5>
							</div>
							<div className="col-lg-3  col-md-6 col-sm-12">
								<img src={card_24}/>
								<h3>2.8</h3>
								<h5>MLN BITCOIN WALLETS</h5>
							</div>
						</div>
					</div>
				</div>
				<div className="section-6">
					<div className="container">
						<div className="row center">
							<div className="col-lg-4 col-sm-12">
								<div className='factor type1'>
									<img src={card_25}/>
									<h4>Security</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur dolore aliqua.</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-12">
								<div className='factor type2'>
									<img src={card_27}/>
									<h4>License</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur dolore aliqua.</p>
								</div>
							</div>
							<div className="col-lg-4 col-sm-12">
								<div className='factor'>
									<img src={card_29}/>
									<h4>Result</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur dolore aliqua.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section-7">
					<div className="container">
						<h3 className="text-center">Letest Blog</h3>
						<p className='text-center text-primary linear-border' >Our Evolution</p>
						<div className="row mt3">
							<div className="col-lg-4 col-sm-12">
								
							</div>
						</div>
					</div>
				</div>
				<div className="section-8">
					<div className="container">
						<h3 className='text-center'>Contact Us</h3>
						<div className="row center">
							<p className='text-center linear-border  w70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
						</div>
						<div className="row mt5">
							<div className="col-lg-6 col-sm-12 mb5">
								<h4>Primary Contacts</h4>
								<p>San Francisso, 13 Ave. Street, Twin Peaks New Yourk city</p>
								<div className="row middle ml1">
									<Phone width={20} height={20}/>
									<p className='ml1'>+880 123 456 7823</p>
								</div>
								<div className="row middle ml1	">
									<Email width={20} height={20} />
									<p className='ml2'>info@craft.com</p>
								</div>
								<button className='button-white'>Find Us</button>
							</div>
							<div className="col-lg-6 col-sm-12">
								<div className="row">
									<div className="col-lg-6 col-sm-12">
										<input type="text"  className="w100"  placeholder = "Name" />
									</div>
									<div className="col-lg-6 col-sm-12">
										<input type="text" className="w100" placeholder = "Email" />
									</div>
									<div className="col-12">
										<textarea placeholder='Message'  className="w100" rows={5}/>
									</div>
								</div>
								<div className="row">
									<div className="col-12">
										<button className='button-white'>Send Message</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section-9">
					<div className="container">
						<div className="justify justify-around">					
							<div className="img-card">
								<img src= {card_img_1} />
							</div>
							<div className="img-card">
								<img src= {card_img_2} />
							</div>
							<div className="img-card">
								<img src= {card_img_3} />
							</div>
							<div className="img-card">
								<img src= {card_img_2} />
							</div>
							<div className="img-card">
								<img src= {card_img_1} />
							</div>
						</div>
					</div>
				</div>
				<div className="section-10">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-sm-12">
								<img src={logo} style = {{width:'55px', height:'55px', marginTop:'10px'}} />
								<p className='text-white' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								<br></br>
								<div className="flex" style={{color:'var(--default-color-2)', marginLeft:'4px'}}>
									<a  href = "https://t.me/jiru" target={"_blank"} className='icon'><Twitter width={22} height={22} /></a>
									<a  href = "https://t.me/jiru" target={"_blank"} className='icon'><Facebook width={22} height={22} /></a>
									<a  href = "https://t.me/jiru" target={"_blank"} className='icon'><Medium width={22} height={22} /></a>
									<a  href = "https://t.me/jiru" target={"_blank"} className='icon'><Telegram width={22} height={22} /></a>
								</div>
							</div>
							<div className="col-lg-4 col-sm-12">
								<h4 className='text-white linear-border'>Recent Post</h4>		
								<p className='text-white'>	Best Way Rise CoinAge</p>						
								<p className='text-white'> 25 january</p>
								<br/>
								<p className='text-white'>	Best Way Rise CoinAge</p>						
								<p className='text-white'> 25 january</p>
							</div>
							<div className="col-lg-4 col-sm-12">
								<div className="">
									<h4 className='text-white linear-border'>Newslettter</h4>
									<p className='text-white' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
									<div className="pair-input">
										<input type="text" placeholder='Your Email Address' />
										<button className='btn-linear'>Subscribe</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />	
		</>
	)
}

export default Home
