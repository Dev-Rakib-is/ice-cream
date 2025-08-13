import footerData from "../data/footer";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-purple text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 px-2.5">
        {/* Logo Section */}
        <div className="flex flex-col gap-2 items-start text-left md:items-center md:justify-center ">
          <img src={footerData.logo} alt="Footer Logo" className="w-10 h-10" />
          <p className="text-pink font-semibold text-base">
            ice<span className="text-white">Delight</span>
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-[22px] mb-[30px]">
            {footerData.columns[0].title}
          </h3>
          <ul className="columns-2 gap-x-4 text-sm space-y-[23px] list-disc marker:text-pink">
            {footerData.columns[0].links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.url}
                  className="hover:underline underline-offset-4 block font-normal text-sm text-footerliColor"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Address & Email */}
        <div className="flex flex-col gap-6 text-sm text-white justify-start">
          {/* Address */}
          <div className="flex gap-4 items-start">
            <MapPin className="mt-1" />
            <div>
              <p className="text-base font-semibold">
                {footerData.columns[2].Contact[0].label}
              </p>
              <p className="text-sm font-normal text-footerliColor">
                {footerData.columns[2].Contact[0].value}
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4 items-start">
            <Mail className="mt-1" />
            <div>
              <p className="font-semibold text-base">
                {footerData.columns[2].Contact[1].label}
              </p>
              <motion.a
                href={`mailto:${footerData.columns[2].Contact[1].value}`}
                whileTap={{ scale: 0.9 }}
                className="font-normal text-footerliColor text-sm cursor-pointer hover:underline active:text-pink underline-offset-4"
              >
                {footerData.columns[2].Contact[1].value}
              </motion.a>
            </div>
          </div>
        </div>

        {/* Phone & Social */}
        <div className="flex flex-col gap-6">
          {/* Phone */}
          <div className="flex gap-4 items-start">
            <Phone className="mt-1" />
            <motion.a
              href={`tel:${footerData.columns[3].title}`}
              whileTap={{ scale: 0.95 }}
              className="text-[20px] font-bold text-white cursor-pointer active:text-pink"
            >
              {footerData.columns[3].title}
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <motion.a
              href="#"
              whileTap={{ scale: 0.95 }}
              className="bg-locarionBg rounded-full w-[46px] h-[46px] flex justify-center items-center cursor-pointer"
            >
              <Facebook />
            </motion.a>
            <motion.a
              href="#"
              whileTap={{ scale: 0.95 }}
              className="bg-locarionBg rounded-full w-[46px] h-[46px] flex justify-center items-center cursor-pointer"
            >
              <Instagram />
            </motion.a>
            <motion.a
              href="#"
              whileTap={{ scale: 0.95 }}
              className="bg-locarionBg rounded-full w-[46px] h-[46px] flex justify-center items-center cursor-pointer"
            >
              <Twitter />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
