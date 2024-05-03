import { useEffect } from 'react';
import { useRouter } from 'next/router';
import _ from 'lodash';
import LoaderComponent from "../LoaderComponent";
import RenderTrays from "../RenderTrays";

function CatchAllBlock({ pageData }) {
  const { data } = pageData;
  const router = useRouter();
  const isNotEmpty = !_.isEmpty(data);
  const trayData = isNotEmpty && data[0]?.acf?.content_blocks;
  const additionalDataExt = isNotEmpty && data[0]?.acf_fields;
  const categories = data?.category_info;
  const compData = { image: 'https://cms.cdastagging.com/wp-content/uploads/2024/04/Group-4786.png', speak_to_us_button: 'Speak To Us', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', title: 'Page Not Found, Redirecting To 404' };

  useEffect(() => {
    if (!isNotEmpty) {
      router.push('/404')
    }
  }, [])

  return (
    <main>
      {isNotEmpty ?
        <RenderTrays trayData={trayData} categories={categories} additionalDataExt={additionalDataExt} />
        :
        <LoaderComponent trayData={compData} />
      }
    </main>
  );
}
export default CatchAllBlock;
