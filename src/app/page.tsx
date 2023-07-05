type Project = {
  title: string;
  href: string;
  description: string;
  author: string;
};

type Projects = {
  read: Project[];
  write: Project[];
  own: Project[];
};

const cdProjects: Projects = {
  read: [
    {
      title: "Docs",
      href: "https://docs.communitydata.io/",
      description: "Documentation for Community Data.",
      author: "Community Data",
    },
    {
      title: "Directory",
      href: "https://directory.communitydata.io/",
      description: "Directory of Community Data profiles for people and companies.",
      author: "Community Data",
    },
  ],
  write: [
    {
      title: "Editor",
      href: "https://editor.communitydata.io/",
      description: "Documentation for Community Data.",
      author: "Community Data",
    },
  ],
  own: [
    {
      title: "Github Repo",
      href: "https://github.com/communitydata-io/data",
      description: "Github repository for Community Data.",
      author: "Community Data",
    },
  ],
};

const contributedProjects = [];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="space-y-10">
        {Object.keys(cdProjects).map((key) => {
          const k: keyof Projects = key as keyof Projects;
          return (
            <div key={key}>
              <h1 className="text-2xl font-semibold">{key}</h1>
              <ul>
                {cdProjects[k].map((project, idx) => {
                  return (
                    <li key={idx}>
                      <a href={project.href} className="hover:cursor-pointer text-green-700 font-semibold">
                        {project.title}
                      </a>{" "}
                      by {project.author}: {project.description}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </main>
  );
}
