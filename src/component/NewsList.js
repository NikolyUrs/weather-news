import React from "react";

function NewsList({ title, description, urlToImage, url }) {

    return (

        <div className="col-6 ">
            <div className="news-item">
                <img src={urlToImage} alt="Здесь должна быть картинка новости" className="news-img" />
                <h5><a href={url}>{title}</a></h5>
                <p>{description}</p>
            </div>
        </div>

    )
}
export default NewsList;