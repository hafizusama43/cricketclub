import React from 'react'
import '../css/news.css'
import NewsPageApi from '../Components/api/newsPage'
import NewsPage from './Cards/NewsPage'



const News = () => {
    return (
        <>
            <div className="news">
                
                 {
                     NewsPageApi.map((curVal,index)=>{
                         return <NewsPage key={index} image={curVal.image} heading={curVal.heading} source={curVal.source} />
                     })
                 }
                
            </div>

        </>
    )
}

export default News
