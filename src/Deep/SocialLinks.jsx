// components/SocialLinks.jsx
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { socialLinks } from "./constants";

const SocialLinks = () => (
  <div className="flex justify-center space-x-6 mb-12">
    {socialLinks.map((link, index) => {
      const Icon = {
        FaGithub,
        FaLinkedin,
        FaTwitter,
      }[link.icon];

      return (
        <a
          key={index}
          href={link.url}
          className="text-purple-400 hover:text-purple-300 mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon size={24} />
        </a>
      );
    })}
  </div>
);

export default SocialLinks;
