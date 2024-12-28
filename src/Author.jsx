import { FaGithub } from 'react-icons/fa'

export default function Author({ name, githubLink }) {
  return (
    <div
      style={{
        margin: "2rem auto",
        width: "50%",
        minWidth: "300px",
        padding: "0.75rem",
        borderTop: "1px solid #eaeaea",
        borderBottom: "1px solid #eaeaea",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        fontSize: "0.875rem",
        color: "#222",
        marginTop: "8rem",
        marginBottom: "2.4rem"
      }}
    >
      <span>The Above Component Is Created By {name}</span>
      <span>•</span>
      <a
        href={githubLink}
        target='_blank'
        rel='noopener noreferrer'
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          color: '#0070f3',
          textDecoration: 'none',
          transition: 'color 0.2s ease',
        }}
        onMouseOver={e => (e.currentTarget.style.color = '#0051af')}
        onMouseOut={e => (e.currentTarget.style.color = '#0070f3')}
      >
        <FaGithub />
        GitHub
      </a>
    </div>
  )
}
