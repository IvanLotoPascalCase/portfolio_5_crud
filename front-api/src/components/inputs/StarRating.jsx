import React, { useState } from 'react';

const StarRating = () => {
    const [rating, setRating] = useState(0);

    const handleMouseEnter = (hoveredRating) => {
        setRating(hoveredRating);
    };

    const handleMouseLeave = () => {
        setRating(0);
    };

    const handleClick = (selectedRating) => {
        setRating(selectedRating);
    };

    return (
        <div className="flex items-center">
            <div className="mr-2">
                {rating > 0 ? `${rating.toFixed(1)}` : ''}
            </div>
            {[1, 2, 3, 4, 5].map((value) => (
                <div
                    key={value}
                    className="cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(value)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(value)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 transition-colors w-6 fill-current ${value <= rating ? 'text-yellow-500' : 'text-gray-300'
                            }`}
                        viewBox="0 0 20 20"
                    >
                        <path
                            d="M10 0l2.5 7.5H20l-6 5 2.5 7.5-6-5-6 5 2.5-7.5-6-5h7.5L10 0z"
                        />
                    </svg>
                </div>
            ))}

        </div>
    );
};

export default StarRating;
