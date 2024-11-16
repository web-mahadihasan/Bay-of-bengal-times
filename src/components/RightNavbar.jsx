import FindUS from "./FindUS";
import SocialLogin from "./SocialLogin";
import swimming from "../assets/swimming.png";
import classpic from "../assets/class.png";
import playground from "../assets/playground.png";

const RightNavbar = () => {
  return (
    <div>
      <SocialLogin />
      <section className="mt-8">
        <FindUS />
      </section>
      <section className="py-5 px-2 bg-gray-200 mt-12 rounded">
        <h3 className="text-xl font-semibold text-black/85 mb-6 px-4">Q zone</h3>
        <div className="space-y-4">
          <div>
            <img src={swimming} alt="" className="mx-auto" />
          </div>
          <div>
            <img src={classpic} alt="" className="mx-auto"/>
          </div>
          <div>
            <img src={playground} alt="" className="mx-auto"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RightNavbar;
