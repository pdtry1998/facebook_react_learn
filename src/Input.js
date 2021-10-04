import React from "react";
import PropTypes from 'prop-types'
import { useState } from "react";

function Input({ addPost }) {
    const [input,setInput] = useState('')

    function onChange(event) {
        setInput(event.target.value)
    }

    function onKeyDown(event) {
        const newPost = event.target.value;
        if (event.key === 'Enter' && newPost) {
          addPost(newPost);
          setInput('');
        }
      }

    return (
        <div className="Input">
            <div className="Inputheader">Create Post</div>
            <input className="Inputfield" type="text" value={input}
            onChange={onChange} onKeyDown={onKeyDown}></input>
        </div>
    )
}

Input.prototype = {
    addPost: PropTypes.func.isRequired
}

export default Input;