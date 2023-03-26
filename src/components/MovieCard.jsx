import React from 'react';

export default function MovieList({ movie, selectedRating, onRatingChange }) {
  const { id, rated, duration, year, name, description, img, rating } = movie;

  // Calculate the average rating
  let sum = 0;
  for (let i = 0; i < rating.length; i++) {
    sum += rating[i];
  }
  const avgRating = sum / rating.length;

  // log: average rating of each movie
  console.log(`The average rating of the movie: "${name}" is ${avgRating}`)

  // log: total number of ratings of each movie
  console.log(`The total number of ratings of the movie: "${name}" is ${rating.length}`)

  return (
    <div key={id} className="movie-col">
      <div className='movie'>
        <img src={img} alt={name} />

        <div className='movie-info'>
          <ul className='extra-movie-info'>
            <li>
              <span className='rated'>{rated}</span>
            </li>
            <li>
              <span>{duration}</span>
            </li>
            <li>
              <div className='movie-year'>
                <span>{year}</span>
              </div>
            </li>
          </ul>

          <h2>{name}</h2>

          {/* stars rating */}
          <div className='rating-wrapper'>
            <fieldset className="rating">
              {[5, 4, 3, 2, 1].map(rate => (
                <div key={rate}>
                  <input
                    id={`movie-${id}-${rate}`}
                    className='star-btn'
                    type="radio"
                    name={`movie-${id}`}
                    value={rate}
                    onClick={() => onRatingChange(id, rate)}
                    defaultChecked={selectedRating === String(rate)}
                  />
                  
                  {/* change the color of the labels of the stars with a value less than or equal to the average rating */}
                  <label htmlFor={`movie-${id}-${rate}`} className={rate <= avgRating ? 'gold-star' : ''}>☆</label>
                </div>
              ))}
            </fieldset>

            <span>{avgRating.toFixed(2)} ({rating.length} ratings)</span>
          </div>

          <small>{description}</small>
        </div>
      </div>
    </div>
  );
}
