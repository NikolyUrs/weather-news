import React, { useEffect, useState } from 'react';
import NewsList from './NewsList';
import './news.css'

function News() {
    const [news, SetNews] = useState([])


    const getNews = async () => {
        await fetch('https://newsapi.org/v2/top-headlines?country=ru&apiKey=af1a192bc5cc47318b87c6c0c60cd70a')
            .then(response => response.json())
            .then(result => {
                SetNews(result.articles)
                console.log(result)
            })
    }

    useEffect(() => {
        getNews();
    }, []);

    return (

        <div className='text-center mt-5'>
            <h1>News</h1>
            <div className='row'>
                {news.map(({ title, description, urlToImage, url }, index) => {
                    return <NewsList
                        title={title}
                        description={description}
                        urlToImage={urlToImage}
                        url={url}
                        key={index}
                    />
                })
                }
            </div>
        </div>

    )
}

export default News;