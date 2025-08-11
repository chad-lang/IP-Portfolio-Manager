'use client'

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Building, DollarSign, Shield, Calculator, TrendingUp, Plus, AlertTriangle, Eye, Award } from 'lucide-react';

const IPPortfolioManager = () => {
  const [activeTab, setActiveTab] = useState('portfolio');
  
  // Enhanced sample data with IP metrics - for a large software platform company
  const assets = [
    { 
      name: 'ML Recommendation Engine', 
      type: 'Custom-built', 
      value: 2500000, 
      maintenance: 250000, 
      risk: 'Medium', 
      capitalized: true, 
      rdCredit: 180000,
      ipStrength: 85,
      patentOpps: 3,
      licensingPotential: 'High'
    },
    { 
      name: 'ERP License', 
      type: 'Purchased', 
      value: 1800000, 
      maintenance: 200000, 
      risk: 'Low', 
      capitalized: false, 
      rdCredit: 0,
      ipStrength: 15,
      patentOpps: 0,
      licensingPotential: 'None'
    },
    { 
      name: 'Analytics Platform', 
      type: 'Partnered', 
      value: 1200000, 
      maintenance: 150000, 
      risk: 'High', 
      capitalized: true, 
      rdCredit: 90000,
      ipStrength: 60,
      patentOpps: 2,
      licensingPotential: 'Medium'
    }
  ];

  const formatCurrency = (value: number) => new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD', 
    minimumFractionDigits: 0 
  }).format(value);

  // Calculate totals
  const totals = {
    value: assets.reduce((sum, a) => sum + a.value, 0),
    maintenance: assets.reduce((sum, a) => sum + a.maintenance, 0),
    rdCredits: assets.reduce((sum, a) => sum + a.rdCredit, 0),
    avgIpStrength: Math.round(assets.reduce((sum, a) => sum + a.ipStrength, 0) / assets.length),
    totalPatentOpps: assets.reduce((sum, a) => sum + a.patentOpps, 0)
  };

  // Portfolio breakdown
  const typeBreakdown = assets.reduce((acc, asset) => {
    acc[asset.type] = (acc[asset.type] || 0) + asset.value;
    return acc;
  }, {} as Record<string, number>);

  const pieData = Object.entries(typeBreakdown).map(([key, value]) => ({
    name: key,
    value: value,
    percentage: ((value / totals.value) * 100).toFixed(1)
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  // Enhanced Build vs Buy comparison with IP considerations - now as example scenarios
  const buildVsBuyExamples = [
    { 
      scenario: 'Build API Gateway Security Layer',
      recommendation: 'Build',
      upfront: 2000, 
      annual: 300, 
      rdCredit: 150, 
      ownership: '100%',
      ipStrength: 90,
      patentPotential: 'High',
      licensingRevenue: 250,
      defensibility: 'Strong'
    },
    { 
      scenario: 'Add CRM Functionality',
      recommendation: 'Buy',
      upfront: 500, 
      annual: 400, 
      rdCredit: 0, 
      ownership: '0%',
      ipStrength: 20,
      patentPotential: 'None',
      licensingRevenue: 0,
      defensibility: 'Weak'
    },
    { 
      scenario: 'Develop AI Platform',
      recommendation: 'Partner',
      upfront: 1200, 
      annual: 250, 
      rdCredit: 75, 
      ownership: '50%',
      ipStrength: 70,
      patentPotential: 'Medium',
      licensingRevenue: 125,
      defensibility: 'Medium'
    }
  ];

  const tabs = [
    { id: 'portfolio', label: 'Portfolio', icon: Building },
    { id: 'buildvsbuy', label: 'Build vs Buy', icon: Calculator },
    { id: 'financial', label: 'Financial & Tax', icon: DollarSign }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    header: {
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb',
      padding: '24px'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      margin: '0 0 8px 0'
    },
    subtitle: {
      color: '#6b7280',
      margin: 0
    },
    nav: {
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb',
      padding: '0 24px',
      display: 'flex',
      gap: '24px'
    },
    navButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 8px',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      borderBottom: '2px solid transparent',
      fontSize: '14px',
      fontWeight: '500'
    },
    navButtonActive: {
      borderBottomColor: '#3b82f6',
      color: '#2563eb'
    },
    navButtonInactive: {
      color: '#6b7280'
    },
    main: {
      padding: '24px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    grid: {
      display: 'grid',
      gap: '16px',
      marginBottom: '24px'
    },
    grid4: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
    },
    grid2: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))'
    },
    grid3: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      padding: '24px'
    },
    cardSmall: {
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      padding: '16px'
    },
    kpiCard: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    kpiText: {
      fontSize: '14px',
      color: '#6b7280',
      margin: '0 0 4px 0'
    },
    kpiValue: {
      fontSize: '24px',
      fontWeight: 'bold',
      margin: 0
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '16px'
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '24px'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse' as const
    },
    th: {
      backgroundColor: '#f9fafb',
      padding: '12px',
      textAlign: 'left' as const,
      fontSize: '14px',
      fontWeight: '500',
      borderBottom: '1px solid #e5e7eb'
    },
    td: {
      padding: '12px',
      borderBottom: '1px solid #e5e7eb'
    },
    badge: {
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: '500'
    },
    badgeGreen: {
      backgroundColor: '#dcfce7',
      color: '#166534'
    },
    badgeYellow: {
      backgroundColor: '#fef3c7',
      color: '#92400e'
    },
    badgeRed: {
      backgroundColor: '#fee2e2',
      color: '#991b1b'
    },
    badgeBlue: {
      backgroundColor: '#dbeafe',
      color: '#1e40af'
    },
    badgeGray: {
      backgroundColor: '#f3f4f6',
      color: '#374151'
    },
    badgePurple: {
      backgroundColor: '#f3e8ff',
      color: '#7c3aed'
    },
    scenarioGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '16px'
    },
    scenario: {
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '16px'
    },
    scenarioTitle: {
      fontWeight: '500',
      marginBottom: '12px',
      textAlign: 'center' as const
    },
    recommendation: {
      display: 'inline-block',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: '500',
      marginTop: '8px'
    },
    scenarioDetails: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '8px',
      fontSize: '14px'
    },
    scenarioRow: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    button: {
      padding: '8px 16px',
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      fontWeight: '500'
    },
    buttonPurple: {
      padding: '8px 16px',
      backgroundColor: '#7c3aed',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      fontWeight: '500'
    },
    buttonGreen: {
      padding: '8px 16px',
      backgroundColor: '#059669',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      fontWeight: '500'
    },
    buttonGroup: {
      display: 'flex',
      gap: '8px'
    },
    linkButton: {
      color: '#2563eb',
      fontSize: '14px',
      textDecoration: 'none',
      cursor: 'pointer'
    },
    infoBox: {
      padding: '12px',
      backgroundColor: '#f3e8ff',
      borderRadius: '8px',
      fontSize: '14px',
      marginBottom: '16px'
    },
    detailedScenario: {
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px'
    },
    scenarioHeaderFlex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '12px'
    },
    scenarioMetrics: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
      gap: '16px',
      marginBottom: '12px',
      fontSize: '14px'
    },
    metricItem: {
      display: 'flex',
      flexDirection: 'column' as const
    },
    metricLabel: {
      color: '#6b7280'
    },
    metricValue: {
      fontWeight: '500'
    },
    summaryGrid: {
      padding: '12px',
      backgroundColor: '#f9fafb',
      borderRadius: '6px',
      fontSize: '14px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px'
    },
    assetItem: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '14px',
      padding: '8px',
      borderRadius: '4px',
      marginBottom: '4px'
    },
    greenBg: {
      backgroundColor: '#dcfce7'
    },
    blueBg: {
      backgroundColor: '#dbeafe'
    },
    taxBenefit: {
      padding: '12px',
      borderRadius: '8px'
    }
  };

  const getBadgeStyle = (value: number, thresholds: number[]) => {
    if (value >= thresholds[0]) return { ...styles.badge, ...styles.badgeGreen };
    if (value >= thresholds[1]) return { ...styles.badge, ...styles.badgeYellow };
    return { ...styles.badge, ...styles.badgeRed };
  };

  const getLicensingBadgeStyle = (potential: string) => {
    if (potential === 'High') return { ...styles.badge, ...styles.badgeGreen };
    if (potential === 'Medium') return { ...styles.badge, ...styles.badgeYellow };
    return { ...styles.badge, ...styles.badgeGray };
  };

  const getRecommendationStyle = (rec: string) => {
    if (rec === 'Build') return { ...styles.recommendation, ...styles.badgeGreen };
    if (rec === 'Buy') return { ...styles.recommendation, ...styles.badgeBlue };
    return { ...styles.recommendation, ...styles.badgePurple };
  };

  const getValueColor = (isPositive: boolean) => ({
    fontWeight: '500',
    color: isPositive ? '#059669' : '#dc2626'
  });

  const getOwnershipColor = (ownership: string) => ({
    fontWeight: '500',
    color: ownership === '100%' ? '#059669' : 
           ownership === '50%' ? '#d97706' : '#dc2626'
  });

  const getIpStrengthColor = (strength: number) => ({
    fontWeight: '500',
    color: strength >= 80 ? '#059669' : 
           strength >= 50 ? '#d97706' : '#dc2626'
  });

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>IP & Technology Portfolio Manager</h1>
        <p style={styles.subtitle}>Technology asset management with IP strategy analysis</p>
      </div>

      {/* Navigation */}
      <nav style={styles.nav}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                ...styles.navButton,
                ...(activeTab === tab.id ? styles.navButtonActive : styles.navButtonInactive)
              }}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          );
        })}
      </nav>

      <div style={styles.main}>
        {/* Portfolio Overview */}
        {activeTab === 'portfolio' && (
          <>
            {/* Enhanced KPI Cards */}
            <div style={{ ...styles.grid, ...styles.grid4 }}>
              <div style={styles.cardSmall}>
                <div style={styles.kpiCard}>
                  <div>
                    <p style={styles.kpiText}>Total Portfolio Value</p>
                    <p style={styles.kpiValue}>{formatCurrency(totals.value)}</p>
                  </div>
                  <TrendingUp size={32} color="#3b82f6" />
                </div>
              </div>
              <div style={styles.cardSmall}>
                <div style={styles.kpiCard}>
                  <div>
                    <p style={styles.kpiText}>Annual Maintenance</p>
                    <p style={styles.kpiValue}>{formatCurrency(totals.maintenance)}</p>
                  </div>
                  <DollarSign size={32} color="#10b981" />
                </div>
              </div>
              <div style={styles.cardSmall}>
                <div style={styles.kpiCard}>
                  <div>
                    <p style={styles.kpiText}>Avg IP Strength</p>
                    <p style={styles.kpiValue}>{totals.avgIpStrength}/100</p>
                  </div>
                  <Award size={32} color="#8b5cf6" />
                </div>
              </div>
              <div style={styles.cardSmall}>
                <div style={styles.kpiCard}>
                  <div>
                    <p style={styles.kpiText}>Patent Opportunities</p>
                    <p style={styles.kpiValue}>{totals.totalPatentOpps}</p>
                  </div>
                  <Shield size={32} color="#f59e0b" />
                </div>
              </div>
            </div>

            {/* Portfolio Breakdown */}
            <div style={{ ...styles.grid, ...styles.grid2 }}>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Portfolio by Type</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percentage }) => `${name} ${percentage}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [formatCurrency(value as number), 'Value']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div style={styles.card}>
                <h3 style={styles.cardTitle}>IP Strength Analysis</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {assets.map((asset, index) => (
                    <div key={index} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between', 
                      padding: '12px', 
                      backgroundColor: '#f9fafb', 
                      borderRadius: '6px' 
                    }}>
                      <div>
                        <div style={{ fontWeight: '500' }}>{asset.name}</div>
                        <div style={{ fontSize: '14px', color: '#6b7280' }}>
                          {asset.licensingPotential} licensing potential
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ 
                          fontSize: '18px', 
                          fontWeight: 'bold',
                          color: asset.ipStrength >= 80 ? '#059669' : 
                                 asset.ipStrength >= 50 ? '#d97706' : '#dc2626'
                        }}>
                          {asset.ipStrength}/100
                        </div>
                        <div style={{ fontSize: '12px', color: '#6b7280' }}>
                          {asset.patentOpps} patent opps
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Asset List */}
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Asset Details</h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.th}>Asset</th>
                      <th style={styles.th}>Type</th>
                      <th style={{ ...styles.th, textAlign: 'right' }}>Value</th>
                      <th style={{ ...styles.th, textAlign: 'center' }}>IP Strength</th>
                      <th style={{ ...styles.th, textAlign: 'center' }}>Patent Opps</th>
                      <th style={{ ...styles.th, textAlign: 'center' }}>Licensing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assets.map((asset, index) => (
                      <tr key={index}>
                        <td style={{ ...styles.td, fontWeight: '500' }}>{asset.name}</td>
                        <td style={styles.td}>{asset.type}</td>
                        <td style={{ ...styles.td, textAlign: 'right' }}>{formatCurrency(asset.value)}</td>
                        <td style={{ ...styles.td, textAlign: 'center' }}>
                          <span style={getBadgeStyle(asset.ipStrength, [80, 50])}>
                            {asset.ipStrength}/100
                          </span>
                        </td>
                        <td style={{ ...styles.td, textAlign: 'center' }}>{asset.patentOpps}</td>
                        <td style={{ ...styles.td, textAlign: 'center' }}>
                          <span style={getLicensingBadgeStyle(asset.licensingPotential)}>
                            {asset.licensingPotential}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* Enhanced Build vs Buy with IP Analysis */}
        {activeTab === 'buildvsbuy' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Example Scenarios with Recommendations */}
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <h3 style={styles.cardTitle}>Build vs Buy vs Partner Analysis</h3>
                <button style={styles.button}>
                  <Plus size={16} />
                  New Analysis
                </button>
              </div>

              <div style={styles.scenarioGrid}>
                {buildVsBuyExamples.map((example) => (
                  <div key={example.scenario} style={styles.scenario}>
                    <div style={styles.scenarioTitle}>
                      <h4 style={{ margin: '0 0 8px 0' }}>{example.scenario}</h4>
                      <span style={getRecommendationStyle(example.recommendation)}>
                        Recommend: {example.recommendation}
                      </span>
                    </div>
                    <div style={styles.scenarioDetails}>
                      <div style={styles.scenarioRow}>
                        <span>Upfront Cost:</span>
                        <span style={{ fontWeight: '500' }}>${example.upfront}K</span>
                      </div>
                      <div style={styles.scenarioRow}>
                        <span>Annual Cost:</span>
                        <span style={{ fontWeight: '500' }}>${example.annual}K</span>
                      </div>
                      <div style={styles.scenarioRow}>
                        <span>IP Ownership:</span>
                        <span style={getOwnershipColor(example.ownership)}>
                          {example.ownership}
                        </span>
                      </div>
                      <div style={styles.scenarioRow}>
                        <span>IP Strength:</span>
                        <span style={getIpStrengthColor(example.ipStrength)}>
                          {example.ipStrength}/100
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scenario Modeling Section */}
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <h3 style={styles.cardTitle}>Scenario Modeling with IP Impact</h3>
                <div style={styles.buttonGroup}>
                  <button style={styles.buttonPurple}>
                    <TrendingUp size={16} />
                    Ask AI
                  </button>
                  <button style={styles.buttonGreen}>
                    <Plus size={16} />
                    Create Scenario
                  </button>
                </div>
              </div>

              <div style={styles.infoBox}>
                <strong>AI Assistant:</strong> Click "Ask AI" to generate new scenarios based on your industry, technology stack, or specific challenges.
              </div>

              <div>
                <div style={styles.detailedScenario}>
                  <div style={styles.scenarioHeaderFlex}>
                    <h4 style={{ margin: 0, fontWeight: '500' }}>Scenario: Build Custom Analytics with Patent Strategy</h4>
                    <div style={styles.buttonGroup}>
                      <a style={styles.linkButton}>Edit Parameters</a>
                      <a style={styles.linkButton}>Run Analysis</a>
                    </div>
                  </div>
                  
                  <div style={styles.scenarioMetrics}>
                    <div style={styles.metricItem}>
                      <span style={styles.metricLabel}>Build Cost:</span>
                      <div style={getValueColor(false)}>$2,200K</div>
                    </div>
                    <div style={styles.metricItem}>
                      <span style={styles.metricLabel}>Annual Savings:</span>
                      <div style={getValueColor(true)}>$180K</div>
                    </div>
                    <div style={styles.metricItem}>
                      <span style={styles.metricLabel}>Patent Filing:</span>
                      <div style={styles.metricValue}>$120K</div>
                    </div>
                    <div style={styles.metricItem}>
                      <span style={styles.metricLabel}>Licensing Revenue:</span>
                      <div style={getValueColor(true)}>$300K/year</div>
                    </div>
                    <div style={styles.metricItem}>
                      <span style={styles.metricLabel}>IP Strength:</span>
                      <div style={getValueColor(true)}>95/100</div>
                    </div>
                  </div>
                  
                  <div style={styles.summaryGrid}>
                    <div>
                      <strong>Financial:</strong> 5-year NPV: +$1.2M (including IP revenue)
                    </div>
                    <div>
                      <strong>IP Value:</strong> 4 patents, strong competitive moat
                    </div>
                    <div>
                      <strong>Risk:</strong> Patent prosecution timeline (18 months)
                    </div>
                  </div>
                </div>

                <div style={styles.detailedScenario}>
                  <div style={styles.scenarioHeaderFlex}>
                    <h4 style={{ margin: 0, fontWeight: '500' }}>Scenario: License + Co-development Hybrid</h4>
                    <div style={styles.buttonGroup}>
                      <a style={styles.linkButton}>Edit Parameters</a>
                      <a style={styles.linkButton}>Run Analysis</a>
                    </div>
                  </div>
                  
                  <div style={styles.scenarioMetrics}>
                    <div style={styles.metricItem}>
                      <span style={styles.metricLabel}>License Cost:</span>
                      <div style={styles.metricValue}>$800K</div>
                    </div>
                    <div style={styles.metricItem}>
                      <span style={styles.metricLabel}>Co-dev Investment:</span>
                      <div style={styles.metricValue}>$600K</div>
                    </div>
                    <div style={styles.metricItem}>
                      <span style={styles.metricLabel}>Shared IP Revenue:</span>
                      <div style={getValueColor(true)}>$150K/year</div>
                    </div>
                    <div style={styles.metricItem}>
                      <span style={styles.metricLabel}>Cross-licensing:</span>
                      <div style={getValueColor(true)}>$75K/year</div>
                    </div>
                    <div style={styles.metricItem}>
                      <span style={styles.metricLabel}>IP Strength:</span>
                      <div style={getIpStrengthColor(65)}>65/100</div>
                    </div>
                  </div>
                  
                  <div style={styles.summaryGrid}>
                    <div>
                      <strong>Financial:</strong> Lower risk, moderate returns
                    </div>
                    <div>
                      <strong>IP Value:</strong> Shared ownership, cross-licensing benefits
                    </div>
                    <div>
                      <strong>Strategy:</strong> Faster market entry, reduced R&D burden
                    </div>
                  </div>
                </div>

                <div style={styles.detailedScenario}>
                  <div style={styles.scenarioHeaderFlex}>
                    <h4 style={{ margin: 0, fontWeight: '500' }}>Scenario: Cloud Migration with Vendor Partnership</h4>
                    <div style={styles.buttonGroup}>
                      <a style={styles.linkButton}>Edit Parameters</a>
                      <a style={styles.linkButton}>Run Analysis</a>
                    </div>
                  </div>
                  
                  <div style={styles.scenarioMetrics}>
                    <div style={styles.metricItem}>
                      <span style={styles.metricLabel}>Migration Cost:</span>
                      <div style={getValueColor(false)}>$800K</div>
                    </div>
                    <div style={styles.metricItem}>
                      <span style={styles.metricLabel}>Annual Savings:</span>
                      <div style={getValueColor(true)}>$120K</div>
                    </div>
                    <div style={styles.metricItem}>
                      <span style={styles.metricLabel}>Vendor Lock Risk:</span>
                      <div style={getIpStrengthColor(50)}>Medium</div>
                    </div>
                    <div style={styles.metricItem}>
                      <span style={styles.metricLabel}>IP Ownership:</span>
                      <div style={getValueColor(false)}>0%</div>
                    </div>
                    <div style={styles.metricItem}>
                      <span style={styles.metricLabel}>IP Strength:</span>
                      <div style={getValueColor(false)}>25/100</div>
                    </div>
                  </div>
                  
                  <div style={styles.summaryGrid}>
                    <div>
                      <strong>Financial:</strong> Break-even in 3.2 years
                    </div>
                    <div>
                      <strong>Risk:</strong> Vendor dependency, data sovereignty
                    </div>
                    <div>
                      <strong>IP Impact:</strong> No patent opportunities, limited defensibility
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Financial & Tax View */}
        {activeTab === 'financial' && (
          <div style={{ ...styles.grid, ...styles.grid2 }}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Capitalized vs Expensed</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <h4 style={{ color: '#059669', marginBottom: '8px', fontWeight: '500' }}>Capitalized Assets</h4>
                  {assets.filter(a => a.capitalized).map((asset, index) => (
                    <div key={index} style={{ 
                      ...styles.assetItem, 
                      ...styles.greenBg
                    }}>
                      <span>{asset.name}</span>
                      <span>{formatCurrency(asset.value)}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 style={{ color: '#2563eb', marginBottom: '8px', fontWeight: '500' }}>Expensed Assets</h4>
                  {assets.filter(a => !a.capitalized).map((asset, index) => (
                    <div key={index} style={{ 
                      ...styles.assetItem, 
                      ...styles.blueBg
                    }}>
                      <span>{asset.name}</span>
                      <span>{formatCurrency(asset.maintenance)}/year</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Tax Benefits</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ 
                  ...styles.taxBenefit, 
                  backgroundColor: '#dcfce7' 
                }}>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>Annual R&D Credits</div>
                  <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#059669' }}>
                    {formatCurrency(totals.rdCredits)}
                  </div>
                </div>
                <div style={{ 
                  ...styles.taxBenefit, 
                  backgroundColor: '#dbeafe' 
                }}>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>Amortization Benefit</div>
                  <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#2563eb' }}>
                    {formatCurrency(assets.filter(a => a.capitalized).reduce((sum, a) => sum + (a.value / 5), 0))}
                  </div>
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>Annual deduction (5-year)</div>
                </div>
                <div style={{ 
                  ...styles.taxBenefit, 
                  backgroundColor: '#f3e8ff' 
                }}>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>Patent Tax Benefits</div>
                  <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#7c3aed' }}>$85K</div>
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>IP box regime savings</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Home() {
  return <IPPortfolioManager />;
}