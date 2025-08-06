import React from 'react'
import { Link } from 'react-router-dom';

const Classes = () => {

     const products = [
    {
      title: "WINNER WHEY GOLD",
      price: 16.74,
      rating: 5,
      image: "/assets/images/img47.jpg",
    },
    {
      title: "100% WHEY PRO",
      price: 32.56,
      rating: 4,
      image: "/assets/images/img48.jpg",
    },
    {
      title: "DYNAMITE BCAA’S",
      price: 32.56,
      rating: 5,
      image: "/assets/images/img49.jpg",
    },

    {
      title: "DYNAMITE BCAA’S",
      price: 32.56,
      rating: 5,
      image: "/assets/images/img49.jpg",
    },

    {
      title: "DYNAMITE BCAA’S",
      price: 32.56,
      rating: 5,
      image: "/assets/images/img49.jpg",
    },

    {
      title: "DYNAMITE BCAA’S",
      price: 32.56,
      rating: 5,
      image: "/assets/images/img49.jpg",
    },

    {
      title: "DYNAMITE BCAA’S",
      price: 32.56,
      rating: 5,
      image: "/assets/images/img49.jpg",
    },

    {
      title: "DYNAMITE BCAA’S",
      price: 32.56,
      rating: 5,
      image: "/assets/images/img49.jpg",
    },

    {
      title: "DYNAMITE BCAA’S",
      price: 32.56,
      rating: 5,
      image: "/assets/images/img49.jpg",
    },
  ];



  return (
   <>
    <section className="whey-banner mb-5 mt-1">
      {/* <div className="overlay"> */}
        <div className="content">
          <h1>WINNER WHEY</h1>
          <h2>Ultra Filtered High Purity Protein</h2>
          <div className="stats">
            <div><strong>27g</strong><span>Protein</span></div>
            <div><strong>10g</strong><span>BCAA's</span></div>
            <div><strong>0g</strong><span>Fat</span></div>
            <div><strong>75</strong><span>Servings</span></div>
          </div>
          <div className="features">
            <p>✔ Contains BCAA’s</p>
            <p>✔ Muscle Mass Growth</p>
            <p>✔ 4 Tasty Flavours</p>
            <p>✔ Easy to Mix Powder</p>
          </div>
          {/* <button className="purchase-btn">PURCHASE NOW</button> */}
        </div>

        {/* Left Bodybuilder Image */}
        <img src="assets/images/img42.jpg" alt="Bodybuilder" className="left-bodybuilder" />

        {/* Right Main Bottle Image */}
        <img src="assets/images/img41.jpg" alt="Whey Bottle" className="right-bottle" />

        {/* Small Bottle */}
        <img src="assets/images/img43.jpg" alt="Small Bottle" className="small-bottle" />

        {/* Ingredients */}
        <img src="assets/images/img44.jpg" alt="Ingredients" className="ingredients" />
      {/* </div> */}

      {/* Bottom icons row */}
      <div className="bottom-icons">
        <img src="assets/images/img45.jpg" alt="Icons" />
      </div>

      {/* Price Bubble */}
      <div className="price-bubble">
        <span>Rs.59</span>
      </div>
    </section>




     <div className="shop-section">
      {/* Top Filters */}
      <div className="shop-controls">
        <select>
          <option>Default sorting</option>
        </select>
        <select>
          <option>9 Products per page</option>
        </select>
      </div>

      <div className="shop-content">
        {/* Left: Products */}
        <div className="products-container">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <Link to="/detail">
              <img src={product.image} alt={product.title} />
              </Link>
             
              {/* <h4>{product.title}</h4> */}
              {/* <div className="stars">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div> */}
              {/* <p className="price">Rs.{product.price.toFixed(2)}</p> */}
              {/* <button className="add-to-cart">ADD TO CART</button> */}
            </div>
          ))}
        </div>

        {/* Right: Sidebar */}
        {/* <aside className="shop-sidebar">
          <input type="text" placeholder="Search products..." className="search-bar" />

          <div className="categories">
            <h4>Product Categories</h4>
            <ul>
              <li>Equipment (12)</li>
              <li>Nutrition (12)</li>
              <li>Test Category (1)</li>
              <li>Uncategorized (0)</li>
            </ul>
          </div>

          <div className="top-rated">
            <h4>Top Rated Products</h4>

            <div className="top-product">
              <img src="/assets/images/whey-gold.jpg" alt="Whey Gold" />
              <div>
                <p>Winner Whey Gold</p>
                <span>$16.74</span>
              </div>
            </div>

            <div className="top-product">
              <img src="/assets/images/treadmill.jpg" alt="Treadmill" />
              <div>
                <p>MDG Treadmill</p>
                <span>$89.37</span>
              </div>
            </div>
          </div>
        </aside> */}


        <aside className="shop-sidebar">
  {/* Search */}
  <input type="text" placeholder="Search products..." className="search-bar" />

  {/* Product Categories */}
  <div className="categories">
    <h4>Product Categories</h4>
    <ul>
      <li>Equipment (12)</li>
      <li>Nutrition (12)</li>
      <li>Test Category (1)</li>
      <li>Uncategorized (0)</li>
    </ul>
  </div>

  {/* Filter by Color */}
  <div className="filter-color">
    <h4 className='mt-4'>Filter By</h4>
    <select>
      <option>Any Color</option>
      <option>Red</option>
      <option>Black</option>
      <option>Blue</option>
    </select>
  </div>

  {/* Filter by Price */}
  <div className="filter-price">
    <h4>Filter by Price</h4>
    <input type="range" min="0" max="40" step="1" className="price-slider" />
    <button className="filter-btn">Filter</button>
    <p>Price: Rs.0 — Rs.40</p>
  </div>

  {/* Product Tags */}
  <div className="product-tags">
    <h4>Product Tags</h4>
    <div className="tags">
      <span className="tag">Beforemath</span>
      <span className="tag">Higher</span>
      <span className="tag">Humane Labs Raid</span>
      <span className="tag">Ol' English</span>
      <span className="tag">On Fire</span>
      <span className="tag">Pacific Standard</span>
    </div>
  </div>

  {/* Info Links */}
  <div className="information">
    <h4 className='mt-4'>Information</h4>
    <ul>
      <li><a href="#">About the Shop</a></li>
      <li><a href="#">Terms & Conditions</a></li>
       <li><a href="#">About the Shop</a></li>
      <li><a href="#">Terms & Conditions</a></li>
       <li><a href="#">About the Shop</a></li>
      <li><a href="#">Terms & Conditions</a></li>
    </ul>
  </div>

  {/* Top Rated Products */}
  <div className="top-rated">
    {/* <h4>Top Rated Products</h4> */}

    {/* <div className="top-product">
      <img src="/assets/images/whey-gold.jpg" alt="Whey Gold" />
      <div>
        <p>Winner Whey Gold</p>
        <span>Rs.16.74</span>
      </div>
    </div> */}

    {/* <div className="top-product">
      <img src="/assets/images/img49.jpg" alt="Treadmill" />
      <div>
        <p>MDG Treadmill</p>
        <span>Rs.89.37</span>
      </div>
    </div> */}
  </div>
</aside>

      </div>
    </div>
   
   </>
  )
}

export default Classes