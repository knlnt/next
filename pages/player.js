import { useRouter } from "next/router";

import PLayerInfo from "../src/components/PLayerInfo/PLayerInfo";

const PagePlayer = () => {
  const router = useRouter();
  const { id } = router.query;
  return <PLayerInfo id={id} />;
};

export default PagePlayer;
