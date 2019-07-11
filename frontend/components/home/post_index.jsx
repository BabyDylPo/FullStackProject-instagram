// import React from 'react';
// // import PostIndexItem from './post_index_item';

// const PostIndex = ({ posts }) => (
//     <div>
//         <ul>
//             {posts.map(post => {
//                 return (
//                     <li key={post.id}>
//                         <h2>{post.caption}</h2>
//                         <img src={post.photoUrl} />
//                     </li>
//                 );
//             })}
//         </ul>
//     </div>
// );

// export default PostIndex;

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import PostIndexItem from './post_index_item';

class PostIndex extends Component {

    constructor(props){
        super(props);
        this.users = this.props.users;
    }
    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchAllUsers();
        // document.addEventListener('scroll', this.trackScrolling);
    }

    // trackScrolling(){
    //     const wrappedElement = document.getElementsByClassName('post-index');
    //     if (wrappedElement.scrollHeight - wrappedElement.scrollTop === wrappedElement.clientHeight - 10) {
    //         console.log('post index bottom reached');
    //         document.removeEventListener('scroll', this.trackScrolling);
    //     }
    // };

    render() {
        // console.log(this.props.users);
        // console.log(this.props.users[this.props.posts[0].userId]);
        let that = this;
        // const { pokemon, loading } = this.props;
        // if (loading) { return <LoadingIcon />; }
        return (
            <div className="post-index">
                {/* <Route
                    path="/pokemon/:pokemonId"
                    component={PokemonDetailContainer}
                /> */}
                <ul>
                    {this.props.posts.map(post => 
                    <PostIndexItem 
                    key={post.id} 
                    post={post} 
                    user={that.props.users[post.userId]}
                    deletePost={(post.userId === that.props.currentUser.id) ? that.props.deletePost : null}
                    openModal={(post.userId === that.props.currentUser.id) ? that.props.openModal : null}
                    />
                    )}
                </ul>
            </div>
        );
    }
}

export default PostIndex;