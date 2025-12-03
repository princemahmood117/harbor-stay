import { Link } from "react-router-dom";
import { assets } from "../../../assets/assets/assets";
import logoTemp from '../../../assets/images/rem.png'
const Footer = () => {
  return (
    <div className="text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32 bg-[#F6F9FC]">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        <div className="max-w-80">
          <img

            src={logoTemp}
            alt="logo"
            className="mb-4 h-8 md:h-10"
          />
          <p className="text-sm">
            Discover the world&apos;s most extraordinary places to stay, from
            boutique hotels to luxury villas and private islands.
          </p>
          <div className="flex items-center gap-3 mt-4">
            {/* Instagram */}
            <img
              src={assets.instagramIcon}
              alt="instagram-icon"
              className="w-6"
            />
            {/* Facebook */}
            <img
              src={assets.facebookIcon}
              alt="facebook-icon"
              className="w-6"
            />
            {/* Twitter */}
            <img src={assets.twitterIcon} alt="twitter-icon" className="w-6" />
            {/* LinkedIn */}
            <img src={assets.linkendinIcon} alt="linked-icon" className="w-6" />
          </div>
        </div>

        <div>
          <p className="text-lg text-gray-800">COMPANY</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
               <Link to={'/about'}>About Us</Link>
            </li>
            <li>
              <Link to={'/career'}>Careers</Link>
            </li>

            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-lg text-gray-800">SUPPORT</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <Link to={'/safety'}>Safety Information</Link>
            </li>
            <li>
              <Link to={'/canel'}>Cancellation Information</Link>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>         
          </ul>
        </div>

        <div className="max-w-80">
          <p className="text-lg text-gray-800">STAY UPDATED</p>
          <p className="mt-3 text-sm">
            Subscribe to our newsletter for inspiration and special offers.
          </p>
          <div className="flex items-center mt-4">
            <input
              type="text"
              className="bg-white rounded-l border border-gray-300 h-9 px-3 outline-none"
              placeholder="Your email"
            />
            <button className="flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r">
              {/* Arrow icon */}
              <img
                className="w-3.5 invert"
                src={assets.arrowIcon}
                alt="arrow-icon"
              />
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 mt-8" />
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>
          © {new Date().getFullYear()}{" "}
          <a href="https://youtube.com">StayVista</a>. All rights reserved.
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <Link to={"/terms"}>Terms</Link>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
