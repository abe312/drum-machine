import React from 'react';
import './Footer.css';
export default function Footer() {
  return (
    <div className="footer">
      <h3>
        Made with{' '}
        <span role="img" aria-label="heart">
          ♥️
        </span>{' '}
        by: <a href="https://abhineet.me">@abe312</a>
      </h3>
      {/* <p>
        <a href="https://github.com/abe312/drum-machine">Fork me </a>
      </p> */}
    </div>
  );
}
