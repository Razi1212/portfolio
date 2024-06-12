import { Fragment } from "react";
import Navigation from "../Components/Navigation";
import getPostMetadata from "../../lib/Post-Utli";

export default function Home({ postmetadata }) {
  console.log(postmetadata);
  return (
    <>
      <Fragment>
        <Navigation />
        {postmetadata.map((post, index) => (
          <div className="p-7 bg-zinc-900">
            <div className="p-10 text-center">
              <p className="text-white text-4xl font-bold mb-10">My Blog</p>
              <p className="text-white text-lg mb-20">
                A place where I share my learnings and ideas about technologies
              </p>
            </div>

            <div className="grid grid-cols-3 gap-10">
              {postmetadata.map((post, index) => (
                <div key={index} className="bg-zinc-800 rounded-3xl p-5 text-white">
                  <img
                    src={post.image}
                    alt="Post Image"
                    className="object-cover object-center h-40 w-full rounded-lg mb-4"
                  />
                  <div className="text-center">
                    <p className="font-bold text-lg mb-2">{post.title}</p>
                    <p className="text-sm mb-4">{post.bio}</p>
                    <div className="flex justify-between text-sm">
                      <p>Prep Time: {post.prep_time}</p>
                      <p>Cook Time: {post.cook_time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Fragment>
    </>
  );
}

export async function getStaticProps() {
  const postmetadata = getPostMetadata("Content");
  return {
    props: {
      postmetadata,
    },
  };
}
