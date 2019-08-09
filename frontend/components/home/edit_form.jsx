import React from 'react';
import { withRouter } from 'react-router-dom';


class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            caption: this.props.post.caption,
            photoFile: null,
            photoUrl: this.props.post.photourl
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount() {
        this.closeModalEsc();
    }

    handleSubmit(e) {
        let that = this;
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[caption]', that.state.caption);
        formData.append('post[photo]', that.state.photoFile);
        this.props.updatePost(formData, this.props.post.id)
        this.props.closeModal();
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }


    closeModalEsc() {
        const closeModal = this.props.closeModal;
        $(document).keydown(function (e) {
            if (e.keyCode === 27) {
                closeModal();
            }
        })
    }

    render() {
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} className="photo" /> : null;
        return (
            <div className="post-form-container">
                <form className="post-form" onSubmit={this.handleSubmit}>
                    <div className="post-form-actions">
                        <button onClick={this.props.closeModal} className="exit-modal">X</button>
                        <input type="submit" value="Edit!" className="submit-post-form" />
                    </div>
                    <div className="photo-preview">
                        {preview}
                    </div>
                    {/* <div className="file-selector-div" >
                        <input type="file" onChange={this.handleFile} className="file-selector" />
                    </div> */}
                    <input type="text"
                        className="post-form-caption"
                        value={this.state.caption}
                        onChange={this.update("caption")}
                        placeholder={this.state.caption} />
                </form>
            </div>
        );
    }
}

export default withRouter(EditForm);
