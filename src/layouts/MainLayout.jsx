import { Outlet, useLoaderData } from "react-router-dom";
import BreakingNews from "../components/BreakingNews";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import LeftNavbar from "../components/LeftNavbar";
import RightNavbar from "../components/RightNavbar";
import { FaCalendar } from "react-icons/fa6";

const MainLayout = () => {
    const demoNews = useLoaderData()
    
    return (
        <div className="font-popins max-w-7xl mx-auto px-4 xl:px-0">
            <header>
                <Header/>
                <section>
                    <BreakingNews/>
                </section>
            </header>
            <nav className="my-8">
                <Navbar/>
            </nav>
            <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-20 gap-6">
                <aside>
                    <h3 className="my-5 text-xl font-semibold text-[#403F3F]">All Caterogy</h3>
                    <LeftNavbar/>
                    <div>
                        {
                            demoNews?.map(news => <div key={news.id} className="my-10">
                                <img src={news?.image} alt="" className="w-full"/>
                                <h4 className="text-lg my-3 text-[#403F3F] font-medium">{news?.title}</h4>
                                <div className="flex justify-between items-center text-black/65 text-lg">
                                    <p>{news?.category}</p>
                                    <p className="flex items-center gap-2"><FaCalendar/> {news?.posted_time}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </aside>
                <section className="col-span-2">
                    <Outlet/>
                </section>
                <aside>
                    <RightNavbar/>
                </aside>
            </main>
        </div>
    );
};

export default MainLayout;