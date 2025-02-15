export default function ProjectContainer({projects}) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects?.data?.map((project, index) => {
        return (
          <div key={index} className="p-4 rounded-lg shadow-md flex flex-col gap-4 border justify-between">
            <div className="text-xl font-semibold flex flex-col">
              {project.name}
              <div className="text-sm text-zinc-500">{project.desc}</div>
            </div>

            <div className="flex gap-2 font-semibold text-xs items-center">
              <div
                className={`rounded-full text-white px-2 py-1 w-max ${
                  project.difficulty == "Beginner"
                    ? "bg-green-600"
                    : project.difficulty == "Intermediate"
                    ? "bg-yellow-500"
                    : "bg-red-600"
                }`}
              >
                {project.difficulty}
              </div>
              <div className="rounded-full text-xs px-2 py-1 w-max border">
                {project.stack}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="font-semibold">Steps:</div>
              <div>
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  {project.steps.map((step, stepIndex) => {
                    return <li key={stepIndex}>{step}</li>;
                  })}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="font-semibold">Requirements:</div>
              <div>
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  {project.requirement.map(
                    (prerequisite, prerequisiteIndex) => {
                      return <li key={prerequisiteIndex}>{prerequisite}</li>;
                    }
                  )}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="font-semibold">What you'll learn:</div>
              <div>
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  {project.learn.map((learnItem, learnIndex) => {
                    return <li key={learnIndex}>{learnItem}</li>;
                  })}
                </ul>
              </div>
            </div>

            <div>
                <button className="bg-black text-white px-2 py-1 rounded flex gap-1">
                    <i className="bi bi-caret-right-fill"></i>
                    <div>Learn More</div>
                </button>
            </div>

          </div>
        );
      })}
    </div>
  );
}
