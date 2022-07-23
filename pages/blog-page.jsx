import Layout from "../components/Layout";
import { getAllPostsData } from "../lib/posts";
import Post from "../components/Post";

const Blog = ({ posts }) => {
  return (
    <Layout title="Blog">
      <div>
        <ul className="m-10">
          {posts &&
            posts.map((post) => {
              return <Post key={post.id} post={post} />;
            })}
        </ul>
      </div>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
}
