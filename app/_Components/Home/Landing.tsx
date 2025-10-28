import Image from "next/image";
import RotatingText from "../ReactBits/RotatingText";
import TextType from "../ReactBits/TypeText";
import AnimatedContent from "../ReactBits/AnimatedContent";

export default function Landing() {
  return (
    <div>
      <AnimatedContent>
        <div className="container mx-auto flex md:justify-around items-center h-[90vh] justify-end p-5 flex-col-reverse md:flex-row">
          <div className="txt md:w-1/2 w-full p-5">
            <div className="text-white">
              <h2 className=" font-extrabold text-6xl md:text-7xl my-3">
                Hello, 👋
              </h2>
              <h3 className="md:text-4xl text-3xl font-bold my-3 text-[#ffffffde]">
                <TextType
                  text={[
                    "I'm Ahmed Ekramy",
                    "I'm frontend developer",
                    "I'm React | Next devoloper",
                    "I can make awesome websites ✨",
                  ]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={false}
                  cursorCharacter="|"
                />
              </h3>
            </div>
            <div className=" font-bold md:text-4xl text-xl flex gap-3 text-[#ffffffde] mx-auto">
              Creative
              <RotatingText
                texts={["thinking", "coding", "component"]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-[#5227FF] text-white overflow-hidden font-bold w-fit md:text-4xl text-2xl justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>
          <div className="img md:w-[350px] w-[250px] rounded-full relative">
            <div className="md:h-[360px] md:w-[360px] h-[260px] w-[260px] -z-40 absolute bg-slate-100 rounded-full -top-1.25 -left-1.25  spin"></div>
            <Image
              src={"/imgs/ek.jpg"}
              alt="ahmed ekramy"
              width={500}
              height={500}
              className="w-full rounded-full"
            />
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
}
