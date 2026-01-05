import Image from "next/image";
import Link from "next/link";

import { RESUMES } from "@/constants";

export const Resume = () => {
  return (
    <section
      id="resume"
      className="flex flex-col items-center justify-center py-20 px-10"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Resume
      </h1>

      <div className="w-full max-w-6xl">
        {RESUMES.map((resume) => (
          <div
            key={resume.name}
            className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-4 rounded-2xl border border-purple-500/30 backdrop-blur-sm flex items-center justify-between"
          >
            <div className="flex items-center gap-6">
              <div className="h-auto w-auto rounded-md overflow-hidden border-2 border-purple-500/50">
                <Image
                  src={resume.image}
                  alt={`${resume.name} preview`}
                  width={105}
                  height={150}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{resume.name}</h3>
                <p className="text-gray-400 text-sm">{resume.description}</p>
              </div>
            </div>
            <Link
              href={resume.link}
              target="_blank"
              rel="noreferrer noopener"
              className="button-primary py-3 px-6 rounded-lg text-white font-semibold"
            >
              View & Download
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};


