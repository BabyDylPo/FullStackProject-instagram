import React from 'react';
import { withRouter } from 'react-router-dom';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            caption: "",
            photoFile: null,
            photoUrl: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        // this.closeModal = this.props.closeModal.bind(this);
    }


    handleSubmit(e) {
      let that = this;
      e.preventDefault();
      const formData = new FormData();
      formData.append('post[caption]', that.state.caption);
      formData.append('post[photo]', that.state.photoFile);
      // formData.append('post[userId]', that.state.userId);
      this.props.createPost(formData);
      this.props.closeModal();
    
    }

    handleFile(e) {
      const file = e.currentTarget.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        this.setState({photoFile: file, photoUrl: fileReader.result});
      };
      if (file) {
        fileReader.readAsDataURL(file);
      }
    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    

    render() {
      const preview = this.state.photoUrl ? <img src={this.state.photoUrl} className="photo"/> : null;
      return (
        <div>
          <form className="post-form" onSubmit={this.handleSubmit}>
          <label>Caption</label>
            <input type="text" 
            id="post-caption"
            value={this.state.caption}
            onChange={this.update("caption")}/>
            <input type="file" onChange={this.handleFile}/>
            <div className="button-div" >
              <input type="submit" value="Make a new Post!"/>
            </div>
            <div className="photo-preview">
              {preview}
            </div>
          </form>
        </div> 
      );
    }
}

export default withRouter(PostForm);
