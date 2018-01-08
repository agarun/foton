import React from 'react';
import { Link } from 'react-router-dom';

const TagShowItem = ({ tagName }) => (
  <div className="tag-show-item">
    <Link to={`/search?query=${tagName}&type=photos`}>
      {tagName}
    </Link>
  </div>
);

export default TagShowItem;
