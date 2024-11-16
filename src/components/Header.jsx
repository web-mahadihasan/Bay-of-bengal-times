import moment from "moment";

const Header = () => {
    return (
        <div className="text-center py-8 space-y-2">
            <h2 className="font-logo text-7xl">Bay of Bengal Times</h2>
            <p className="text-lg text-gray-400">Journalism Without Fear or Favour</p>
            <p className="text-xl font-medium text-gray-600">{moment().format("dddd, MMMM Do, YYYY")}</p>
        </div>
    );
};

export default Header;