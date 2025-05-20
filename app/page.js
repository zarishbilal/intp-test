export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)",
        fontFamily: "Segoe UI, Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "3rem 2.5rem",
          borderRadius: "1.5rem",
          boxShadow: "0 8px 32px rgba(60,60,120,0.12)",
          textAlign: "center",
          maxWidth: 420,
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "1rem",
            color: "#3730a3",
            fontWeight: 700,
          }}
        >
          Welcome to the INTP Test App
        </h1>
        <p
          style={{
            fontSize: "1.15rem",
            color: "#334155",
            marginBottom: "2rem",
          }}
        >
          Discover your personality type and gain insights into your strengths,
          preferences, and growth areas.
        </p>
        <a
          href="/test"
          style={{
            display: "inline-block",
            padding: "0.85rem 2.2rem",
            background: "linear-gradient(90deg, #6366f1 0%, #06b6d4 100%)",
            color: "white",
            borderRadius: "999px",
            fontWeight: 600,
            fontSize: "1.1rem",
            textDecoration: "none",
            boxShadow: "0 2px 8px rgba(99,102,241,0.15)",
            transition: "background 0.2s",
          }}
        >
          Start the Test
        </a>
      </div>
      <footer
        style={{ marginTop: "2.5rem", color: "#64748b", fontSize: "0.95rem" }}
      >
        &copy; {new Date().getFullYear()} INTP Test App
      </footer>
    </main>
  );
}
