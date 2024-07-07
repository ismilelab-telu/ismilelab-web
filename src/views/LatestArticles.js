/* eslint-disable semi */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticleList } from "@store/api/article";
import { Link } from "react-router-dom";

const tabs = ["All Items", "News", "Announcements", "Tutorials"];

function ArticleTabs({ activeTab, setActiveTab }) {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

function formatDate(isoDateString) {
  const date = new Date(isoDateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <figure className="article-image">
        <img src={article.image} alt="Article Thumbnail" />
      </figure>
      <div className="article-content">
        <div className={`article-tag ${article.category.replace(/\s/g, "")}`}>
          {article.category}
        </div>

        <h3 className="article-title">{article.title}</h3>
        <p className="article-summary">{article.summary}</p>
        <div className="article-footer">
          <div className="author">
            <img src={article.authorImage} alt="Author" />
            <div className="author-info">
              <p className="author-name">{article.author}</p>
              <p className="author-date">{formatDate(article.date)}</p>
            </div>
          </div>
          <Link to={`/article/${article.id}`} className="read-more">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

function LatestArticles() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("All Items");
  const { articles } = useSelector((state) => state.article);
  const filteredArticles = articles.filter(
    (article) => activeTab === "All Items" || article.type === activeTab
  );

  useEffect(() => {
    dispatch(getArticleList());
    console.log(articles);
  }, []);

  return (
    <section className="latest-articles">
      <h1>Latest Articles</h1>
      <p>Discover the most outstanding AI Articles</p>
      <ArticleTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="articles-grid">
        {filteredArticles.map((article) => (
          <>
            <ArticleCard key={article.id} article={article} />
            {/* TODO: DUMMY ARTICLE FOR DEV */}
            <ArticleCard key={2} article={article} />
            <ArticleCard key={3} article={article} />
            <ArticleCard key={4} article={article} />
            <ArticleCard key={5} article={article} />
            <ArticleCard key={6} article={article} />
          </>
        ))}
      </div>
    </section>
  );
}

export default LatestArticles;
