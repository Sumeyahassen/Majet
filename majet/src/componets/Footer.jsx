import React, { useState } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";
function Footer() {
  const [SocialIcons, setSocialIcons] = useState([
    { Icon: FaFacebook, color: "text-blue-600" },
    { Icon: FaInstagram, color: "text-pink-500" },
    { Icon: FaLinkedin, color: "text-blue-700" },
    { Icon: FaTelegram, color: "text-blue-400" },
  ]);
  return (
    <div className="shadow p-16 bg-lime-200 ">
      <ul className="flex items-center justify-center gap-10">
        {SocialIcons.map(({ Icon, color }, index) => (
          <li key={index}>
            <Icon
              size={30}
              className={`transition transform hover:scale-110 ${color}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
