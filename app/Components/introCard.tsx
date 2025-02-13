import { FaEnvelope, FaPhone, FaBirthdayCake, FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function IntroCard() {
  return (
    <div className="bg-gray-900 text-white rounded-2xl p-6 w-80 mx-auto shadow-lg flex flex-col items-center">
      <div className="bg-gray-800 p-3 rounded-xl mb-4">
        <img
          src="/avatar.png"
          alt="Avatar"
          className="w-20 h-20 rounded-lg"
        />
      </div>
      <h2 className="text-xl font-semibold">Om Kharche</h2>
      <p className="bg-gray-700 text-sm px-3 py-1 rounded-full mt-1">Full Stack Developer</p>

      <div className="mt-4 space-y-3 w-full text-sm">
        <div className="flex items-center gap-3 bg-gray-800 p-2 rounded-lg">
          <FaEnvelope className="text-yellow-400" />
          <span>omkarsmail@gmail...</span>
        </div>
        <div className="flex items-center gap-3 bg-gray-800 p-2 rounded-lg">
          <FaPhone className="text-yellow-400" />
          <span>+92 3159685392</span>
        </div>
        <div className="flex items-center gap-3 bg-gray-800 p-2 rounded-lg">
          <FaBirthdayCake className="text-yellow-400" />
          <span>2 March, 2003</span>
        </div>
        <div className="flex items-center gap-3 bg-gray-800 p-2 rounded-lg">
          <FaMapMarkerAlt className="text-yellow-400" />
          <span>Pune, India</span>
        </div>
      </div>

      <div className="flex gap-4 mt-5 text-xl">
        <FaGithub className="text-white hover:text-gray-500 cursor-pointer" />
        <FaLinkedin className="text-white hover:text-blue-500 cursor-pointer" />
        <FaTwitter className="text-white hover:text-blue-400 cursor-pointer" />
      </div>
    </div>
  );
}
