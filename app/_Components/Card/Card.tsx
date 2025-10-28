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
    <div className="w-full p-3 md:w-1/2 lg:w-1/4">
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="relative overflow-hidden rounded-xl bg-[#0a0a0a] border border-transparent transition-all duration-300 group-hover:border-[#5227FF]/60 group-hover:shadow-[0_0_20px_#5227FF40]">
          {/* Image */}
          <div className="overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              height={300}
              width={400}
              className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <h4 className="p-4 text-lg font-semibold text-white group-hover:text-[#5227FF] transition-colors">
            {item.title}
          </h4>

          {/* Subtle glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-[#5227FF]/20 blur-3xl"></div>
        </div>
      </a>
    </div>
  );
}
