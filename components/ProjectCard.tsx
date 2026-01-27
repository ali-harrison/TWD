import Link from "next/link";

export interface ProjectCardProps {
  name: string;
  url: string;
  tag: string;
  description?: string;
  techStack?: string[];
  showDetails?: boolean;
}

export default function ProjectCard({
  name,
  url,
  tag,
  description,
  techStack,
  showDetails = false,
}: ProjectCardProps) {
  return (
    <Link
      href={url}
      className="group block border border-white p-8 hover:bg-white hover:text-black transition-colors"
    >
      {/* Thumbnail for detailed view */}
      {showDetails && (
        <div className="w-full h-48 bg-gray mb-8" aria-label="Project thumbnail" />
      )}

      {/* Project info */}
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="text-4xl font-bold mb-2">{name}</h3>
          <p className="text-sm text-gray group-hover:text-black transition-colors">
            {tag}
          </p>

          {/* Description for detailed view */}
          {showDetails && description && (
            <p className="mt-4 text-base">{description}</p>
          )}

          {/* Tech stack for detailed view */}
          {showDetails && techStack && techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-3 py-1 border border-white group-hover:border-black"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Arrow icon */}
        <div className="text-4xl" aria-hidden="true">
          →
        </div>
      </div>
    </Link>
  );
}
