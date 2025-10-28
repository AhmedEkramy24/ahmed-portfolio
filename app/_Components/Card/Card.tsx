import Image from "next/image";

interface Project {
  link: string;
  image: string;
  title: string;
}

interface CardProps {
  item: Project;
}

export default function Card({ item }: CardProps) {
  return (
    <div className="md:w-1/2 lg:w-1/4 w-full p-3 ">
      <a href={item.link}>
        <div className="rounded-md overflow-hidden bg-black card">
          <Image
            src={item.image}
            alt={item.title}
            height={300}
            width={300}
            className="w-full"
          />
          <h4 className="p-3 text-lg font-semibold">{item.title}</h4>
        </div>
      </a>
    </div>
  );
}
