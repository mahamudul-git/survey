import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft,
  Users,
  Eye,
  Calendar,
  Clock,
  BarChart3,
  PieChart,
  TrendingUp,
  Download,
  Share2,
  MapPin,
  Smartphone,
  Monitor,
  Tablet,
  Globe,
  Filter,
  RefreshCw
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
  BarElement
} from 'chart.js';
import { Line, Pie, Bar, Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
  BarElement
);

const SurveyAnalytics = () => {
  const { surveyId } = useParams();
  const [survey, setSurvey] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [timeRange, setTimeRange] = useState('7d');
  const [loading, setLoading] = useState(true);
  const [chartType, setChartType] = useState('line'); // 'line' or 'bar'

  useEffect(() => {
    // Mock data for the survey and its analytics
    const mockSurvey = {
      id: surveyId,
      title: 'Customer Satisfaction Survey',
      description: 'Gathering feedback from our customers about their experience',
      status: 'active',
      created: '2024-01-15',
      lastModified: '2024-01-20',
      questions: 12
    };

    const mockAnalytics = {
      overview: {
        totalResponses: 342,
        totalViews: 1205,
        completionRate: 78.4,
        averageTime: '4m 32s',
        responseRate: 28.4
      },
      responsesByDate: [
        { date: '2024-01-15', responses: 12 },
        { date: '2024-01-16', responses: 25 },
        { date: '2024-01-17', responses: 31 },
        { date: '2024-01-18', responses: 28 },
        { date: '2024-01-19', responses: 35 },
        { date: '2024-01-20', responses: 42 },
        { date: '2024-01-21', responses: 38 },
        { date: '2024-01-22', responses: 45 },
        { date: '2024-01-23', responses: 52 },
        { date: '2024-01-24', responses: 34 }
      ],
      demographics: {
        ageGroups: [
          { label: '18-24', value: 18, color: '#9767E4' },
          { label: '25-34', value: 32, color: '#C084FC' },
          { label: '35-44', value: 28, color: '#26B2F2' },
          { label: '45-54', value: 15, color: '#10B981' },
          { label: '55+', value: 7, color: '#F59E0B' }
        ],
        locations: [
          { country: 'United States', responses: 145, percentage: 42.4 },
          { country: 'United Kingdom', responses: 89, percentage: 26.0 },
          { country: 'Canada', responses: 54, percentage: 15.8 },
          { country: 'Australia', responses: 32, percentage: 9.4 },
          { country: 'Germany', responses: 22, percentage: 6.4 }
        ]
      },
      devices: {
        desktop: 58,
        mobile: 35,
        tablet: 7
      },
      questions: [
        {
          id: 1,
          question: 'What is your name?',
          type: 'text',
          responses: 342,
          averageLength: 12.5,
          commonWords: ['John', 'Sarah', 'Michael', 'Emma', 'David']
        },
        {
          id: 2,
          question: 'Please describe your experience with our product',
          type: 'long-text',
          responses: 298,
          averageLength: 156,
          wordCount: 46487,
          sentiment: { positive: 68, neutral: 24, negative: 8 }
        },
        {
          id: 3,
          question: 'Which platform do you primarily use?',
          type: 'multiple-choice',
          responses: 342,
          options: [
            { option: 'Web Browser', count: 198, percentage: 57.9 },
            { option: 'Mobile App', count: 156, percentage: 45.6 },
            { option: 'Desktop App', count: 134, percentage: 39.2 },
            { option: 'Tablet', count: 89, percentage: 26.0 }
          ]
        },
        {
          id: 4,
          question: 'Which features are most important to you? (Select all that apply)',
          type: 'checkbox',
          responses: 342,
          options: [
            { option: 'Security', count: 278, percentage: 81.3 },
            { option: 'Speed', count: 245, percentage: 71.6 },
            { option: 'User Interface', count: 189, percentage: 55.3 },
            { option: 'Customer Support', count: 167, percentage: 48.8 },
            { option: 'Pricing', count: 156, percentage: 45.6 }
          ]
        },
        {
          id: 5,
          question: 'How would you rate your overall satisfaction?',
          type: 'rating',
          responses: 342,
          averageRating: 4.2,
          distribution: [
            { rating: 5, count: 156, percentage: 45.6 },
            { rating: 4, count: 102, percentage: 29.8 },
            { rating: 3, count: 54, percentage: 15.8 },
            { rating: 2, count: 21, percentage: 6.1 },
            { rating: 1, count: 9, percentage: 2.6 }
          ]
        },
        {
          id: 6,
          question: 'What is your preferred contact method?',
          type: 'dropdown',
          responses: 342,
          options: [
            { option: 'Email', count: 167, percentage: 48.8 },
            { option: 'Phone', count: 89, percentage: 26.0 },
            { option: 'Text Message', count: 56, percentage: 16.4 },
            { option: 'Live Chat', count: 30, percentage: 8.8 }
          ]
        },
        {
          id: 7,
          question: 'When did you first start using our service?',
          type: 'date',
          responses: 342,
          dateRange: { earliest: '2020-01-15', latest: '2024-01-20' },
          distribution: [
            { period: '2024', count: 89, percentage: 26.0 },
            { period: '2023', count: 134, percentage: 39.2 },
            { period: '2022', count: 78, percentage: 22.8 },
            { period: '2021', count: 28, percentage: 8.2 },
            { period: '2020', count: 13, percentage: 3.8 }
          ]
        },
        {
          id: 8,
          question: 'How many hours per week do you use our platform?',
          type: 'number',
          responses: 342,
          average: 12.4,
          median: 8,
          range: { min: 1, max: 40 },
          distribution: [
            { range: '1-5 hours', count: 98, percentage: 28.7 },
            { range: '6-10 hours', count: 134, percentage: 39.2 },
            { range: '11-20 hours', count: 78, percentage: 22.8 },
            { range: '21+ hours', count: 32, percentage: 9.4 }
          ]
        },
        {
          id: 9,
          question: 'Which design appeals to you most?',
          type: 'image-choice',
          responses: 342,
          options: [
            { option: 'Modern Minimal', count: 156, percentage: 45.6, image: 'design1.jpg' },
            { option: 'Classic Professional', count: 98, percentage: 28.7, image: 'design2.jpg' },
            { option: 'Colorful Creative', count: 67, percentage: 19.6, image: 'design3.jpg' },
            { option: 'Dark Theme', count: 21, percentage: 6.1, image: 'design4.jpg' }
          ]
        },
        {
          id: 10,
          question: 'Rate the following aspects of our service',
          type: 'matrix',
          responses: 342,
          aspects: [
            {
              aspect: 'Ease of Use',
              ratings: [
                { rating: 5, count: 145, percentage: 42.4 },
                { rating: 4, count: 123, percentage: 36.0 },
                { rating: 3, count: 45, percentage: 13.2 },
                { rating: 2, count: 19, percentage: 5.6 },
                { rating: 1, count: 10, percentage: 2.9 }
              ],
              average: 4.1
            },
            {
              aspect: 'Customer Support',
              ratings: [
                { rating: 5, count: 134, percentage: 39.2 },
                { rating: 4, count: 112, percentage: 32.7 },
                { rating: 3, count: 56, percentage: 16.4 },
                { rating: 2, count: 28, percentage: 8.2 },
                { rating: 1, count: 12, percentage: 3.5 }
              ],
              average: 3.9
            },
            {
              aspect: 'Value for Money',
              ratings: [
                { rating: 5, count: 98, percentage: 28.7 },
                { rating: 4, count: 134, percentage: 39.2 },
                { rating: 3, count: 78, percentage: 22.8 },
                { rating: 2, count: 23, percentage: 6.7 },
                { rating: 1, count: 9, percentage: 2.6 }
              ],
              average: 3.8
            }
          ]
        }
      ]
    };

    setTimeout(() => {
      setSurvey(mockSurvey);
      setAnalytics(mockAnalytics);
      setLoading(false);
    }, 1000);
  }, [surveyId]);

  // Export chart data as CSV
  const exportData = () => {
    const csvData = [
      ['Date', 'Responses'],
      ...analytics.responsesByDate.map(d => [d.date, d.responses])
    ];
    
    const csvContent = csvData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${survey.title}_analytics.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B111E] pt-20 flex items-center justify-center">
        <div className="flex items-center gap-3 text-white">
          <RefreshCw className="w-6 h-6 animate-spin" />
          <span>Loading analytics...</span>
        </div>
      </div>
    );
  }

  if (!survey || !analytics) {
    return (
      <div className="min-h-screen bg-[#0B111E] pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Survey not found</h2>
          <p className="text-gray-400 mb-6">The survey you're looking for doesn't exist or has been deleted.</p>
          <Link
            to="/my-surveys"
            className="inline-flex items-center gap-2 bg-[#9767E4] hover:bg-[#8B5CF6] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to My Surveys
          </Link>
        </div>
      </div>
    );
  }

  // Chart.js configuration for Response Trend Line Chart
  const lineChartData = {
    labels: analytics.responsesByDate.map(d => {
      const date = new Date(d.date);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }),
    datasets: [
      {
        label: 'Daily Responses',
        data: analytics.responsesByDate.map(d => d.responses),
        borderColor: '#9767E4',
        backgroundColor: 'rgba(151, 103, 228, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#9767E4',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: '#C084FC',
        pointHoverBorderColor: '#ffffff',
        pointHoverBorderWidth: 3,
      }
    ]
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(11, 17, 30, 0.95)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#9767E4',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          title: function(context) {
            return `${context[0].label}`;
          },
          label: function(context) {
            return `${context.parsed.y} responses`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(151, 103, 228, 0.1)',
          borderColor: 'rgba(151, 103, 228, 0.2)'
        },
        ticks: {
          color: '#94a3b8',
          font: {
            size: 12
          }
        }
      },
      y: {
        grid: {
          color: 'rgba(151, 103, 228, 0.1)',
          borderColor: 'rgba(151, 103, 228, 0.2)'
        },
        ticks: {
          color: '#94a3b8',
          font: {
            size: 12
          },
          beginAtZero: true
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    },
    elements: {
      point: {
        hoverRadius: 8
      }
    }
  };

  // Chart.js configuration for Device Breakdown Pie Chart
  const pieChartData = {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [
      {
        data: [analytics.devices.desktop, analytics.devices.mobile, analytics.devices.tablet],
        backgroundColor: [
          '#3B82F6', // Blue for Desktop
          '#10B981', // Green for Mobile
          '#8B5CF6'  // Purple for Tablet
        ],
        borderColor: [
          '#2563EB',
          '#059669',
          '#7C3AED'
        ],
        borderWidth: 2,
        hoverBackgroundColor: [
          '#60A5FA',
          '#34D399',
          '#A78BFA'
        ],
        hoverBorderWidth: 3,
        hoverOffset: 10
      }
    ]
  };

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#ffffff',
          padding: 20,
          font: {
            size: 14,
            weight: '500'
          },
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(11, 17, 30, 0.95)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#9767E4',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.parsed;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value}% (${percentage}% of responses)`;
          }
        }
      }
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 1000
    },
    elements: {
      arc: {
        borderWidth: 2
      }
    }
  };

  // Chart.js configuration for Age Demographics Bar Chart
  const barChartData = {
    labels: analytics.demographics.ageGroups.map(group => group.label),
    datasets: [
      {
        label: 'Age Distribution',
        data: analytics.demographics.ageGroups.map(group => group.value),
        backgroundColor: analytics.demographics.ageGroups.map(group => group.color + '80'), // Add transparency
        borderColor: analytics.demographics.ageGroups.map(group => group.color),
        borderWidth: 2,
        borderRadius: 6,
        borderSkipped: false,
        hoverBackgroundColor: analytics.demographics.ageGroups.map(group => group.color),
        hoverBorderWidth: 3
      }
    ]
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y', // This makes it a horizontal bar chart
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(11, 17, 30, 0.95)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#9767E4',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return `${context.parsed.x}% of respondents`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(151, 103, 228, 0.1)',
          borderColor: 'rgba(151, 103, 228, 0.2)'
        },
        ticks: {
          color: '#94a3b8',
          font: {
            size: 12
          },
          callback: function(value) {
            return value + '%';
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: '#94a3b8',
          font: {
            size: 12
          }
        }
      }
    },
    animation: {
      duration: 1000,
      easing: 'easeOutQuart'
    }
  };

  // Chart.js configuration for Top Locations Doughnut Chart
  const locationsChartData = {
    labels: analytics.demographics.locations.map(location => location.country),
    datasets: [
      {
        label: 'Responses by Location',
        data: analytics.demographics.locations.map(location => location.responses),
        backgroundColor: [
          '#3B82F6',   // Blue for United States
          '#10B981',   // Green for United Kingdom
          '#F59E0B',   // Amber for Canada
          '#EF4444',   // Red for Australia
          '#8B5CF6'    // Purple for Germany
        ],
        borderColor: [
          '#1E40AF',
          '#047857',
          '#D97706',
          '#DC2626',
          '#6D28D9'
        ],
        borderWidth: 3,
        hoverBackgroundColor: [
          '#60A5FA',
          '#34D399',
          '#FBBF24',
          '#F87171',
          '#A78BFA'
        ],
        hoverBorderWidth: 4,
        hoverOffset: 15,
        cutout: '65%', // This creates the doughnut hole
        spacing: 2
      }
    ]
  };

  const locationsChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#ffffff',
          padding: 20,
          font: {
            size: 13,
            weight: '500'
          },
          usePointStyle: true,
          pointStyle: 'circle',
          generateLabels: function(chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label, i) => {
                const dataset = data.datasets[0];
                const location = analytics.demographics.locations[i];
                return {
                  text: `${label} (${location.percentage}%)`,
                  fillStyle: dataset.backgroundColor[i],
                  strokeStyle: dataset.borderColor[i],
                  lineWidth: dataset.borderWidth,
                  pointStyle: 'circle',
                  fontColor: '#ffffff', // Explicitly set text color to white
                  hidden: false,
                  index: i
                };
              });
            }
            return [];
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(11, 17, 30, 0.95)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#9767E4',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          title: function(context) {
            return context[0].label;
          },
          label: function(context) {
            const location = analytics.demographics.locations[context.dataIndex];
            const total = analytics.overview.totalResponses;
            return [
              `${context.parsed} responses`,
              `${location.percentage}% of total`,
              `${((context.parsed / total) * 100).toFixed(1)}% completion rate`
            ];
          }
        }
      }
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 1500,
      easing: 'easeOutQuart'
    },
    elements: {
      arc: {
        borderWidth: 3,
        borderJoinStyle: 'round'
      }
    },
    interaction: {
      intersect: false,
      mode: 'point'
    }
  };

  return (
    <div className="min-h-screen bg-[#0B111E] pt-20">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <Link
              to="/my-surveys"
              className="p-2 text-gray-400 hover:text-white hover:bg-[#9767E4]/20 rounded-lg transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">{survey.title}</h1>
              <p className="text-gray-400">Analytics Dashboard</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 bg-[#1A1F2E]/80 border border-[#9767E4]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#9767E4]/50"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="all">All time</option>
            </select>
            <button 
              onClick={exportData}
              className="p-2 text-gray-400 hover:text-white hover:bg-[#9767E4]/20 rounded-lg transition-colors duration-200"
              title="Export Analytics Data"
            >
              <Download className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white hover:bg-[#9767E4]/20 rounded-lg transition-colors duration-200">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-[#1A1F2E]/50 backdrop-blur-sm border border-[#9767E4]/20 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Total Responses</p>
                <p className="text-2xl font-bold text-white">{analytics.overview.totalResponses}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1A1F2E]/50 backdrop-blur-sm border border-[#9767E4]/20 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#9767E4]/20 rounded-lg">
                <Eye className="w-6 h-6 text-[#9767E4]" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Total Views</p>
                <p className="text-2xl font-bold text-white">{analytics.overview.totalViews.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1A1F2E]/50 backdrop-blur-sm border border-[#9767E4]/20 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Completion Rate</p>
                <p className="text-2xl font-bold text-white">{analytics.overview.completionRate}%</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1A1F2E]/50 backdrop-blur-sm border border-[#9767E4]/20 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-500/20 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Avg. Time</p>
                <p className="text-2xl font-bold text-white">{analytics.overview.averageTime}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1A1F2E]/50 backdrop-blur-sm border border-[#9767E4]/20 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <BarChart3 className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Response Rate</p>
                <p className="text-2xl font-bold text-white">{analytics.overview.responseRate}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Interactive Response Trend Line Chart */}
          <div className="bg-[#1A1F2E]/50 backdrop-blur-sm border border-[#9767E4]/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Response Trend</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>Chart</span>
                </div>
                <div className="flex bg-[#0B111E]/50 rounded-lg p-1">
                  <button
                    onClick={() => setChartType('line')}
                    className={`px-3 py-1 text-xs rounded-md transition-colors duration-200 ${
                      chartType === 'line' 
                        ? 'bg-[#9767E4] text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Line
                  </button>
                  <button
                    onClick={() => setChartType('bar')}
                    className={`px-3 py-1 text-xs rounded-md transition-colors duration-200 ${
                      chartType === 'bar' 
                        ? 'bg-[#9767E4] text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Bar
                  </button>
                </div>
              </div>
            </div>
            <div className="h-80">
              {chartType === 'line' ? (
                <Line data={lineChartData} options={lineChartOptions} />
              ) : (
                <Bar data={{
                  ...lineChartData,
                  datasets: [{
                    ...lineChartData.datasets[0],
                    backgroundColor: 'rgba(151, 103, 228, 0.8)',
                    borderColor: '#9767E4',
                    borderWidth: 2,
                    borderRadius: 4,
                    borderSkipped: false
                  }]
                }} options={{
                  ...lineChartOptions,
                  plugins: {
                    ...lineChartOptions.plugins,
                    legend: {
                      display: false
                    }
                  }
                }} />
              )}
            </div>
          </div>

          {/* Interactive Device Breakdown Pie Chart */}
          <div className="bg-[#1A1F2E]/50 backdrop-blur-sm border border-[#9767E4]/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Device Breakdown</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <PieChart className="w-4 h-4" />
                <span>Chart</span>
              </div>
            </div>
            <div className="h-80">
              <Pie data={pieChartData} options={pieChartOptions} />
            </div>
          </div>
        </div>

        {/* Demographics & Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Interactive Age Demographics Bar Chart */}
          <div className="bg-[#1A1F2E]/50 backdrop-blur-sm border border-[#9767E4]/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Age Demographics</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <BarChart3 className="w-4 h-4" />
                <span>Chart</span>
              </div>
            </div>
            <div className="h-80">
              <Bar data={barChartData} options={barChartOptions} />
            </div>
          </div>

          {/* Interactive Top Locations Bar Chart */}
          <div className="bg-[#1A1F2E]/50 backdrop-blur-sm border border-[#9767E4]/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Top Locations</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Globe className="w-4 h-4" />
                <span>Chart</span>
              </div>
            </div>
            <div className="h-80">
              <Doughnut data={locationsChartData} options={locationsChartOptions} />
            </div>
          </div>
        </div>

        {/* Question Analysis */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Question Analysis</h2>
          
          {analytics.questions.map((question, index) => (
            <div key={question.id} className="bg-[#1A1F2E]/50 backdrop-blur-sm border border-[#9767E4]/20 rounded-xl p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Q{index + 1}: {question.question}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{question.responses} responses</span>
                    <span className="capitalize bg-[#9767E4]/20 text-[#C084FC] px-2 py-1 rounded-md text-xs">
                      {question.type.replace('-', ' ')}
                    </span>
                    {question.averageRating && (
                      <span>Average: {question.averageRating}/5</span>
                    )}
                    {question.average && (
                      <span>Average: {question.average}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Text Input */}
              {question.type === 'text' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#0B111E]/30 rounded-lg p-4">
                      <p className="text-sm text-gray-400 mb-1">Average Length</p>
                      <p className="text-xl font-bold text-white">{question.averageLength} characters</p>
                    </div>
                    <div className="bg-[#0B111E]/30 rounded-lg p-4">
                      <p className="text-sm text-gray-400 mb-1">Response Rate</p>
                      <p className="text-xl font-bold text-white">{((question.responses / 342) * 100).toFixed(1)}%</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Common Names</p>
                    <div className="flex flex-wrap gap-2">
                      {question.commonWords.map((word, idx) => (
                        <span key={idx} className="bg-[#9767E4]/20 text-[#C084FC] px-3 py-1 rounded-full text-sm">
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Long Text */}
              {question.type === 'long-text' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-[#0B111E]/30 rounded-lg p-4">
                      <p className="text-sm text-gray-400 mb-1">Avg Length</p>
                      <p className="text-xl font-bold text-white">{question.averageLength} chars</p>
                    </div>
                    <div className="bg-[#0B111E]/30 rounded-lg p-4">
                      <p className="text-sm text-gray-400 mb-1">Total Words</p>
                      <p className="text-xl font-bold text-white">{question.wordCount.toLocaleString()}</p>
                    </div>
                    <div className="bg-[#0B111E]/30 rounded-lg p-4">
                      <p className="text-sm text-gray-400 mb-1">Response Rate</p>
                      <p className="text-xl font-bold text-white">{((question.responses / 342) * 100).toFixed(1)}%</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-3">Sentiment Analysis</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-green-400 w-16">Positive</span>
                        <div className="flex-1 bg-[#0B111E]/50 rounded-full h-3">
                          <div className="bg-green-500 h-full rounded-full" style={{ width: `${question.sentiment.positive}%` }} />
                        </div>
                        <span className="text-sm text-white">{question.sentiment.positive}%</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-yellow-400 w-16">Neutral</span>
                        <div className="flex-1 bg-[#0B111E]/50 rounded-full h-3">
                          <div className="bg-yellow-500 h-full rounded-full" style={{ width: `${question.sentiment.neutral}%` }} />
                        </div>
                        <span className="text-sm text-white">{question.sentiment.neutral}%</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-red-400 w-16">Negative</span>
                        <div className="flex-1 bg-[#0B111E]/50 rounded-full h-3">
                          <div className="bg-red-500 h-full rounded-full" style={{ width: `${question.sentiment.negative}%` }} />
                        </div>
                        <span className="text-sm text-white">{question.sentiment.negative}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Rating */}
              {question.type === 'rating' && (
                <div className="space-y-3">
                  {question.distribution.map((rating, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <span className="text-sm text-gray-400 w-8">{rating.rating}★</span>
                      <div className="flex-1 bg-[#0B111E]/50 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-[#9767E4] to-[#C084FC] h-full rounded-full transition-all duration-500"
                          style={{ width: `${rating.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-white w-16 text-right">
                        {rating.count} ({rating.percentage}%)
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Multiple Choice & Dropdown */}
              {(question.type === 'multiple-choice' || question.type === 'dropdown') && (
                <div className="space-y-3">
                  {question.options.map((option, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <span className="text-sm text-gray-300 flex-1">{option.option}</span>
                      <div className="w-32 bg-[#0B111E]/50 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-[#26B2F2] to-[#10B981] h-full rounded-full transition-all duration-500"
                          style={{ width: `${option.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-white w-16 text-right">
                        {option.count} ({option.percentage}%)
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Checkbox */}
              {question.type === 'checkbox' && (
                <div className="space-y-3">
                  <p className="text-sm text-gray-400 mb-3">Multiple selections allowed</p>
                  {question.options.map((option, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <span className="text-sm text-gray-300 flex-1">{option.option}</span>
                      <div className="w-32 bg-[#0B111E]/50 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-[#F59E0B] to-[#EF4444] h-full rounded-full transition-all duration-500"
                          style={{ width: `${option.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-white w-16 text-right">
                        {option.count} ({option.percentage}%)
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Date */}
              {question.type === 'date' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#0B111E]/30 rounded-lg p-4">
                      <p className="text-sm text-gray-400 mb-1">Date Range</p>
                      <p className="text-sm text-white">{question.dateRange.earliest} to {question.dateRange.latest}</p>
                    </div>
                    <div className="bg-[#0B111E]/30 rounded-lg p-4">
                      <p className="text-sm text-gray-400 mb-1">Response Rate</p>
                      <p className="text-xl font-bold text-white">{((question.responses / 342) * 100).toFixed(1)}%</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {question.distribution.map((period, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <span className="text-sm text-gray-300 w-12">{period.period}</span>
                        <div className="flex-1 bg-[#0B111E]/50 rounded-full h-3">
                          <div
                            className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] h-full rounded-full transition-all duration-500"
                            style={{ width: `${period.percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-white w-16 text-right">
                          {period.count} ({period.percentage}%)
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Number */}
              {question.type === 'number' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-[#0B111E]/30 rounded-lg p-4">
                      <p className="text-sm text-gray-400 mb-1">Average</p>
                      <p className="text-xl font-bold text-white">{question.average}</p>
                    </div>
                    <div className="bg-[#0B111E]/30 rounded-lg p-4">
                      <p className="text-sm text-gray-400 mb-1">Median</p>
                      <p className="text-xl font-bold text-white">{question.median}</p>
                    </div>
                    <div className="bg-[#0B111E]/30 rounded-lg p-4">
                      <p className="text-sm text-gray-400 mb-1">Range</p>
                      <p className="text-xl font-bold text-white">{question.range.min}-{question.range.max}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {question.distribution.map((range, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <span className="text-sm text-gray-300 w-20">{range.range}</span>
                        <div className="flex-1 bg-[#0B111E]/50 rounded-full h-3">
                          <div
                            className="bg-gradient-to-r from-[#10B981] to-[#059669] h-full rounded-full transition-all duration-500"
                            style={{ width: `${range.percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-white w-16 text-right">
                          {range.count} ({range.percentage}%)
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Image Choice */}
              {question.type === 'image-choice' && (
                <div className="space-y-3">
                  <p className="text-sm text-gray-400 mb-3">Visual selection results</p>
                  {question.options.map((option, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <span className="text-sm text-gray-300 flex-1">{option.option}</span>
                      <div className="w-32 bg-[#0B111E]/50 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-[#EC4899] to-[#BE185D] h-full rounded-full transition-all duration-500"
                          style={{ width: `${option.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-white w-16 text-right">
                        {option.count} ({option.percentage}%)
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Matrix/Grid */}
              {question.type === 'matrix' && (
                <div className="space-y-6">
                  {question.aspects.map((aspect, aspectIdx) => (
                    <div key={aspectIdx} className="bg-[#0B111E]/30 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-white font-medium">{aspect.aspect}</h4>
                        <span className="text-sm text-gray-400">Avg: {aspect.average}/5</span>
                      </div>
                      <div className="space-y-2">
                        {aspect.ratings.map((rating, ratingIdx) => (
                          <div key={ratingIdx} className="flex items-center gap-3">
                            <span className="text-xs text-gray-400 w-6">{rating.rating}★</span>
                            <div className="flex-1 bg-[#0B111E]/50 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-[#9767E4] to-[#C084FC] h-full rounded-full transition-all duration-500"
                                style={{ width: `${rating.percentage}%` }}
                              />
                            </div>
                            <span className="text-xs text-white w-12 text-right">
                              {rating.percentage}%
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurveyAnalytics;
