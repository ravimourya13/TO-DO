import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Internal CSS */}
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
          }
          .carousel { 
            width: 100%;
            height: 300px;
            overflow: hidden;
            position: relative;
            margin-top: 50px;
          }
          .slides {
            display: flex;
            width: 300%;
            animation: slide 12s infinite;
          }
          .slide {
            width: 100%;
            flex-shrink: 0;
          }
          .slide img {
            width: 100%;
            height: 300px;
            object-fit: cover;
          }
          @keyframes slide {
            0% { transform: translateX(0); }
            33% { transform: translateX(-100%); }
            66% { transform: translateX(-200%); }
            100% { transform: translateX(0); }
          }
          .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            padding: 40px 20px;
          }
          .card {
            background: white;
            width: 250px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            overflow: hidden;
            transition: 0.3s ease;
          }
          .card:hover {
            transform: translateY(-5px);
          }
          .card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }
          .card .content {
            padding: 15px;
          }
          .card .content h3 {
            margin-bottom: 10px;
            color: #333;
          }
          .card .content p {
            font-size: 14px;
            color: #555;
          }
        `}
      </style>

      {/* Carousel */}
      {/* <div className="carousel">
        <div className="slides">
          <div className="slide">
            <img src="https://www.shutterstock.com/image-vector/cybersecurity-information-network-protection-future-600nw-1552462901.jpg" alt="Slide 1" />
          </div>
          <div className="slide">
            <img src="https://s7d1.scene7.com/is/image/canon/Hero_cybersecurity_category:5-1-Large?wid=2700&hei=540&fmt=webp-alpha" alt="Slide 2" />
          </div>
          <div className="slide">
            <img src="https://via.placeholder.com/1200x300?text=Boost+Productivity" alt="Slide 3" />
          </div>
        </div>
      </div> */}

      {/* Cards */}
      <div className="card-container">
        <div className="card">
          <img src="https://cdn-icons-png.flaticon.com/512/762/762686.png" alt="Task" />
          <div className="content">
            <h3>Easy Task Management</h3>
            <p>Create and manage your tasks efficiently with our simple and intuitive interface.</p>
          </div>
        </div>

        <div className="card">
          <img src="https://img.freepik.com/free-vector/shield_78370-582.jpg?semt=ais_items_boosted&w=740" alt="Secure" />
          <div className="content">
            <h3>Secure & Private</h3>
            <p>Your data is encrypted and securely stored. Only you have access to your tasks.</p>
          </div>
        </div>

        <div className="card">
          <img src="https://img.freepik.com/free-vector/real-time-sync-concept-illustration_114360-457.jpg?semt=ais_hybrid&w=740" alt="Sync" />
          <div className="content">
            <h3>Sync Across Devices</h3>
            <p>Access your ToDo list from any device, anywhere at any time.</p>
          </div>
        </div>

        <div className="card">
          <img src="https://img.freepik.com/free-vector/shield_78370-582.jpg?semt=ais_items_boosted&w=740" alt="Secure" />
          <div className="content">
            <h3>Secure & Private</h3>
            <p>Your data is encrypted and securely stored. Only you have access to your tasks.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
