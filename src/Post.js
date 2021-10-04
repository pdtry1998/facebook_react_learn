import React from "react";
import PropTypes from 'prop-types'

function Post({id,title,deletePost}) {
    return (
        <div className="Post">
            <button className="PostDelete" onClick={() => deletePost(id)}>X</button>
            <div className="PostTitle">{title} </div>
            <img 
            className="PostImage" 
            src={`https://source.unsplash.com/random?sig=${id}`} />
        </div>
    )
}

Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    deletePost: PropTypes.func.isRequired
}

export default Post