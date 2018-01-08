import React from 'react';
import TagShowItem from './tag_show_item';

const TagShow = ({ tags }) => (
  tags.map(tagName => <TagShowItem key={tagName} tagName={tagName} />)
);

export default TagShow;
