import { useEffect, useState } from "react";
import axios from "axios";

function Menu() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // configure vite config since it gives  cors error so change endpoint
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );

        setData(response.data.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);

  return (
    <>
      <section id="menu" className="menu section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Menu</h2>
          <p>
            <span>Check Our</span>{" "}
            <span className="description-title">Yummy Menu</span>
          </p>
        </div>

        <div className="container">
          <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div className="tab-pane fade active show" id="menu-starters">
              <div className="tab-header text-center">
                <p>Menu</p>
                <h3>Starters</h3>
              </div>

              <div className="row gy-5">
                {data?.map((item) => {
                  return (
                    <>
                      <div className="col-lg-4 menu-item">
                        <a
                          href="img/menu/menu-item-1.png"
                          className="glightbox"
                        >
                          <img
                            src={item.strCategoryThumb}
                            className="menu-img img-fluid"
                            alt=""
                          />
                        </a>
                        <h4>{item.strCategory}</h4>
                        <p className="ingredients">
                          {item.strCategoryDescription?.length > 100
                            ? item.strCategoryDescription.slice(0, 100) + "..."
                            : item.strCategoryDescription}
                        </p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
