function ReviewsList({ data }) {
    const positiveReviews = data.filter(r => r.sentiment.toLowerCase() === 'positive').slice(0, 3);
    const negativeReviews = data.filter(r => r.sentiment.toLowerCase() === 'negative').slice(0, 3);

    return (
        <div className="reviews-list">
            <h2>Highlighted Reviews</h2>
            <h3>Positive Reviews</h3>
            <ul className="reviews-group">
                {positiveReviews.length > 0 ? positiveReviews.map((r, index) => (
                <li key={`pos-${index}`} className="review-item review-item--positive">
                    <strong>{r.sentiment}</strong>: {r.text}
                </li>
                )) : (<li className="review-empty">No positive reviews available.</li>)}
            </ul>
            <h3>Negative Reviews</h3>
            <ul className="reviews-group">
                {negativeReviews.length > 0 ? negativeReviews.map((r, index) => (
                <li key={`neg-${index}`} className="review-item review-item--negative">
                    <strong>{r.sentiment}</strong>: {r.text}
                </li>
                )) : (<li className="review-empty">No negative reviews available.</li>)}
            </ul>
        </div>
    );
}

export default ReviewsList;