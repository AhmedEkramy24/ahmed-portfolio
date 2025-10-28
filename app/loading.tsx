import { RingLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.7)] flex justify-center items-center">
      <RingLoader color="#fff" />
    </div>
  );
}
