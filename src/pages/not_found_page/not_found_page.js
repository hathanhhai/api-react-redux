import React, { Component } from 'react';


class NotFoundPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="alert alert-danger">
          <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
          <strong>404</strong> <h1>Not Found Page</h1>
        </div>

      </div>
    );
  }
}

export default NotFoundPage;
