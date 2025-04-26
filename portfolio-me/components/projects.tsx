export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "MDR Terminal Emulator",
      description: "A recreation of the Lumon Industries MDR terminal interface from Severance.",
      tags: ["React", "CSS", "Animation"],
    },
    {
      id: 2,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with customizable charts.",
      tags: ["D3.js", "React", "TypeScript"],
    },
    {
      id: 3,
      title: "Neural Network Explorer",
      description: "Visual tool for building and understanding neural network architectures.",
      tags: ["TensorFlow.js", "WebGL", "React"],
    },
    {
      id: 4,
      title: "Algorithmic Music Generator",
      description: "Web application that creates unique musical compositions using algorithms.",
      tags: ["Web Audio API", "JavaScript", "Canvas"],
    },
  ]

  return (
    <div className="section-container">
      <h2 className="section-title">PROJECTS</h2>

      <div className="section-content">
        <p>Selected projects showcasing my technical skills and creative approach.</p>

        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p>{project.description}</p>
              <div style={{ marginTop: "1rem" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      display: "inline-block",
                      marginRight: "0.5rem",
                      marginBottom: "0.5rem",
                      padding: "0.2rem 0.5rem",
                      border: "1px solid var(--terminal-border)",
                      fontSize: "0.8rem",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
