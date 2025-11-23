export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px'
    }}>
      <main style={{
        textAlign: 'center',
        color: 'white',
        maxWidth: '800px'
      }}>
        <h1 style={{
          fontSize: '4rem',
          marginBottom: '1rem',
          fontWeight: '700',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          👋 Hello!
        </h1>
        <p style={{
          fontSize: '1.5rem',
          marginBottom: '2rem',
          opacity: '0.95'
        }}>
          Welcome to your new application
        </p>
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          padding: '2rem',
          borderRadius: '15px',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            This is a Next.js application deployed on Vercel.
            <br />
            Ready to build something amazing!
          </p>
        </div>
      </main>
    </div>
  );
}
