import Content from "@/components/Content";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Subject from "@/components/Subject";
import { mdiChevronLeft } from "@mdi/js";
import Icon from "@mdi/react";
import { graphql, HeadProps, Link, PageProps } from "gatsby";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from "gatsby-plugin-image";
import * as React from "react";

const WorkDetailPage = ({
  data,
  children,
}: PageProps<Queries.WorkDetailPageQuery>) => {
  return (
    <Layout>
      <Subject>
        <Link to="/works">
          <div className="flex items-center gap-1 text-base font-normal">
            <Icon path={mdiChevronLeft} size="16px" />
            <span>뒤로가기</span>
          </div>
        </Link>
        <p>{data.mdx?.frontmatter?.title}</p>
      </Subject>
      <Content>
        <GatsbyImage
          image={
            getImage(
              data.mdx?.frontmatter?.image as ImageDataLike
            ) as IGatsbyImageData
          }
          alt={data.mdx?.frontmatter?.image_alt || ""}
        />
        {children}
      </Content>
    </Layout>
  );
};

export const query = graphql`
  query WorkDetailPage($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date_from(formatString: "MMMM D, YYYY")
        date_to(formatString: "MMMM D, YYYY")
        image_alt
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: HeadProps<Queries.WorkDetailPageQuery>) => (
  <Seo title={data.mdx?.frontmatter?.title || ""} />
);

export default WorkDetailPage;
