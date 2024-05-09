import Lottie from "react-lottie";
import animationData from "../assets/lottie-1.json";

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="loading">
      <Lottie options={defaultOptions} height={100} width={100} />
    </div>
  );
}

export default Loading;
