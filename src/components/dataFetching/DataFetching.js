import axios from 'axios';
import React, {useEffect, useState} from 'react'
function DataFetching() {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1)
    const [post, setPost] = useState({})
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    const handleClick = () => {
        setIdFromButtonClick(id)
    }
    useEffect( ()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( res => {
            console.log(res);
            setPosts(res.data)
        })
        .catch( err =>{
            console.log(err);
        })
    },[])

    /* useEffect( () =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then( res => {
            console.log(res)
            setPost(res.data)
        }).catch( err => {
            console.log(err)
        })
    },[id]) */

    useEffect( () =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then( res => {
            console.log(res)
            setPost(res.data)
        }).catch( err => {
            console.log(err)
        })
    },[idFromButtonClick])

  return (
    <div>

        <div>
            <input type='text' value={id} onChange={ e=> setId(e.target.value)} />
            <button type='button' onClick={handleClick}>Fetch Post</button>

            <div>
                <h2>{post.title}</h2>
            </div>
        </div>

        {/* <div>
            <input type='text' value={id} onChange={ e=> setId(e.target.value)} />
            <div>
                <h2>{post.title}</h2>
            </div>
        </div> */}
      {/* <ul>
        {
            posts.map( post => (
               <li key={post.id}>{post.title}</li> 
            ))
        }
      </ul> */}
    </div>
  )
}

export default DataFetching
