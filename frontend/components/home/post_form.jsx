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

  componentDidMount(){
    this.closeModalEsc();
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


  closeModalEsc(){
    const closeModal = this.props.closeModal;
    $(document).keydown(function(e) {
      if (e.keyCode === 27) {
        closeModal();
      }
    })
  }
  // keyPress(e) {
  // if (e.key === "Escape") {
  // // write your logic here.
  //   this.props.closeModal();
  // }
  // }



  render() {
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} className="photo"/> : null;
    return (
      <div className="post-form-container">
        <form className="post-form" onSubmit={this.handleSubmit}>
          <div className="post-form-actions">
            <button onClick={this.props.closeModal} className="exit-modal">X</button>
            <input type="submit" value="Post!" className="submit-post-form"/>
          </div>
          <div className="photo-preview">
            {preview}
          </div>
          <div className="file-selector-div" >
            <input type="file" onChange={this.handleFile} className="file-selector"/>
          </div>
          <input type="text" 
          className="post-form-caption"
          value={this.state.caption}
          onChange={this.update("caption")}
          placeholder="Caption"/>
        </form>
      </div> 
    );
  }
}

export default withRouter(PostForm);
