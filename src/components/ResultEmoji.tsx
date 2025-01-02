import React from 'react';
import { getResultEmoji, getResultMessage } from '../utils/resultUtils';

interface ResultEmojiProps {
  percentage: number;
}

const ResultEmoji: React.FC<ResultEmojiProps> = ({ percentage }) => {
  return (
    <div className="mb-6">
      <img 
        src={getResultEmoji(percentage)} 
        alt="Result emoji"
        className="w-32 h-32 mx-auto mb-4 rounded-lg"
      />
      <p className="text-lg text-gray-200">
        {getResultMessage(percentage)}
      </p>
    </div>
  );
}

export default ResultEmoji;