import React, { useState } from "react";
import "./Home.css";
import { FaSearch ,FaTwitter,FaWhatsapp,FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import LongCard from "./LongCard";
import SamllCard from "./SamllCard";
import houseLong1 from '../assets/houseLong1.jpg';
import houseLong2 from '../assets/houseLong2.jpg';
import houseSmall1 from '../assets/houseSmall1.jpg';
import houseSmall2 from '../assets/houseSmall2.jpg';
import houseSmall3 from '../assets/houseSmall3.jpg';
import houseSmall4 from '../assets/houseSmall4.jpg';
import { NavLink } from "react-router-dom";
import HomeEndCard from "./HomeEndCard";
import BuyHome from '../assets/buy a home.webp';
import RentHome from '../assets/rent-a-home.webp';
import SellHome from '../assets/sell-a-home.webp';
import footerimg from '../assets/footer-img.svg';
import logo from '../assets/TrueHomes(Croped).png';

export default function Home() {
  const [mode, setMode] = useState("buy");
  function buyClickHandler() {
    setMode("buy");
  }
  function rentClickHandler() {
    setMode("rent");
  }
  function soldClickHandler() {
    setMode("sold");
  }
  return (
    <div className="Home">
      <div className="home-top">
        <h2>Discover a place you'll love to live</h2>
        <h4>Helping 100 million renters find their perfect fit.</h4>
        <div className="btncontainer">
          <div
            className="modes"
            onClick={buyClickHandler}
            style={
              mode === "buy"
                ? {
                    backgroundColor: "white",
                    color: "#427b01",
                    fontWeight: "bold",
                  }
                : {
                    backgroundColor: "initial",
                    color: "white",
                    fontWeight: "normal",
                  }
            }
          >
            Buy
          </div>
          <div
            className="modes"
            onClick={rentClickHandler}
            style={
              mode === "rent"
                ? {
                    backgroundColor: "white",
                    color: "#427b01",
                    fontWeight: "bold",
                  }
                : {
                    backgroundColor: "initial",
                    color: "white",
                    fontWeight: "normal",
                  }
            }
          >
            Rent
          </div>
          <div
            className="modes"
            onClick={soldClickHandler}
            style={
              mode === "sold"
                ? {
                    backgroundColor: "white",
                    color: "#427b01",
                    fontWeight: "bold",
                  }
                : {
                    backgroundColor: "initial",
                    color: "white",
                    fontWeight: "normal",
                  }
            }
          >
            Sold
          </div>
        </div>
        <form>
          <input
            type="text"
            className="inptxt"
            placeholder="Enter an address, neighborhood, city, or ZIP code"
          />
          <div className="search-btn btn">
            <FaSearch fontSize="1.3em" />
          </div>
        </form>
      </div>
      <div className="home-mid">
        <h2>Explore homes on TrueHomes</h2>
        <p>
          Take a deep dive and browse homes for sale, original neighborhood
          photos, resident reviews and local insights to find what is right for
          you.
        </p>
        <div className="card-container">
          <LongCard img={houseLong1} location={"Basavanagudi, Banglore"} />
          <div className="small-card-container">
            <div className="flex-r">
              <SamllCard img={houseSmall1} location="Warli, Mumbai"/>
              <SamllCard img={houseSmall4} location="Vasant Kung, New Delhi"/>
            </div>
            <div className="flex-r">
              <SamllCard img={houseSmall3} location="Mylapore, Chennai"/>
              <SamllCard img={houseSmall2} location="New Alipore, Kolkata"/>
            </div>
          </div>
          <LongCard img={houseLong2} location={"Sector-18, Noida"} />
        </div>
      </div>
      <div className="view-more-btn">View More</div>
      <div className="home-end">
        <h2>See how TrueHomes can help</h2>
        <div className="home-end-card-container">
        <HomeEndCard content="Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else." img={BuyHome} title="Buy a Home" btn="Browse Homes"/>
        <HomeEndCard content="We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent." img={RentHome} title="Rent a Home" btn="Find Rentals"/>
        <HomeEndCard content="No matter what path you take to sell your home, we can help you navigate a successful sale." img={SellHome} title="Sell a Home" btn="See your options"/>
        </div>
      </div>
      <footer>
        <div className="flex-r" style={{alignItems:"flex-start", justifyContent:"space-evenly"}}>
          <div style={{display:"flex",flexDirection:"column", alignItems:"center", gap:"5px"}}>
          <img src={logo} alt="" />
            {/* icons of social media */}
            <p style={{fontSize:"13px"}}>©TrueHomes, 2023</p>
            <div className="flex-r">
            <NavLink to="https://www.instagram.com/akash_mishra_1507/" className="footer-social-media" target="_blank"><FaInstagram /></NavLink>
            <NavLink to="https://x.com/Jeevni15?s=09" className="footer-social-media" target="_blank"><FaTwitter /></NavLink>
            <NavLink to="https://www.linkedin.com/in/akash-mishra-8b695222a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="footer-social-media" target="_blank"><FaLinkedin /></NavLink>
            <NavLink to="https://www.facebook.com/profile.php?id=100035353590496" className="footer-social-media" target="_blank"><FaFacebook /></NavLink>
            </div>
          </div>
          <div style={{display:"flex",flexDirection:"column", gap:"4px"}}>
            <h5 style={{margin:"5px 0"}}>ADVERTISERS</h5>
            <NavLink to="" target="_blank" className="footer-links">Advertise</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Add a property</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Digital Feeds Program</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Customer Portal</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Community Voice</NavLink>
          </div>

          <div style={{display:"flex",flexDirection:"column", gap:"4px"}}>
            <h5 style={{margin:"5px 0"}}>THE MARKETPLACE</h5>
            <NavLink to="" target="_blank" className="footer-links">Apartamentos.com</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Apartments Canada</NavLink>
            <NavLink to="" target="_blank" className="footer-links">ApartmentFinder.com</NavLink>
            <NavLink to="" target="_blank" className="footer-links">ForRent</NavLink>
            <NavLink to="" target="_blank" className="footer-links">ApartmentHomeLiving.com</NavLink>
            <NavLink to="" target="_blank" className="footer-links">WestsideRentals.com</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Homes.com</NavLink>
            <NavLink to="" target="_blank" className="footer-links">LoopNet.com</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Land.com</NavLink>
          </div>

          <div style={{display:"flex",flexDirection:"column", gap:"4px"}}>
            <h5 style={{margin:"5px 0"}}>NEIGHBORHOODS</h5>
            <NavLink to="" target="_blank" className="footer-links">Las Colinas</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Bronx, NYC</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Federal Hill MD</NavLink>
            <NavLink to="" target="_blank" className="footer-links">East Village</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Hyde Park</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Uptown Minneapolis</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Downtown Austin</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Lincoln Park</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Downtown Houston</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Downtown Dallas</NavLink>
          </div>

          <div style={{display:"flex",flexDirection:"column", gap:"4px"}}>
            <h5 style={{margin:"5px 0"}}>RENTAL MANAGER</h5>
            <NavLink to="" target="_blank" className="footer-links">Rental Manager </NavLink>
            <NavLink to="" target="_blank" className="footer-links">List Your Property For Rent </NavLink>
            <NavLink to="" target="_blank" className="footer-links">Screen Applicants </NavLink>
            <NavLink to="" target="_blank" className="footer-links">Create Rental Leases </NavLink>
            <NavLink to="" target="_blank" className="footer-links">Collect Rent Online </NavLink>
            <NavLink to="" target="_blank" className="footer-links">Rental Manager Resources</NavLink>
          </div>

          <div style={{display:"flex",flexDirection:"column", gap:"4px"}}>
            <h5 style={{margin:"5px 0"}}>ABOUT US</h5>
            <NavLink to="" target="_blank" className="footer-links">About Us</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Careers</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Contact Us</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Legal Notices</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Privacy Notice</NavLink>
            <NavLink to="" target="_blank" className="footer-links">CA: Do Not Sell My Personal Info</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Equal Housing</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Avoid Scams</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Accessibility</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Rent Calculator</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Renterverse</NavLink>
            <NavLink to="" target="_blank" className="footer-links">Sitemap</NavLink>
          </div>
        </div>
        {/* <div></div> */}
          <img src={footerimg} alt="" />
      </footer>
      <div className="chat">
        <NavLink to="https://wa.me/9695437432" target="_blank"><FaWhatsapp fontSize="3.5em" color="white" style={{backgroundColor:"limegreen",borderRadius:"50%",padding:"5px"}}/></NavLink>
      </div>
         <span className="hidden-whatsapp">Chat on Whatsapp</span>
    </div>
  );
}
