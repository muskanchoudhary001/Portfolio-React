import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BiLogoGmail } from "react-icons/bi"
import { IoDocumentText } from "react-icons/io5";
import logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/muskan-choudhary-789759175/" target="_blank" rel='noopener noreferrer'>
          <FaLinkedin />
        </a>
        <a href="https://github.com/muskanchoudhary001" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:muskanchoudhary1303@gmail.com">
          <BiLogoGmail />
        </a>
        <a href="https://drive.google.com/file/d/1yj6VoxwMPx_6MH9oPvVBzbscejye10T3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <IoDocumentText />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
