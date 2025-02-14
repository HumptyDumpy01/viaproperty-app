import { useState } from 'react';

import { motion } from 'framer-motion';

type StarRatingType = {
  label: string;
  name: string;
}

export default function StarRating({ label, name }: StarRatingType) {

  // this state is used to store the rating value
  const [rating, setRating] = useState(0);

  // this state is used to store the hovered star value
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  // this function is used to set the rating value
  const handleRating = (rate: number) => {
    setRating(rate);
  };

  // this function is used to set the hovered star value
  const handleMouseEnter = (star: number) => {
    setHoveredStar(star);
  };

  // this function is used to reset the hovered star value
  const handleMouseLeave = () => {
    setHoveredStar(null);
  };

  return (
    <div className="flex items-center gap-4 bp-620:min-w-[340px] justify-between bp-620:flex-row flex-col ">
      <label htmlFor={name}
             className="bg-clip-text text-transparent bg-linear-main-dark-blue min-w-56 text-[28px] font-bold mr-auto">{label}</label>
      <div className="flex items-center gap-2">
        <div className="star-rating-container">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.input
              whileHover={{
                scale: 1.5,
                backgroundImage: 'url(\'/stars/blue-star-filled.png\')',
                zIndex: 99
              }}
              whileTap={{ scale: 0.8 }}
              key={star}
              type="radio"
              id={`${name}-${star}`}
              name={name}
              value={star}
              className="mr-1"
              required
              onClick={() => handleRating(star)}
              onMouseEnter={() => handleMouseEnter(star)}
              onMouseLeave={handleMouseLeave}
              style={{
                // this style is used to change the star image based on the rating value
                // so, before it, store the needed star image in the public folder
                backgroundImage: rating >= star || (hoveredStar !== null && star <= hoveredStar)
                  ? 'url(\'/stars/blue-star-filled.png\')'
                  : 'url(\'/stars/blue-star-empty.png\')'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}