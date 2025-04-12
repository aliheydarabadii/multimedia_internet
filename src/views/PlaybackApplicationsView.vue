<template>
  <div class="playback-applications">
    <header>
      <h1>Playback Applications</h1>
      <p>Quality of Service and Service Level Agreements for Multimedia</p>
    </header>

    <section class="diagram" id="qos-sla">
      <h2>QoS for Multimedia Transport: Beyond Availability</h2>
      
      <p>In networking, <strong>Service Level Agreements (SLAs)</strong> are used to define and measure <strong>Quality of Service (QoS)</strong>. For traditional data applications, <strong>availability</strong> has long been the primary SLA metric.</p>

      <div class="example-box">
        <h3>Traditional SLA Example:</h3>
        <div class="quote">
          <p><strong>Availability:</strong> Ensuring a network service or equipment is "up" and functioning a high percentage of the time (e.g., 99.975%).</p>
        </div>
        <p>However, <strong>for multimedia applications</strong>, this <strong>is not enough</strong>.</p>
      </div>

      <div class="section-box">
        <h3>Why Multimedia Needs More Than Availability</h3>
        
        <p>Multimedia traffic—like live video, voice over IP (VoIP), or streaming—requires a more <strong>robust set of QoS guarantees</strong>. These applications are sensitive to issues that go beyond mere uptime.</p>

        <p>We need <strong>additional SLAs</strong> that measure:</p>
        <ul class="feature-list">
          <li><i class="fas fa-clock"></i> <strong>Delay</strong>: How long packets take to travel from sender to receiver.</li>
          <li><i class="fas fa-box"></i> <strong>Packet Delivery Probability</strong>: The likelihood that packets arrive without being dropped.</li>
          <li><i class="fas fa-sort-numeric-down"></i> <strong>Packet Sequence</strong>: Whether packets arrive in the correct order.</li>
        </ul>

        <div class="warning-box">
          <p>Without these extra guarantees, <strong>user experience suffers</strong>, even if availability is high.</p>
        </div>
      </div>

      <div class="summary-box">
        <h3>Summary</h3>
        <div class="quote">
          <p>"Classic SLA metrics like availability are not sufficient for multimedia QoS."</p>
        </div>
        <p>To ensure reliable multimedia experiences, networks must evolve and define <strong>additional SLAs</strong> tailored to delay-sensitive and order-critical traffic.</p>
      </div>
    </section>

    <section class="diagram" id="sla-implementation">
      <h2>🛠️ How SLAs Are Defined and Implemented</h2>
      
      <p>An <strong>SLA (Service Level Agreement)</strong> is a formal agreement between a <strong>network provider</strong> and a <strong>client</strong> that outlines the expected performance of a network service. It ensures accountability and measurable guarantees.</p>

      <div class="section-box">
        <h3>🧩 Step-by-Step Process for SLA Implementation:</h3>
        
        <div class="step-box">
          <h4><span class="step-number">1️⃣</span> Reference Specific Entities</h4>
          <p>An SLA must refer to a <strong>specific group of network elements</strong> or interfaces — not the whole network, but clearly defined segments (e.g., <code>I1</code>, <code>I2</code>).</p>
        </div>
        
        <div class="step-box">
          <h4><span class="step-number">2️⃣</span> Define the Service Level</h4>
          <p>The exact <strong>metrics or expectations</strong> of the SLA must be clearly defined. For example:</p>
          <ul class="feature-list">
            <li><i class="fas fa-chart-line"></i> Packet delivery rate</li>
            <li><i class="fas fa-clock"></i> Latency</li>
            <li><i class="fas fa-server"></i> Availability</li>
          </ul>
        </div>
        
        <div class="step-box">
          <h4><span class="step-number">3️⃣</span> Measurement Mechanism</h4>
          <p>A proper mechanism must be set up to <strong>measure</strong> whether the SLA is being met. This may involve monitoring tools at defined points in the network path.</p>
        </div>
        
        <div class="step-box">
          <h4><span class="step-number">4️⃣</span> Define Penalties for Violations</h4>
          <p>To enforce reliability, the SLA must include <strong>penalties</strong> for non-compliance — such as financial reimbursement or service credits.</p>
        </div>
      </div>

      <div class="section-box">
        <h3>👥 Roles</h3>
        <div class="comparison-table">
          <div class="table-row">
            <div class="table-cell header">Role</div>
            <div class="table-cell header">Responsibility</div>
          </div>
          <div class="table-row">
            <div class="table-cell"><strong>Client</strong></div>
            <div class="table-cell">Uses the network service and relies on SLA guarantees.</div>
          </div>
          <div class="table-row">
            <div class="table-cell"><strong>Provider</strong></div>
            <div class="table-cell">Offers the network service and ensures SLA performance.</div>
          </div>
        </div>
      </div>
    </section>

    <section class="diagram" id="application-types">
      <h2>🎛️ Multimedia vs Elastic Applications</h2>
      
      <div class="section-box">
        <h3>🎥 Multimedia (Real-Time) Applications</h3>
        
        <p><strong>Example:</strong> VOIP (Voice over IP – Internet telephony)</p>
        
        <p>These are <strong>stringent applications</strong>:</p>
        <ul class="feature-list">
          <li><i class="fas fa-clock"></i> Require <strong>timely delivery</strong> of packets.</li>
          <li><i class="fas fa-exclamation-triangle"></i> Sensitive to <strong>packet loss</strong> and <strong>delay</strong>.</li>
          <li><i class="fas fa-ban"></i> Late packets are often useless (e.g., voice call stutters or lags).</li>
        </ul>
        
        <div class="info-box">
          <p>📌 <strong>VoIP is a real-time app</strong> and needs high Quality of Service (QoS) support.</p>
        </div>
      </div>

      <div class="section-box">
        <h3>📁 Elastic (Non-Real-Time) Applications</h3>
        
        <p><strong>Example:</strong> FTP (File Transfer Protocol)</p>
        
        <p>These are <strong>flexible applications</strong>:</p>
        <ul class="feature-list">
          <li><i class="fas fa-exclamation-triangle"></i> Sensitive to <strong>packet loss</strong> (you want all data transferred).</li>
          <li><i class="fas fa-hourglass-half"></i> <strong>Not sensitive to delay</strong> — a few seconds longer is acceptable.</li>
          <li><i class="fas fa-check-double"></i> Prioritizes <strong>accuracy over speed</strong>.</li>
        </ul>
        
        <div class="info-box">
          <p>📌 <strong>FTP is not a real-time app</strong>, and it can function well under best-effort service.</p>
        </div>
      </div>

      <div class="section-box">
        <h3>⚖️ Comparison</h3>
        
        <table class="summary-table">
          <thead>
            <tr>
              <th>Application Type</th>
              <th>Delay Sensitive</th>
              <th>Packet Loss Sensitive</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Real-Time (Multimedia)</td>
              <td class="success">✅ Yes</td>
              <td class="success">✅ Yes</td>
              <td>VoIP</td>
            </tr>
            <tr>
              <td>Elastic (Data Transfer)</td>
              <td class="error">❌ No</td>
              <td class="success">✅ Yes</td>
              <td>FTP</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PlaybackApplicationsView'
}
</script>

