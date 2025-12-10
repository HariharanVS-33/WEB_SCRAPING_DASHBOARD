import SearchBar from "./components/SearchBar";
import SentimentCards from "./components/SentimentCards";
import ChartSection from "./components/ChartSection";
import ReviewsList from "./components/ReviewsList";
import './App.css';
import { useState } from "react";

function App(){
  const products = {
    iphone:{
      sentiment:{positive: 70, neutral: 20, negative: 10 },
    reviews:[
      {sentiment: 'positive', text: 'Great product! Highly recommend.'},
      {sentiment: 'negative', text: 'Not what I expected, quality could be better.'},
      {sentiment: 'neutral', text: 'It is okay, nothing special.'}
    ],
  },
    laptop:{ 
      sentiment: {positive: 50, neutral: 30, negative: 20 },
    reviews:[
      {sentiment: 'positive', text: 'Excellent performance and value for money.'},
      {sentiment: 'negative', text: 'Battery life is disappointing.'},
      {sentiment: 'neutral', text: 'Average laptop, meets basic needs.'}
    ],
  },
    headphones:{ 
      sentiment: {positive: 80, neutral: 15, negative: 5 },
    reviews:[
      {sentiment: 'positive', text: 'Amazing sound quality! Love it.'},
      {sentiment: 'positive', text: 'The build quality is stunning.'},
      {sentiment: 'positive', text: 'Decent headphones.'},
      {sentiment: 'positive', text: 'Better sound and comfortable to wear.'}
    ],
  },
};

  const [sentimentData, setSentimentData] = useState({
        positive: 60,
        neutral: 25,
        negative: 15,
    });

  const [reviewsData, setReviewsData] = useState([
        {sentiment: "neutral", text: "Search a product to see sentiment analysis."}
    ]);

  const handleSearch = () => {
    const key = query.toLowerCase();
    if(products[key]){
      setSentimentData(products[key].sentiment);
      setReviewsData(products[key].reviews);
    } else {
      setSentimentData({positive:0, neutral:0, negative:0});
      setReviewsData([{sentiment:"neutral", text:"No data found for the searched product."}]);
    }
  }

  const [query, setQuery] = useState("");

  return(
    <div className="app">
      <header className="app-header">
        <h1>Product Sentiment Analyzer</h1>
        <p>Welcome! Analyze product sentiments with ease.</p>
      </header>

      <section className="top-section">
        <SearchBar 
          query={query} 
          setQuery={setQuery} 
          onSearch={handleSearch}
        />
      </section>
      
      <section className="card-section">
        <SentimentCards data={sentimentData}/>
      </section>

      <section className="bottom-section">
        <div className="chart-container">
          <ChartSection sentiment={sentimentData}/>
        </div>

        <div className="reviews-container">
          <ReviewsList data={reviewsData}/>
        </div>
      </section>
      
    </div>
  );
}

export default App;