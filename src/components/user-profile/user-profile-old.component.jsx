import React from 'react';

import withData from '../../with-data';

const UserProfile = ({ data, name, email }) => (
  <div className='container'>
    <h1>{console.log('data', data)}</h1>
    <h1>{console.log('name', name)}</h1>
    <h2>{console.log('email', email)}</h2>
    Posts:
    {data.map(post => 
      <div className='post' key={post.id}>
        <h1>{ post.title }</h1>
        <p>{ post.body }</p>
      </div>
      )}
  </div>
);

export default withData(UserProfile, 'https://jsonplaceholder.typicode.com/posts');
