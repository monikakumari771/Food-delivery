import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/header";
import Footer from "./component/footer";
import Menu from "./component/Menu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <main className="main">
        {/* Hero Section  */}
        <section id="hero" className="hero section light-background">
          <div className="container">
            <div className="row gy-4 justify-content-center justify-content-lg-between">
              <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">
                  Enjoy Your Healthy
                  <br />
                  Delicious Food
                </h1>
                <p data-aos="fade-up" data-aos-delay="100">
                  We are team of talented designers making websites with
                  Bootstrap
                </p>
                <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                  <a href="#book-a-table" className="btn-get-started">
                    Booka a Table
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                    className="glightbox btn-watch-video d-flex align-items-center"
                  >
                    <i className="bi bi-play-circle"></i>
                    <span>Watch Video</span>
                  </a>
                </div>
              </div>
              <div
                className="col-lg-5 order-1 order-lg-2 hero-img"
                data-aos="zoom-out"
              >
                <img
                  src="img/hero-img.png"
                  className="img-fluid animated"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <h2>
              About Us
              <br />
            </h2>
            <p>
              <span>Learn More</span>{" "}
              <span className="description-title">About Us</span>
            </p>
          </div>

          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
                <img src="img/about.jpg" className="img-fluid mb-4" alt="" />
                <div className="book-a-table">
                  <h3>Book a Table</h3>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>
              <div className="col-lg-5" data-aos="fade-up" data-aos-delay="250">
                <div className="content ps-0 ps-lg-5">
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>{" "}
                      <span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>{" "}
                      <span>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit.
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>{" "}
                      <span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        trideta storacalaperda mastiro dolore eu fugiat nulla
                        pariatur.
                      </span>
                    </li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident
                  </p>

                  <div className="position-relative mt-4">
                    <img src="img/about-2.jpg" className="img-fluid" alt="" />
                    <a
                      href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                      className="glightbox pulsating-play-btn"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="why-us section light-background">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="why-box">
                  <h3>Why Choose Yummy</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor in reprehenderit Asperiores
                    dolores sed et. Tenetur quia eos. Autem tempore quibusdam
                    vel necessitatibus optio ad corporis.
                  </p>
                  <div className="text-center">
                    <a href="#" className="more-btn">
                      <span>Learn More</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 d-flex align-items-stretch">
                <div
                  className="row gy-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="col-xl-4">
                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                      <i className="bi bi-clipboard-data"></i>
                      <h4>Corporis voluptates officia eiusmod</h4>
                      <p>
                        Consequuntur sunt aut quasi enim aliquam quae harum
                        pariatur laboris nisi ut aliquip
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-xl-4"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                      <i className="bi bi-gem"></i>
                      <h4>Ullamco laboris ladore lore pan</h4>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-xl-4"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                      <i className="bi bi-inboxes"></i>
                      <h4>Labore consequatur incidid dolore</h4>
                      <p>
                        Aut suscipit aut cum nemo deleniti aut omnis. Doloribus
                        ut maiores omnis facere
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="stats section dark-background">
          <img src="img/stats-bg.jpg" alt="" data-aos="fade-in" />

          <div
            className="container position-relative"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="232"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Clients</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="521"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Projects</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1453"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Hours Of Support</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="32"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Workers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section --> */}
        <Menu />

        {/* <!-- Book A Table Section --> */}
        <section id="book-a-table" className="book-a-table section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Book A Table</h2>
            <p>
              <span>Book Your</span>{" "}
              <span className="description-title">
                Stay With Us
                <br />
              </span>
            </p>
          </div>

          <div className="container">
            <div className="row g-0" data-aos="fade-up" data-aos-delay="100">
              <div
                className="col-lg-4 reservation-img"
                style={{ backgroundImage: `url("img/reservation.jpg")` }}
              ></div>

              <div
                className="col-lg-8 d-flex align-items-center reservation-form-bg"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <form
                  action="forms/book-a-table.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="row gy-4">
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required=""
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required=""
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        id="phone"
                        placeholder="Your Phone"
                        required=""
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="date"
                        name="date"
                        className="form-control"
                        id="date"
                        placeholder="Date"
                        required=""
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="time"
                        className="form-control"
                        name="time"
                        id="time"
                        placeholder="Time"
                        required=""
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="number"
                        className="form-control"
                        name="people"
                        id="people"
                        placeholder="# of people"
                        required=""
                      />
                    </div>
                  </div>

                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div className="text-center mt-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your booking request was sent. We will call back or send
                      an Email to confirm your reservation. Thank you!
                    </div>
                    <button type="submit">Book a Table</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Contact Section --> */}
        <section id="contact" className="contact section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>
              <span>Need Help?</span>{" "}
              <span className="description-title">Contact Us</span>
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="mb-5">
              <iframe
                style={{ width: "100%", height: "400px" }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                frameBorder="0"
                allowFullScreen
                title="Google Map"
              ></iframe>
            </div>

            <div className="row gy-4">
              <div className="col-md-6">
                <div
                  className="info-item d-flex align-items-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="icon bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Address</h3>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="info-item d-flex align-items-center"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="icon bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call Us</h3>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="info-item d-flex align-items-center"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="icon bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="info-item d-flex align-items-center"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <i className="icon bi bi-clock flex-shrink-0"></i>
                  <div>
                    <h3>
                      Opening Hours
                      <br />
                    </h3>
                    <p>
                      <strong>Mon-Sat:</strong> 11AM - 23PM;{" "}
                      <strong>Sunday:</strong> Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required=""
                  />
                </div>

                <div className="col-md-6 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    required=""
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required=""
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>

                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />

      {/* <!-- Scroll Top --> */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default App;
