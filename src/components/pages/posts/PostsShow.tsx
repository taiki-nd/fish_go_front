import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const PostsShow = () => {
  const [post, setPost] = useState([]);

  const { id } = useParams();
  const getId = () => {
    return id
  }

  useEffect(() =>{
    const show = async () => {
      try {
        const id = getId();
        const { data } = await axios.get(`/posts/${id}`);
        console.log(data);
        if (!data.status) {
          console.log("failed to get posts");
        }
        setPost(data.data);
      } catch (e: any) {
        console.log('error', e.message);
      }
    }
    show();
  }, [])

  return(
    <>
      <h1>Post</h1>
    </>
  );
}