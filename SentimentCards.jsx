function SentimentCards({ data }) {
    return (
        <div className="sentiment-cards">
            <div className="card card--positive">
                <h3>Positive</h3>
                <p className="card-value">{data.positive}%</p> 
            </div>
            <div className="card card--neutral">
                <h3>Neutral</h3>
                <p className="card-value">{data.neutral}%</p>
            </div>
            <div className="card card--negative">
                <h3>Negative</h3>
                <p className="card-value">{data.negative}%</p>
            </div>
        </div>
    );
}

export default SentimentCards;