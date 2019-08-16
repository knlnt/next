import { useRouter } from "next/router";

import PLayerInfo from "../src/components/PLayerInfo/PLayerInfo";
import LayoutPage from "../src/components/LayoutPage/LayoutPage";

const BTN_BACK_VISIBLE = true;

const PagePlayer = () => {
  const router = useRouter();
  const { id } = router.query;
  return <PLayerInfo id={id} />;
};

export default LayoutPage(PagePlayer, { btnBackVisible: BTN_BACK_VISIBLE });
