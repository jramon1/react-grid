import React, { Component } from 'react';

const Photo = ({id, url, thumbnailUrl, title}) => {
  return (
    <div className="column is-one-third has-text-centered">
      <div className="box" style={{overflow:'hidden'}}>
        <a href={url}>{url}</a>
        <figure className="image is-128x128" style={{margin:'10px auto 0 auto'}}>
          <img src={thumbnailUrl} alt={title} />
        </figure>
      </div>
    </div>
  )
}

export default Photo;
