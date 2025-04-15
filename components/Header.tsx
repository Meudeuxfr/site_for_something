export default function Header() {
    return (
      <header style={{ backgroundColor: '#1a1a1a', padding: '20px 0', color: '#fff' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1 style={{ fontSize: '1.5rem' }}>Restaurant</h1>
          <nav>
            <a href="/" style={{ marginRight: 20 }}>Home</a>
            <a href="/menu" style={{ marginRight: 20 }}>Menu</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>
    );
  }