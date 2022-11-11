import { useRef, useState } from "react";
import Header from "../../components/header";
import useClickOutside from "../../helpers/clickOutside";

export default function Home() {
  const el = useRef(null);
  const [visible, setVisible] = useState(true);
  useClickOutside(el, () => {
    setVisible(false);
    console.log("u click outside");
  });
  return (
    <div>
      <Header />
      {visible && <div className="card" ref={el}></div>}
    </div>
  );
}
