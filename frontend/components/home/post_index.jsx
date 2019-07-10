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
        this.props.fetchAllUsers()
    }
    componentDidUpdate(){
        
    }

    render() {
        console.log(this.props.users);
        // console.log(this.props.users[this.props.posts[0].userId]);
        let that = this;
        // const { pokemon, loading } = this.props;

        // if (loading) { return <LoadingIcon />; }
        return (
            <section className="post-index">
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
                    />
                    )}
                </ul>
            </section>
        );
    }
}

export default PostIndex;