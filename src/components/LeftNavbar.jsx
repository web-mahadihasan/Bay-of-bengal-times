import { useEffect, useState } from "react";
import {NavLink } from "react-router-dom";

const LeftNavbar = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        try {
            fetch(`https://openapi.programming-hero.com/api/news/categories`)
            .then(res => res.json())
            .then(data => setCategory(data.data.news_category))
        } catch (error) {
            console.log("Network not responded")
        }
    }, [])
    return (
        <div className="flex flex-col gap-2">
            {
                category?.map(newsCategory => 
                <NavLink key={newsCategory.category_id} to={`/category/${newsCategory.category_id}`} className="shadow-sm px-8 py-3 rounded-md text-xl text-[#9F9F9F] font-medium w-full hover:bg-base-300">
                    {newsCategory.category_name}
                </NavLink>)
            }
        </div>
    );
};

export default LeftNavbar;