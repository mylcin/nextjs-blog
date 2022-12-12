import classes from "./all-posts.module.css";
import PostsGrid from "../posts/posts-grid";

function AllPosts({ posts }) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default AllPosts;
