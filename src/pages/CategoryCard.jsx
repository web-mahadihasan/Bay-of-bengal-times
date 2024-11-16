import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryCard = () => {
    const {data:newsData} = useLoaderData()
    
    return (
        <div className="space-y-3">
            <h3 className="my-5 text-xl font-semibold text-[#403F3F]">Bay of Bengal News Home</h3>
            <div className="space-y-3">
                {
                    newsData.map(news => <NewsCard key={news._id} news={news}/>)
                }
            </div>
        </div>
    );
};

export default CategoryCard;