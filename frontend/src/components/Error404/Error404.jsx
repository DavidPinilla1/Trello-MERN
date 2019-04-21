import React from 'react';
import './Error404.scss';
import {Link} from 'react-router-dom'

const Error404 =()=> {
    return (
      <h2 className="Error404">
       SORRY. We couldn't find that page. Try going back to <Link className="ErrorLink" to="/">our Trello's home page</Link> 
      </h2>
    );
}

export default Error404;
