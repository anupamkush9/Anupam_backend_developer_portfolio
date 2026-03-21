import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import mediumArticles from "./data/medium_article";

export default function MediumArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setArticles(mediumArticles);
    setLoading(false);
  }, []);

  return (
    <div className="container py-5" id="medium-articles">
      <h1 data-aos="fade-right" className="mb-4 os-font"> My Medium Articles</h1>

      <div className="text-center mb-5">
        <span className="lead text-warning" style={{ fontWeight: 500 }}>
          <i className="bi bi-lightbulb" style={{ marginRight: "8px" }}></i>
          Empowering developers to level up their skills!
        </span>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" variant="warning" />
          <p className="text-secondary mt-2">Fetching articles...</p>
        </div>
      ) : articles.length === 0 ? (
        <p className="text-center text-secondary">No articles found.</p>
      ) : (
        <div className="row d-flex justify-content-center align-content-center">
          {articles.map((article, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 medium-article" key={index} data-aos="flip-left" data-aos-duration="1000">
              <div
                className="card h-100 shadow-sm"
                style={{
                  backgroundColor: "#1c1c1c",
                  border: "none",
                  borderRadius: "12px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <img
                  src={ article.imageUrl }
                  className="card-img-top"
                  alt={article.title}
                  style={{ height: "200px", objectFit: "cover", borderRadius: "12px 12px 0 0" }}
                />

                <div className="card-body d-flex flex-column">
                  <h5
                    className="card-title"
                    style={{ color: "#ffbd39", fontSize: "1.1rem", fontWeight: 600 }}
                  >
                    {article.title.length > 55
                      ? article.title.slice(0, 55) + "..."
                      : article.title}
                  </h5>

                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-warning mt-auto"
                    style={{
                      backgroundColor: "#ffbd39",
                      border: "none",
                      color: "#000",
                      fontWeight: "600",
                    }}
                  >
                    Read on Medium
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
