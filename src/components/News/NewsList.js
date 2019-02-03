import React from 'react';


const NewsCollection = (props) => {


    const newsList = props.news.map((n, i) => {
        if (n.urlToImage && n.description && i <= 3) { //make sure news has at least some image and description, and that author name is not a link

            //limit to 3 results

            return <a className="news" key={i} href={n.url} target="_blank" rel="noopener noreferrer">

                <img src={n.urlToImage} className="newsPicture" alt="news"/>

                <div className="newsDescription">
                    <div className="newsAuthor">{n.title}</div>

                    {n.description}
                </div>


            </a>;
        } else return false


    });
    return <div>{newsList}</div>;


};

export default NewsCollection;

