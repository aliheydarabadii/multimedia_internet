<template>
  <div class="home">
    <header>
      <h1>Multimedia Course Notes</h1>
      <p>Comprehensive guide to multimedia technologies and protocols</p>
    </header>

    <section class="welcome-section">
      <h2>Welcome to Multimedia Course Notes</h2>
      <div class="content-box">
        <p>This comprehensive guide covers essential topics in multimedia technologies, including:</p>
        <ul class="feature-list">
          <li>
            <i class="fas fa-network-wired"></i>
            Network Protocol Architecture
          </li>
          <li>
            <i class="fas fa-photo-video"></i>
            Media Types and Formats
          </li>
          <li>
            <i class="fas fa-microchip"></i>
            Multimedia Technologies
          </li>
          <li>
            <i class="fas fa-code"></i>
            Development Guidelines
          </li>
          <li>
            <i class="fas fa-sticky-note"></i>
            Important Notes and Best Practices
          </li>
        </ul>
      </div>
    </section>

    <section class="quick-links">
      <h3>Quick Navigation</h3>
      <div class="grid-container">
        <router-link to="/introduction" class="grid-item">
          <i class="fas fa-book"></i>
          <h4>Introduction</h4>
          <p>Network protocols and architecture fundamentals</p>
        </router-link>
        
        <router-link to="/playback-applications" class="grid-item">
          <i class="fas fa-play"></i>
          <h4>Playback Applications</h4>
          <p>Understanding multimedia playback and streaming</p>
        </router-link>
        
        <router-link to="/sla" class="grid-item">
          <i class="fas fa-file-contract"></i>
          <h4>Service Level Agreements</h4>
          <p>Quality of Service and network guarantees</p>
        </router-link>
        
        <router-link to="/media-types" class="grid-item">
          <i class="fas fa-photo-video"></i>
          <h4>Media Types</h4>
          <p>Different types of multimedia content</p>
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

header {
  text-align: center;
  margin-bottom: 3rem;
}

header h1 {
  font-size: 2.5rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.welcome-section {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
}

.content-box {
  margin-top: 1.5rem;
}

.feature-list {
  list-style: none;
  margin-top: 1rem;
}

.feature-list li {
  display: flex;
  align-items: center;
  margin: 1rem 0;
  font-size: 1.1rem;
}

.feature-list i {
  margin-right: 1rem;
  color: var(--primary-color);
  width: 24px;
}

.quick-links {
  margin-top: 3rem;
}

.quick-links h3 {
  text-align: center;
  margin-bottom: 2rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.grid-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: var(--text-color);
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
}

.grid-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.grid-item i {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.grid-item h4 {
  margin: 0.5rem 0;
  color: var(--secondary-color);
}

.grid-item p {
  font-size: 0.9rem;
  color: #666;
}

@media (max-width: 768px) {
  .home {
    padding: 1rem;
  }

  header h1 {
    font-size: 2rem;
  }

  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style> 