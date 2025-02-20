import React from "react";
import "./Farming.css";

const videos = [
  {
    title: "Introduction To Agriculture - Basic Concepts",
    url: "https://www.youtube.com/embed/WLepgs9K_s4"
  },
  {
    title: "Farming 101 – How to be a Farmer – Step by Step Guide Part 1",
    url: "https://www.youtube.com/embed/heTxEsrPVdQ"
  },
  {
    title: "How to Start a Small Farm | A Step-by-Step Guide",
    url: "https://www.youtube.com/embed/j2kNXOz9lao"
  },
  {
    title: "Back to the Basics: 8 Fundamentals of Agriculture",
    url: "https://www.youtube.com/embed/-sK2Ez4vsHw"
  },
  {
    title: "Starting a Farm: 7 Tips for Beginners",
    url: "https://www.youtube.com/embed/nDyiX6tA6lc"
  },
  {
    title: "Farming Basics",
    url: "https://www.youtube.com/embed/oSlMWUZbhrM"
  },
  {
    title: "Introduction to Agriculture",
    url: "https://www.youtube.com/embed/sBWVrJOZyJw"
  },
  {
    title: "Soil Preparation",
    url: "https://www.youtube.com/embed/8ulpy_GFLDk"
  },
  {
    title: "How to Grow Crops",
    url: "https://www.youtube.com/embed/heTxEsrPVdQ"
  },
  {
    title: "Organic Farming Basics",
    url: "https://www.youtube.com/embed/Z9HAy9EYKKs"
  },
  {
    title: "Water Management in Farming",
    url: "https://www.youtube.com/embed/AnnZFYXnlfw"
  },
  {
    title: "Understanding Crop Rotation",
    url: "https://www.youtube.com/embed/x2XljyE9FeQ"
  },
  {
    title: "Beginner's Guide to Fertilizers",
    url: "https://www.youtube.com/embed/0aNOPuXHCLQ"
  },
  {
    title: "Pest Control in Farming",
    url: "https://www.youtube.com/embed/AbjKwCS74Zg"
  },
  {
    title: "Seed Selection and Sowing Techniques",
    url: "https://www.youtube.com/embed/cc3-3s115mM"
  }
];

const FarmingVideos = () => {
  return (
    <div className="video-container">
      <h1> Farming Techniques</h1>
      <div className="video-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            <iframe
              width="100%"
              height="200"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmingVideos;