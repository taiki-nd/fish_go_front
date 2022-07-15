import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const PostsShow = () => {
  const [post, setPost] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");

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
        setPost(data.data);
        setName(data.data.name);
        setContent(data.data.content);
        setImage(data.data.image_url);
        setUpdatedAt(data.data.updated_at);
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
      {updatedAt.slice(0, 10)}
      {name}
      {content}
      <img src={image} className="" />
      {console.log(post)}
    </>
  );
}