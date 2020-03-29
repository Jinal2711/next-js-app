import React, { PureComponent } from "react";
import StarRatings from "react-star-ratings";
const Rating = ({ rate }) => {
  return (
    <div>
      <StarRatings
        rating={rate}
        starRatedColor="white"
        numberOfStars={10}
        name="rating"
        starDimension="20px"
        starSpacing="1px"
        starEmptyColor="rgb(109, 122, 130)"
        starRatedColor="rgb(203, 211, 227)"
      />
    </div>
  );
};

export default Rating;
