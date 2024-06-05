export const RatingSelector = ({h3, min, max, onRatingChange}) => {

    const handleRatingChange = (rating, e) => {
        e.preventDefault();
        if (onRatingChange) {
            onRatingChange(rating, e);
        }
    };

    const ratings = Array.from({length: max - min + 1}, (_, i) => min + i);

    return (
        <div>
            <h3>{h3}</h3>
            {ratings.map((ratingNumber, index) => (
                <button
                    key={index}
                    onClick={(e) => handleRatingChange(ratingNumber, e)}
                >
                    {ratingNumber}
                </button>
            ))}
        </div>
    );
};
