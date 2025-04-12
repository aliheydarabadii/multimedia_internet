<template>
  <div class="sla-view">
    <header>
      <h1>Service Level Agreements (SLA)</h1>
      <p>Understanding Network Service Guarantees and Quality Metrics</p>
    </header>

    <div class="diagram" id="sla-overview">
      <h2>What is a Service Level Agreement?</h2>
      
      <p>A <strong>Service Level Agreement (SLA)</strong> is a formal contract between a service provider and a client that defines the expected level of service. In networking, SLAs are crucial for ensuring reliable and measurable service quality.</p>

      <div class="example-box">
        <h3>Key Components of an SLA:</h3>
        <ul class="feature-list">
          <li>
            <i class="fas fa-check-circle"></i>
            <span><strong>Service Definition</strong>: What services are covered</span>
          </li>
          <li>
            <i class="fas fa-chart-line"></i>
            <span><strong>Performance Metrics</strong>: How service quality is measured</span>
          </li>
          <li>
            <i class="fas fa-clock"></i>
            <span><strong>Time Parameters</strong>: When the service is available</span>
          </li>
          <li>
            <i class="fas fa-exclamation-triangle"></i>
            <span><strong>Penalties</strong>: Consequences of not meeting agreements</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="diagram" id="sla-metrics">
      <h2>SLA Metrics for Network Services</h2>

      <div class="section-box">
        <h3>Common Performance Metrics</h3>
        <div class="comparison-table">
          <div class="table-row header">
            <div class="table-cell">Metric</div>
            <div class="table-cell">Description</div>
            <div class="table-cell">Typical Target</div>
          </div>
          <div class="table-row">
            <div class="table-cell"><strong>Availability</strong></div>
            <div class="table-cell">Percentage of time service is operational</div>
            <div class="table-cell">99.9% - 99.999%</div>
          </div>
          <div class="table-row">
            <div class="table-cell"><strong>Latency</strong></div>
            <div class="table-cell">Time taken for data to travel end-to-end</div>
            <div class="table-cell">&lt; 100ms</div>
          </div>
          <div class="table-row">
            <div class="table-cell"><strong>Packet Loss</strong></div>
            <div class="table-cell">Percentage of packets that fail to reach destination</div>
            <div class="table-cell">&lt; 0.1%</div>
          </div>
        </div>
      </div>
    </div>

    <div class="diagram" id="sla-types">
      <h2>Types of Service Level Agreements</h2>

      <div class="section-box">
        <h3>Statistical vs. Guaranteed SLAs</h3>
        
        <div class="comparison-table">
          <div class="table-row header">
            <div class="table-cell">SLA Type</div>
            <div class="table-cell">Characteristics</div>
            <div class="table-cell">Best For</div>
          </div>
          <div class="table-row">
            <div class="table-cell"><strong>Statistical</strong></div>
            <div class="table-cell">
              <ul>
                <li>Promises performance targets will be met X% of the time</li>
                <li>More flexible and cost-effective</li>
              </ul>
            </div>
            <div class="table-cell">General internet services, email, web hosting</div>
          </div>
          <div class="table-row">
            <div class="table-cell"><strong>Guaranteed</strong></div>
            <div class="table-cell">
              <ul>
                <li>Absolute guarantees for performance metrics</li>
                <li>Higher cost but more reliable</li>
              </ul>
            </div>
            <div class="table-cell">Mission-critical applications, financial services</div>
          </div>
        </div>
      </div>

      <div class="summary-box">
        <h3>Key Takeaway</h3>
        <div class="quote">
          <p>"The choice between statistical and guaranteed SLAs depends on the balance between cost and required service reliability."</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sla-view {
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

.example-box {
  background: #f8f9fa;
  border-radius: 6px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.feature-list {
  list-style: none;
}

.feature-list li {
  display: flex;
  align-items: flex-start;
  margin: 1rem 0;
}

.feature-list i {
  color: var(--primary-color);
  margin-right: 1rem;
  margin-top: 0.25rem;
  width: 20px;
}

.section-box {
  margin: 2rem 0;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
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

.table-row:not(.header):hover {
  background: #f8f9fa;
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
  .sla-view {
    padding: 1rem;
  }

  header h1 {
    font-size: 2rem;
  }

  .table-row {
    grid-template-columns: 1fr;
  }

  .table-cell {
    padding: 0.75rem;
  }

  .table-row.header {
    display: none;
  }

  .table-cell:before {
    content: attr(data-label);
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }
}
</style> 