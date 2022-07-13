import { useState, useEffect } from "react";
import { Post } from "../../../model/Post";
import axios from "axios";

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    const index = async () => {
      try {
        const { data } = await axios.get('/posts');
        console.log(data);
        if (!data.status) {
          console.log("failed to get posts");
        }
        setPosts(data.data);
      } catch (e: any) {
        console.log('error', e.message);
      }
    }
    index();
  }, [])

  return(
    <>
      <h1>Posts</h1>

      <div className="row mb-2">

        {posts.map((p: Post) => {
          return(
            <div className="col-md-6" key={p.id}>
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{backgroundImage: `url(${p.image_url})`}}>
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary">{p.name}</strong>
                  <h3 className="mb-0">Featured post</h3>
                  <div className="mb-1 text-muted">{p.updated_at.slice(0, 10)}</div>
                  <p className="card-text mb-auto">{p.content.substring(0, 30) + " ..."}</p>
                  <a href="#" className="stretched-link">Continue reading</a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </>
  );
}