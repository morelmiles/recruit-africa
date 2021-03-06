import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

// Assets
import { ReactComponent as Logo } from "./../assets/Logo.svg";
import { ReactComponent as TwitterIcon } from "./../assets/Twitter.svg";
import { ReactComponent as FacebookIcon } from "./../assets/Facebook.svg";
import { ReactComponent as IgIcon } from "./../assets/Instagram.svg";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      link: "https://facebook.com",
      icon: <FacebookIcon />,
    },
    {
      id: 2,
      link: "https://twitter.com",
      icon: <TwitterIcon />,
    },
    {
      id: 3,
      link: "https://instagram.com",
      icon: <IgIcon />,
    },
  ];
  return (
    <div className="bg-black">
      <div className="flex flex-col sm:flex-row sm:px-32 sm:pt-24 mx-4 pt-8 pb-10">
        <div className="sm:mr-16">
          <span className="mb-5">
            <Logo />
          </span>
          <p className="mb-9 mt-5 text-white">
            Lorem Ipsum is simply dummy text <br className="hidden sm:inline" />
            of the printing and typesetting <br className="hidden sm:inline" />
            industry.
          </p>
          <p className="font-bold text-lg mb-2.5 text-white">
            Total Jobs posted today
          </p>
          <p className="text-yellow-500 font-bold text-2xl mb-5 ">104872</p>
          <p className="text-white mb-7 text-lg font-bold">Connect with us</p>
          <div className="flex flex-row items-center mb-8">
            {socialLinks.map((x) => (
              <span key={x.id} className="mr-7">
                <a href={x.link} target="_blank" rel="noreferrer noopenner">
                  {x.icon}
                </a>
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-around w-full ">
          <div className="flex flex-col ">
            <div className="flex flex-col mb-9 ">
              <h3 className="font-bold text-lg text-gray-300 mb-5">Company</h3>
              <Router>
                <Link to="/" className="text-white mb-2.5 hover:text-gray-300">
                  About us
                </Link>
              </Router>
              <Router>
                <Link to="/" className="text-white mb-2.5 hover:text-gray-300">
                  Terms & conditions
                </Link>
              </Router>
              <Router>
                <Link to="/" className="text-white mb-2.5 hover:text-gray-300">
                  Privacy policy
                </Link>
              </Router>
            </div>

            <div className="flex flex-col mb-9">
              <h3 className="font-bold text-lg text-gray-300 mb-5">
                Help & Support
              </h3>
              <Router>
                <Link to="/" className="text-white mb-2.5 hover:text-gray-300">
                  FAQs
                </Link>
              </Router>
              <Router>
                <Link to="/" className="text-white mb-2.5 hover:text-gray-300">
                  info@recruit4africa.com
                </Link>
              </Router>
              <Link to="/" className="text-white mb-2.5 hover:text-gray-300">
                +256-700-000-000
              </Link>

              <Link to="/" className="text-white mb-2.5 hover:text-gray-300">
                Contact us
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col mb-9 ">
              <h3 className="font-bold text-lg text-gray-300 mb-5">
                Create resume
              </h3>
              <Link to="/" className="text-white mb-2.5 hover:text-gray-300">
                Latest Job posts
              </Link>

              <Link to="/" className="text-white mb-2.5 hover:text-gray-300">
                Top Accounting Jobs
              </Link>

              <Link to="/" className="text-white mb-2.5 hover:text-gray-300">
                Privacy policy
              </Link>
            </div>

            <div className="flex flex-col mb-9">
              <h3 className="font-bold text-lg text-gray-300  mb-5">
                Find candidates
              </h3>
              <Link to="/" className="text-white mb-2.5 hover:text-gray-300">
                Sign up
              </Link>
              <Link to="/" className="text-white mb-2.5 hover:text-gray-300">
                Pricing
              </Link>
            </div>
          </div>

          <div className="flex flex-col ">
            <div className="flex flex-col mb-9">
              <h3 className="font-bold text-lg text-gray-300 mb-5">
                Newsletter
              </h3>
              <label class="relative text-gray-400 focus-within:text-gray-600 block mr-3">
                <input
                  type="text"
                  name="location"
                  required
                  id="location"
                  placeholder="Enter your email address"
                  autoComplete
                  class="form-input border-none   py-3 px-4 w-full bg-white placeholder-gray-400 text-gray-500 appearance-none block pl-2 focus:outline-none"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
