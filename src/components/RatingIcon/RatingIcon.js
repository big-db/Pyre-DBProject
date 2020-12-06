import React from 'react';
import Flame from '../../assets/pyre-svgs/fire.svg'
import './RatingIcon.css'
export default function RatingIcon(props) {
    const {
      index,
      rating,
      hoverRating,
      onMouseEnter,
      onMouseLeave,
      onSaveRating,
    } = props;
    const opacity = React.useMemo(() => {
      if (hoverRating >= index) {
        return 1;
      } else if (!hoverRating && rating >= index) {
        return 1;
      }
      return 0.6;
    }, [rating, hoverRating, index]);
    return (
        <div 
          className="fireRating"
          onMouseEnter={() => onMouseEnter(index)} 
          onMouseLeave={() => onMouseLeave()} 
          onClick={() => onSaveRating(index)}>
          <img className="Flame" src={Flame} style={{opacity: opacity}} alt={"fire"+index}></img>
        </div>
    )
  }