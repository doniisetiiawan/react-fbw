/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import List from './list';

export default {
  title: 'List',
  component: List,
};

const posts = [
  {
    id: 1,
    title: 'Create Apps with No Configuration',
    excerpt:
      'Create React App is a new officially supported...',
  },
  {
    id: 2,
    title: 'Mixins Considered Harmful',
    excerpt: '"How do I share the code between several...',
  },
];

export const ListPosts = () => (
  <List
    collection={posts}
    titleKey="title"
  />
);

export const ListPosts2 = () => (
  <List
    collection={posts}
    titleKey="title"
    textKey="excerpt"
  />
);
