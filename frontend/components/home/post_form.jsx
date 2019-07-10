import React from 'react';
import { withRouter } from 'react-router-dom';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            caption: "",
            photoFile: null,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }


    handleSubmit(e) {
      let that = this;
      e.preventDefault();
      const formData = new FormData();
      formData.append('post[caption]', that.state.caption);
      formData.append('post[photo]', that.state.photoFile);
      // formData.append('post[userId]', that.state.userId);
      this.props.createPost(formData);
      // .then(result => this.props.history.push)
    }

    handleFile(e) {
      this.setState({photoFile: e.currentTarget.files[0]});
    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    render() {
      return (
        <div>
          <form className="post-form" onSubmit={this.handleSubmit}>
          <label>Caption</label>
            <input type="text" 
            id="post-caption"
            value={this.state.caption}
            onChange={this.update("caption")}/>
            <input type="file" onChange={this.handleFile}/>
            <input type="submit" value="Make a new Post!"/>
          </form>
        </div> 
      );
    }
}

export default withRouter(PostForm);
