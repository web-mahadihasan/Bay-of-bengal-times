import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex flex-col md:flex-row font-semibold text-lg items-center bg-base-200 p-4 gap-6 rounded-sm">
            <p className="min-w-max p-3 bg-[#D72050] rounded-sm text-white font-medium">Breaking News</p>
            <Marquee pauseOnHover={true} className="text-[#403F3F]">
                <Link to={"/news"}>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</Link>
                <p className="px-6"> | </p>
                <Link>California to phase out sales of gas-powered cars"</Link>
                <p className="px-6"> | </p>
                <Link>America Imported Over $6 Billion in Goods From Russia Since Ukraine Invasion</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;