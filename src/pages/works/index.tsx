import Content from "@/components/Content";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Subject from "@/components/Subject";
import { graphql, Link, PageProps } from "gatsby";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from "gatsby-plugin-image";
import * as React from "react";

const WorkPage = ({ data }: PageProps<Queries.WorkPageQuery>) => {
  return (
    <Layout>
      <Subject>프로젝트</Subject>
      <Content>
        <div className="flex flex-col gap-20">
          {data.allMdx.nodes.map((work, idx) => (
            <Link key={idx} to={`/works/${work.frontmatter?.slug}`}>
              <Work
                key={work.id}
                title={work.frontmatter?.title}
                image={work.frontmatter?.image as ImageDataLike}
                imageAlt={work.frontmatter?.image_alt}
              />
            </Link>
          ))}
        </div>
      </Content>
    </Layout>
  );
};

const Work = ({
  image,
  imageAlt,
  title,
}: {
  image: ImageDataLike | null | undefined;
  imageAlt: string | null | undefined;
  title: string | null | undefined;
}) => {
  if (!image || !imageAlt || !title) return <></>;

  return (
    <div className="w-full drop-shadow-lg hover:drop-shadow-2xl transition bg-white rounded-xl flex flex-col justify-center items-center px-8 py-12">
      <div className="max-w-[500px]">
        <GatsbyImage
          image={getImage(image) as IGatsbyImageData}
          alt={imageAlt}
        />
      </div>
      <span className="text-xl sm:text-2xl font-bold mt-8">{title}</span>
    </div>
  );
};

export const query = graphql`
  query WorkPage {
    allMdx(sort: { frontmatter: { date_from: DESC } }) {
      nodes {
        id
        frontmatter {
          date_from(formatString: "MMMM D, YYYY")
          date_to(formatString: "MMMM D, YYYY")
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          image_alt
          slug
          title
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Works" />;

export default WorkPage;
