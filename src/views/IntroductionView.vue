<template>
  <div class="introduction-view">
    <header>
      <h1>Network Protocol Architecture</h1>
      <p>Understanding the fundamental layers and interactions in network protocols</p>
    </header>

    <div class="diagram" id="network-protocol">
      <h2>Network Protocol Architecture Overview</h2>
      <div class="planes-container">
        <div class="plane user-plane">
          <h3>User Plane</h3>
          <ul>
            <li><i class="fas fa-desktop"></i> APP</li>
            <li><i class="fas fa-network-wired"></i> IP</li>
            <li><i class="fas fa-microchip"></i> PHY</li>
          </ul>
        </div>

        <div class="plane control-plane">
          <h3>Control Plane</h3>
          <ul>
            <li><i class="fas fa-exchange-alt"></i> Signal Path (Signaling)</li>
          </ul>
        </div>

        <div class="plane management-plane">
          <h3>Management Plane</h3>
          <ul>
            <li><i class="fas fa-cogs"></i> Management Operations</li>
          </ul>
        </div>

        <div class="arrows">
          <div class="arrow">
            <i class="fas fa-arrows-alt-v"></i>
            Signaling Path between User Plane and Control Plane
          </div>
          <div class="arrow">
            <i class="fas fa-arrows-alt-h"></i>
            Management Plane interaction with User Plane and Control Plane
          </div>
        </div>
      </div>
    </div>

    <div class="diagram" id="ip-best-effort">
      <h2>IP Best-Effort Service – Guarantees with TCP vs UDP</h2>
      
      <p>IP networks operate on a best-effort basis, meaning they don't provide guarantees for:</p>
      <ul class="feature-list">
        <li><i class="fas fa-clock"></i> Delivery time</li>
        <li><i class="fas fa-check"></i> Packet delivery</li>
        <li><i class="fas fa-sort-numeric-down"></i> Packet order</li>
      </ul>

      <div class="comparison-section">
        <div class="comparison-table">
          <div class="table-row header">
            <div class="table-cell">Feature</div>
            <div class="table-cell">TCP</div>
            <div class="table-cell">UDP</div>
          </div>
          <div class="table-row">
            <div class="table-cell">On Packet Sequence</div>
            <div class="table-cell success">Guarantees order</div>
            <div class="table-cell error">No guarantee</div>
          </div>
          <div class="table-row">
            <div class="table-cell">On Packet Delivery</div>
            <div class="table-cell success">Guarantees delivery</div>
            <div class="table-cell error">No guarantee</div>
          </div>
          <div class="table-row">
            <div class="table-cell">On Delay</div>
            <div class="table-cell error">No guarantee</div>
            <div class="table-cell error">No guarantee</div>
          </div>
        </div>

        <div class="protocols-comparison">
          <div class="protocol tcp">
            <h4><i class="fas fa-shield-alt"></i> TCP Characteristics</h4>
            <ul class="feature-list">
              <li>Connection-oriented protocol</li>
              <li>Reliable data delivery</li>
              <li>Flow control and congestion control</li>
              <li>Sequenced data transmission</li>
              <li>Error checking and recovery</li>
            </ul>
          </div>
          <div class="protocol udp">
            <h4><i class="fas fa-bolt"></i> UDP Characteristics</h4>
            <ul class="feature-list">
              <li>Connectionless protocol</li>
              <li>Fast data transmission</li>
              <li>No flow control</li>
              <li>No guaranteed delivery</li>
              <li>Ideal for real-time applications</li>
            </ul>
          </div>
        </div>

        <div class="summary-box">
          <div class="quote">
            <p>"Both TCP and UDP rely on IP's best-effort service, but they handle the lack of guarantees differently based on their application requirements."</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.introduction-view {
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

.diagram {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.planes-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.plane {
  padding: 1.5rem;
  border-radius: 6px;
  background: #f8f9fa;
}

.user-plane {
  border-left: 4px solid #2ecc71;
}

.control-plane {
  border-left: 4px solid #e74c3c;
}

.management-plane {
  border-left: 4px solid #3498db;
}

.arrows {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 6px;
}

.arrow {
  display: flex;
  align-items: center;
  margin: 1rem 0;
  color: #e74c3c;
}

.arrow i {
  margin-right: 1rem;
}

.feature-list {
  list-style: none;
  margin: 1rem 0;
}

.feature-list li {
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
}

.feature-list i {
  margin-right: 1rem;
  color: var(--primary-color);
  width: 20px;
}

.comparison-section {
  margin-top: 2rem;
}

.comparison-table {
  width: 100%;
  margin: 2rem 0;
}

.table-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  border-bottom: 1px solid #eee;
}

.table-row.header {
  background: var(--secondary-color);
  color: white;
  font-weight: bold;
}

.table-cell {
  padding: 1rem;
}

.success {
  color: #2ecc71;
  font-weight: bold;
}

.error {
  color: #e74c3c;
  font-weight: bold;
}

.protocols-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
}

.protocol {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 6px;
}

.tcp {
  border-left: 4px solid #2ecc71;
}

.udp {
  border-left: 4px solid #e74c3c;
}

.summary-box {
  background: #f8f9fa;
  border-left: 4px solid var(--primary-color);
  padding: 1.5rem;
  margin-top: 2rem;
}

.quote {
  font-style: italic;
  color: #555;
}

@media (max-width: 768px) {
  .introduction-view {
    padding: 1rem;
  }

  header h1 {
    font-size: 2rem;
  }

  .protocols-comparison {
    grid-template-columns: 1fr;
  }

  .table-row {
    grid-template-columns: 1fr;
  }

  .table-row.header {
    display: none;
  }

  .table-cell {
    padding: 0.75rem;
  }

  .table-cell:before {
    content: attr(data-label);
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }
}
</style> 