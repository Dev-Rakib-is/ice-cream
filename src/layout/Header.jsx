import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import {
  Search,
  ShoppingBag,
  ChevronDown,
  ArrowRight,
  X,
  AlignCenter,
} from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useClickDetect from "../component/shareComponents/outsideClick";
import { useNavigate } from "react-router-dom";

const Header = ({ cartItem = [] }) => {
  // Menu & Submenu
  const [openMenu, setOpenmenu] = useState(false);
  const [activeSub, setActiveSub] = useState(null);

  // Search bar
  const [openSearch, setopenSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  // Outside click detect
  const dropdownRef = useRef(null);
  useClickDetect(dropdownRef, () => setopenSearch(false));

  useEffect(() => {
    if (!openMenu) setActiveSub(null);
  }, [openMenu]);

  // Handle Search submit
  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      if (searchText.trim() !== "") {
        navigate(`/shop?search=${encodeURIComponent(searchText)}`);
        setopenSearch(false);
      }
    },
    [searchText, navigate]
  );

  return (
    <header className="w-full bg-[linear-gradient(135deg,_#EFD7EF_8%,_#F5F9FC_40%,_#F8EAE1_66%,_#EAF8F9_91%)] top-0 left-0 fixed z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-3">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Company logo"
              className="h-10 md:h-12 lg:h-16"
            />
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex lg:gap-10 items-center md:gap-6">
            <li>
              <Link
                to="/"
                className="hover:text-pink-500 hover:underline underline-offset-8"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-pink-500 hover:underline underline-offset-8"
              >
                About Us
              </Link>
            </li>

            {/* Pages Dropdown */}
            <li className="relative group">
              <div className="flex items-center cursor-pointer hover:text-pink-500 hover:underline underline-offset-8">
                Pages{" "}
                <ChevronDown className="md:ml-0 lg:ml-1 group-hover:rotate-180 transition duration-300 ease-in-out" />
              </div>
              <ul className="absolute left-0 w-48 mt-2 rounded-sm shadow bg-amber-50 space-y-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-2 transition-all duration-300 z-50">
                <li className="text-black hover:text-white hover:bg-pink rounded px-2 cursor-pointer">
                  <Link to="shop">Shop</Link>
                </li>
                <li className="text-black hover:text-white hover:bg-pink rounded px-2 cursor-pointer">
                  <Link to="team">Team</Link>
                </li>
                <li className="text-black hover:text-white hover:bg-pink rounded px-2 cursor-pointer">
                  <Link to="review">Review</Link>
                </li>
                <li className="text-black hover:text-white hover:bg-pink rounded px-2 cursor-pointer">
                  <Link to="cart">Cart</Link>
                </li>
                <li className="text-black hover:text-white hover:bg-pink rounded px-2 cursor-pointer">
                  <Link to="checkout">Checkout</Link>
                </li>
                <li className="text-black hover:text-white hover:bg-pink rounded px-2 cursor-pointer">
                  <Link to="specialOffer">Special Offers</Link>
                </li>
                <li className="text-black hover:text-white hover:bg-pink rounded px-2 cursor-pointer">
                  <Link to="notFound">404</Link>
                </li>
                <li className="text-black hover:text-white hover:bg-pink rounded px-2 cursor-pointer">
                  <Link to="privacyPolicy">Privacy Policy</Link>
                </li>
                <li className="text-black hover:text-white hover:bg-pink rounded px-2 cursor-pointer">
                  <Link to="termsAndConditions">Terms & Conditions</Link>
                </li>
              </ul>
            </li>

            {/* Blog Dropdown */}
            <li className="relative group">
              <Link
                to={"blog"}
                className="flex items-center cursor-pointer hover:text-pink-500 hover:underline underline-offset-8"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="faq"
                className="hover:text-pink-500 hover:underline underline-offset-8"
              >
                Faq's
              </Link>
            </li>
          </ul>

          {/* Desktop icons */}
          <div
            className="hidden md:flex lg:gap-6 md:gap-3 lg:mx-7 items-center"
            ref={dropdownRef}
          >
            {/* Search */}
            <div className="relative">
              <motion.button
                whileTap={{ scale: 0.8 }}
                onClick={() => setopenSearch((prev) => !prev)}
                className="flex items-center justify-center"
              >
                <Search
                  size={24}
                  className="hover:text-pink-500 cursor-pointer transition-transform hover:scale-110 ease-in-out duration-300 outline-none"
                />
              </motion.button>
              <AnimatePresence>
                {openSearch && (
                  <motion.form
                    initial={{ y: 0 }}
                    animate={{ y: 0 }}
                    exit={{ y: 20 }}
                    onSubmit={handleSearch}
                    className="absolute w-[220px] mt-5 transition origin-top"
                  >
                    <input
                      type="text"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      placeholder="Search products"
                      className="w-full h-10 pl-3 pr-12 border border-purple bg-white backdrop-blur-2xl outline-none rounded-md"
                    />
                    <motion.button
                      type="submit"
                      whileTap={{ scale: 0.95 }}
                      className="absolute top-1/2 right-0 -translate-y-1/2 rounded-md border border-purple w-10 flex items-center justify-center cursor-pointer h-10"
                    >
                      <Search className="text-pink-500 w-6 h-6" />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Cart */}
            <div className="relative">
              <Link to={"cart"}>
                <ShoppingBag size={"28px"} className="cursor-pointer" />
                {cartItem.length > 0 && (
                  <span className="absolute -bottom-1 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItem.length}
                  </span>
                )}
              </Link>
            </div>

            {/* Contact Button */}
            <motion.button
            onClick={()=>navigate("/login")}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-0.5 px-6 py-2 rounded-full bg-pink-500 hover:bg-pink-700 text-white font-semibold cursor-pointer shadow-[0_0_10px_#F83D8E] hover:shadow-[0_0_30px_#ec4899]"
            >
              Contact Us <ArrowRight />
            </motion.button>
          </div>

          {/* Mobile toggle Icon */}
          <motion.div
            whileTap={{ scale: 0.8 }}
            onClick={() => setOpenmenu(!openMenu)}
            className="md:hidden"
          >
            {openMenu ? (
              <X className="text-pink" />
            ) : (
              <AlignCenter className="text-pink" />
            )}
          </motion.div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] overflow-y-auto z-30 p-4 backdrop-blur-sm"
          >
            <ul className="space-y-3">
              <li>
                <Link to="/" onClick={() => setOpenmenu(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setOpenmenu(false)}>
                  About Us
                </Link>
              </li>

              {/* Pages Submenu */}
              <li className="w-full">
                <div
                  onClick={() =>
                    setActiveSub((prev) => (prev === "pages" ? null : "pages"))
                  }
                  className="flex justify-between items-center cursor-pointer"
                >
                  Pages{" "}
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      activeSub === "pages" ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {activeSub === "pages" && (
                    <motion.ul
                      
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-3 mt-2 space-y-2 p-2 rounded"
                    >
                      <li>
                        <Link to="shop" onClick={() => setOpenmenu(false)}>
                          Shop
                        </Link>
                      </li>
                      <li>
                        <Link to="team" onClick={() => setOpenmenu(false)}>
                          Team
                        </Link>
                      </li>
                      <li>
                        <Link to="review" onClick={() => setOpenmenu(false)}>
                          Review
                        </Link>
                      </li>
                      <li>
                        <Link to="cart" onClick={() => setOpenmenu(false)}>
                          Cart
                        </Link>
                      </li>
                      <li>
                        <Link to="checkout" onClick={() => setOpenmenu(false)}>
                          Checkout
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* Blog Submenu */}
              <li className="w-full">
                <div
                  onClick={() =>
                    setActiveSub((prev) => (prev === "blog" ? null : "blog"))
                  }
                  className="flex justify-between items-center cursor-pointer"
                >
                  Blog{" "}
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      activeSub === "blog" ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {activeSub === "blog" && (
                    <motion.ul
                      
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        type: "tween",
                      }}
                      className="ml-3 mt-2 space-y-2 p-2 rounded"
                    >
                      <li>
                        <Link to="" onClick={() => setOpenmenu(false)}>
                          Blog1
                        </Link>
                      </li>
                      <li>
                        <Link to="" onClick={() => setOpenmenu(false)}>
                          Blog2
                        </Link>
                      </li>
                      <li>
                        <Link to="" onClick={() => setOpenmenu(false)}>
                          Blog3
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link to="/" onClick={() => setOpenmenu(false)}>
                  Faq's
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
