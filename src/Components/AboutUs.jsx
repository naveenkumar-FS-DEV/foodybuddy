import "../Styles/aboutus.css";

const AboutUs = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-img">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9s2cyyRlw0n8lpSxmpSK8oB5pUIVmK2NvlQ&s" />
        </div>
        <div className="about-content">
          <h3 style={{ color: "#FDC100" }}>About Us</h3>
          <h4 style={{ color: "#FDC100" }}>
            Welcome to FoodyBuddy Coimbatore!
          </h4>
          <p>
            At FoodyBuddy, we’re passionate about bringing the finest culinary
            experiences to your fingertips. Located in the heart of Coimbatore,
            we connect food lovers with the best local restaurants, eateries,
            and home chefs in the city. Whether you’re craving traditional South
            Indian delicacies, global cuisines, or something in between, we’re
            here to make your food journey seamless and satisfying.
          </p>
          <h4 style={{ color: "#FDC100" }}>Our Mission</h4>
          <p>
            Our mission is simple – to make every meal an unforgettable
            experience. By curating a platform that showcases the most
            delicious, diverse, and authentic food options, we aim to satisfy
            your hunger while supporting local food businesses and
            entrepreneurs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
