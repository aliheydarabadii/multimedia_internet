<template>
  <div class="app-container">
    <nav class="sidebar">
      <div class="sidebar-header">
        <h2>Course Notes</h2>
      </div>
      <ul class="nav-links">
        <li>
          <router-link to="/">
            <i class="fas fa-home"></i> Home
          </router-link>
        </li>
        <li>
          <router-link to="/introduction">
            <i class="fas fa-book"></i> Introduction
          </router-link>
          <ul class="submenu">
            <li>
              <router-link to="/introduction#network-protocol">
                Network Protocol Architecture
              </router-link>
            </li>
            <li>
              <router-link to="/introduction#user-plane">
                User Plane
              </router-link>
            </li>
            <li>
              <router-link to="/introduction#control-plane">
                Control Plane
              </router-link>
            </li>
            <li>
              <router-link to="/introduction#management-plane">
                Management Plane
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/playback-applications">
            <i class="fas fa-play"></i> Playback Applications
          </router-link>
        </li>
        <li>
          <router-link to="/sla">
            <i class="fas fa-file-contract"></i> Service Level Agreements
          </router-link>
        </li>
        <li>
          <router-link to="/media-types">
            <i class="fas fa-photo-video"></i> Media Types
          </router-link>
        </li>
        <li>
          <router-link to="/tech">
            <i class="fas fa-microchip"></i> Technology
          </router-link>
        </li>
        <li>
          <router-link to="/development">
            <i class="fas fa-code"></i> Development
          </router-link>
        </li>
        <li>
          <router-link to="/notes">
            <i class="fas fa-sticky-note"></i> Notes
          </router-link>
        </li>
      </ul>
    </nav>

    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'

onMounted(() => {
  // Handle hash navigation for sections
  if (window.location.hash) {
    const element = document.querySelector(window.location.hash)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
})
</script>

<style>
:root {
  --sidebar-width: 250px;
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --text-color: #333;
  --background-color: #f5f6fa;
  --sidebar-background: #2c3e50;
  --sidebar-text: #ecf0f1;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background: var(--background-color);
}

.app-container {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: var(--sidebar-width);
  background: var(--sidebar-background);
  color: var(--sidebar-text);
  padding: 1rem;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
}

.sidebar-header {
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;
}

.nav-links {
  list-style: none;
}

.nav-links li {
  margin: 0.5rem 0;
}

.nav-links a {
  color: var(--sidebar-text);
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  background: rgba(255, 255, 255, 0.1);
}

.nav-links i {
  margin-right: 0.5rem;
  width: 20px;
  text-align: center;
}

.submenu {
  list-style: none;
  margin-left: 1.5rem;
  padding-left: 1rem;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

.content {
  flex: 1;
  margin-left: var(--sidebar-width);
  padding: 2rem;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }

  .content {
    margin-left: 0;
  }

  .app-container {
    flex-direction: column;
  }
}
</style> 