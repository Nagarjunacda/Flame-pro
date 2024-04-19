import { handleServerSideProps } from "@/utils/handleServerSideData";
import { allPageUrl } from "@/utils/urls";
import PolicesLanding from "@/components/ContentBlocks/PolicesLanding";

function PolicyDetailed({ data }) {
  return <PolicesLanding pageData={data} />;
}
export default PolicyDetailed;

export async function getServerSideProps(context) {
  const { params } = context;
  const { postId } = params;
  const url = `${allPageUrl}/?slug=${params.slug}`;
  const { data, error } = await handleServerSideProps(url);
  if (error) {
    return {
      props: {
        data: null,
      },
    };
  }

  return {
    props: {
      data,
    },
  };
}
