import { useLoaderData, useNavigate} from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/RightNavbar";
import { FaArrowLeft} from "react-icons/fa";

const NewsDetails = () => {
    const newsData = useLoaderData()
    const detailsData = newsData.data
    const navigate = useNavigate()
    return (
        <div className="max-w-7xl mx-auto px-4 xl:px-0">
            <header>
                <Header/>
            </header>
            <main className="grid grid-cols-12 mt-24 gap-6">
                <section className="col-span-9">
                <h3 className="my-5 text-xl font-semibold text-[#403F3F] ml-2">Bay of Bengal News Home</h3>
                    {detailsData?.map(news => (
                        <div key={news._id} className="card bg-base-100 border border-gray-200">
                            <figure className="p-8">
                                <img
                                src={news?.image_url}
                                alt={news?.title} className="w-full"/>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-3xl font-bold">{news?.title}</h2>
                                <p className="text-[#706F6F] leading-7 my-3">{news?.details}</p>
                                <button onClick={() => navigate(`/category/${news.category_id}`)} className="flex items-center gap-4 text-left px-8 py-3 rounded bg-[#D72050] text-white w-fit font-medium text-lg">
                                    <FaArrowLeft/>
                                    All news in this category
                                </button>
                            </div>
                        </div>))}
                </section>
                <aside className="col-span-3">
                    <RightNavbar/>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;