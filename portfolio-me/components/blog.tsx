export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Philosophy of Severance: Work-Life Balance in Tech",
      date: "2023-05-15",
      excerpt: "Exploring the themes of Severance and how they relate to modern work culture in the tech industry.",
    },
    {
      id: 2,
      title: "Building Retro-Futuristic UIs with React and CSS",
      date: "2023-04-02",
      excerpt: "A technical deep dive into creating interfaces inspired by retro computing and sci-fi aesthetics.",
    },
    {
      id: 3,
      title: "The Art of Terminal Design: Lessons from Severance",
      date: "2023-03-10",
      excerpt: "Analyzing the design choices in the MDR terminals from Severance and what we can learn from them.",
    },
    {
      id: 4,
      title: "Minimalism in UI Design: Less is More",
      date: "2023-02-18",
      excerpt: "Why minimalist interfaces often provide better user experiences and how to implement them effectively.",
    },
  ]

  return (
    <div className="section-container">
      <h2 className="section-title">BLOG</h2>

      <div className="section-content">
        <p>Thoughts, tutorials, and insights on technology, design, and development.</p>

        <div className="blog-list">
          {posts.map((post) => (
            <div key={post.id} className="blog-item">
              <div className="blog-date">{post.date}</div>
              <h3 className="blog-title">{post.title}</h3>
              <p>{post.excerpt}</p>
              <a
                href="#"
                style={{
                  display: "inline-block",
                  marginTop: "0.5rem",
                  color: "var(--accent-blue)",
                }}
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
