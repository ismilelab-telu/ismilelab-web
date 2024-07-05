import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import parse from 'html-react-parser';
import { getArticle } from "@store/api/post"


import '@src/assets/scss/landing.scss'

import logo from '@src/assets/images/landing/logo-vertical-resize.png';
import gradientVector from '@src/assets/images/landing/gradient-landingpage.png';
import templateFrame from '@src/assets/images/landing/template-frame.png';
import eyes3D from '@src/assets/images/landing/eyes_3d.png';
import LatestArticles from './LatestArticles'; // Ensure this is imported if it's used

const Article = () => {
  const dispatch = useDispatch()
  const { id } = useParams(); // Retrieve the article ID from the URL
  // const article = useSelector(state => state.articles.articles.find(article => article.id === parseInt(id)));
  const { article, isLoading } = useSelector((state) => state.post)

  useEffect(()=>{
    console.log(id)
    dispatch(getArticle(id))

  }, [id])

  if (!article) {
    return <div>No article found.</div>;
  }

  return (
    <>
      {/* NAVBAR */}
      <section className='navbarx'>
        <div className='logo-wrapperx'>
          <Link to="/"><img src={logo} height={'100%'} className='logox' alt='iSmile Logo' /></Link>
        </div>
        <div className='contentx'>
          <div className='buttonx aboutx'>
            <Link to='/about-lab'>About Lab</Link>
          </div>
          <Link to='/login'>
            <div className='buttonx loginx'>Login</div>
          </Link>
        </div>
      </section>

      {/* ARTICLE PAGE */}
      <section className='article-section'>
        <h1 className='article-title'>{article.title}</h1>
        <div className='divider'></div>
        <div className="author-info">
          <div className="author-details">
            <img src={article.authorImage} alt="Author" className="author-image" />
            <div>
              <span className="author-name">{article.author}</span>
              <span className="author-date">{article.date}</span>
            </div>
          </div>
          <span className='read-time'>{article.readTime}</span>
        </div>

        <img src={article.image} alt="Article Main" className="article-main-image" />
        {/* <p className='article-summary'>{article.summary}</p> */}
        <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }}></div>
      </section>

      {/* BACKGROUND GRADIENT
      <img src={gradientVector} height={'100%'} className='background-gradientx' alt='Gradient Element' /> */}

      {/* LATEST ARTICLES */}
      <LatestArticles />

      {/* FOOTER */}
      <div className='footer-landing'>
        <div className='wrapper'>
          <h3>Address</h3>
          <p>Gedung TULT 1405 Lantai 14, Jl. Telekomunikasi Terusan Buah Batu, Bandung-40257, Indonesia</p>
          <p>Email: sealaboratory@telkomuniversity.ac.id</p>
          <p>OA Line: @748waapd</p>
        </div>
      </div>
    </>
  );
};

export default Article;
