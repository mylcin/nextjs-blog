import Head from "next/head";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../helper/posts-util";

function PostDetailPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
}

export function getStaticProps(context) {
  const postSlug = context.params.slug;
  const postData = getPostData(postSlug);
  return {
    props: {
      post: postData,
    },
    revalidate: 3600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  const slugPaths = slugs.map((slugName) => ({ params: { slug: slugName } }));
  return {
    paths: slugPaths,
    fallback: false,
  };
}
export default PostDetailPage;
