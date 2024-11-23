import { FaDiscord, FaTwitter, FaYoutube, FaMedium, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  // { href: "https://discord.com", icon: <FaInstagram /> },
  { href: "https://github.com/sanketbagad", icon: <FaGithub /> },
  { href: "https://www.linkedin.com/in/sanket-bagad-334444201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", icon: <FaLinkedin /> },
  { href: "https://youtube.com/@sanketbagad3027?si=gFy5Wpok9xemiKLb", icon: <FaYoutube /> },
  { href: "https://hashnode.com/@sanketbagad", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-blue py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          © Sanket Bagad
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
         
        </a>
      </div>
    </footer>
  );
};

export default Footer;