<style scoped>
.playback-applications {
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
  color: var(--color-heading);
  margin-bottom: 1rem;
}

header p {
  font-size: 1.2rem;
  color: var(--color-text-light);
}

.diagram {
  background: var(--color-background-soft);
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.diagram h2 {
  color: var(--color-heading);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--color-border);
  padding-bottom: 0.5rem;
}

.section-box {
  background: var(--color-background);
  border-radius: 6px;
  padding: 1.5rem;
  margin: 1rem 0;
}

.example-box, .info-box, .warning-box {
  border-radius: 6px;
  padding: 1rem;
  margin: 1rem 0;
}

.example-box {
  background: var(--color-background-mute);
  border-left: 4px solid var(--color-border);
}

.info-box {
  background: var(--vt-c-indigo-soft);
  border-left: 4px solid var(--vt-c-indigo);
}

.warning-box {
  background: var(--vt-c-yellow-soft);
  border-left: 4px solid var(--vt-c-yellow);
}

.quote {
  font-style: italic;
  padding: 1rem;
  border-left: 4px solid var(--color-border);
  margin: 1rem 0;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  gap: 0.5rem;
}

.feature-list i {
  color: var(--vt-c-indigo);
  width: 20px;
}

.step-box {
  margin: 1rem 0;
  padding: 1rem;
  background: var(--color-background-mute);
  border-radius: 6px;
}

.step-box h4 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-bottom: 1px solid var(--color-border);
}

.table-cell {
  padding: 1rem;
}

.table-cell.header {
  font-weight: bold;
  background: var(--color-background-mute);
}

.summary-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.summary-table th,
.summary-table td {
  padding: 0.75rem;
  border: 1px solid var(--color-border);
  text-align: left;
}

.summary-table th {
  background: var(--color-background-mute);
}

.success {
  color: var(--vt-c-green);
}

.error {
  color: var(--vt-c-red);
}

@media (max-width: 768px) {
  .playback-applications {
    padding: 1rem;
  }

  .diagram {
    padding: 1rem;
  }

  .table-row {
    grid-template-columns: 1fr;
  }

  .summary-table {
    display: block;
    overflow-x: auto;
  }
}
</style> 