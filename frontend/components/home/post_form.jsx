import React from 'react';
import { withRouter } from 'react-router-dom';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            caption: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        
    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    render() {
      return (
        <div>
          <form className="post-form" onSubmit={this.handleSubmit.bind(this)}>
          <label>Caption</label>
            <input type="text" 
            id=""
            value={this.state.caption}
            onChange={this.update("caption")}/>
            <button>Make a new Post!</button>
          </form>
        </div> 
      );
    }
}

export default withRouter(ReviewForm);
