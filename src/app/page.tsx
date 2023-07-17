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
      description: "Introduction to the Community Data project.",
      author: "Community Data",
    },
    {
      title: "Directory",
      href: "https://directory.communitydata.io/",
      description:
        "Directory of Community Data profiles for people and companies.",
      author: "Community Data",
    },
    {
      title: "Investor CRM",
      href: "https://crm.communitydata.io/",
      description: "Startup fundraising CRM using Community Data profiles.",
      author: "Community Data",
    },
  ],
  write: [
    {
      title: "Editor",
      href: "https://editor.communitydata.io/",
      description:
        "Web front-end to make git commits and submit changes on Community Data documents.",
      author: "Community Data",
    },
    {
      title: "Enhance",
      href: "https://editor.communitydata.io/",
      description:
        "A repository of public data enhancers that create and edit Community Data documents.",
      author: "Community Data",
    },
  ],
  own: [
    {
      title: "Github Repo",
      href: "https://github.com/communitydata-io/data",
      description: "Public Github repository for all Community Data documents.",
      author: "Community Data",
    },
    {
      title: "Claim a document",
      href: "https://github.com/communitydata-io/data",
      description: "Submit a proof to claim document ownership.",
      author: "Community Data",
    },
  ],
};

const contributedProjects = [];

export default function Home() {
  return (
    <main className="flex flex-col max-w-xl">
      <div className="space-y-12">
        {Object.keys(cdProjects).map((key) => {
          const k: keyof Projects = key as keyof Projects;
          return (
            <div key={key} className="space-y-4">
              <h1 className="text-2xl font-semibold capitalize w-full border-b-4 border-black py-2">
                {key}
              </h1>
              <ul className="space-y-4">
                {cdProjects[k].map((project, idx) => {
                  return (
                    <li key={idx} className="">
                      <div>
                        <a
                          href={project.href}
                          className="hover:cursor-pointer hover:underline text-green-700 font-semibold"
                        >
                          {project.title}
                        </a>
                      </div>
                      <div className="text-gray-600">{project.description}</div>
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
