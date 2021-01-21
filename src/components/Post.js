import React, {Component} from 'react';
import axios from 'axios';

class Post extends Component{

    state = {
        post: null
    }

    componentDidMount(){
        let paramId = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + paramId)
            .then(res =>{
                this.setState({
                    post: res.data
                })
            })
    }

    render(){
        const postFinal = this.state.post ? (
            <div className="post">
                <h4 className = "center">{this.state.post.title}</h4>
            </div>
        ) : (
            <div className="center">
                Loading post ...
            </div>
        )
        return(
            <div className="container">
                <h4>{postFinal}</h4>
            </div>
        )
    }
}

export default Post