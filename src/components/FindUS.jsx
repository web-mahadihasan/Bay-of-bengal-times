import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUS = () => {
  return (
    <div>
      <h4 className="text-xl font-semibold my-4">Find us on</h4>
      <div className="join join-vertical flex *:justify-start  *:bg-base-100 *:font-medium *:text-[#706F6F]">
        <button className="btn join-item">
            <span className="p-2 bg-base-200 rounded-full text-blue-800"><FaFacebookF size={16} /></span>
            <span className="text-[#706F6F]">Facebook</span>
        </button>
        <button className="btn join-item">
            <span className="p-2 bg-base-200 rounded-full text-blue-400"><FaTwitter size={16} /></span>
            <span className="text-[#706F6F]">Twitter</span>
        </button>
        <button className="btn join-item">
            <span className="p-2 bg-base-200 rounded-full text-pink-600"><FaInstagram size={16} /></span>
            <span className="text-[#706F6F]">Instagram</span>
        </button>
      </div>
    </div>
  );
};

export default FindUS;
