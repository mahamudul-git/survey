import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit3, 
  Eye, 
  Trash2, 
  Copy, 
  Share2,
  BarChart3,
  Calendar,
  Users,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

const MySurveys = () => {
  const [surveys, setSurveys] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('created');
  const [showDropdown, setShowDropdown] = useState(null);

  // Mock data for surveys
  useEffect(() => {
    const mockSurveys = [
      {
        id: 1,
        title: 'Customer Satisfaction Survey',
        description: 'Gathering feedback from our customers about their experience',
        status: 'active',
        responses: 156,
        views: 342,
        created: '2024-01-15',
        lastModified: '2024-01-20',
        type: 'feedback',
        questions: 12
      },
      {
        id: 2,
        title: 'Product Feature Preferences',
        description: 'Understanding what features users want most',
        status: 'draft',
        responses: 0,
        views: 0,
        created: '2024-01-18',
        lastModified: '2024-01-18',
        type: 'market-research',
        questions: 8
      },
      {
        id: 3,
        title: 'Employee Engagement Survey',
        description: 'Annual survey to measure employee satisfaction',
        status: 'completed',
        responses: 89,
        views: 156,
        created: '2024-01-10',
        lastModified: '2024-01-25',
        type: 'hr',
        questions: 15
      },
      {
        id: 4,
        title: 'Website Usability Study',
        description: 'Testing user experience on our new website design',
        status: 'active',
        responses: 234,
        views: 567,
        created: '2024-01-12',
        lastModified: '2024-01-22',
        type: 'ux-research',
        questions: 10
      }
    ];
    setSurveys(mockSurveys);
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'draft':
        return <AlertCircle className="w-4 h-4 text-yellow-400" />;
      case 'completed':
        return <XCircle className="w-4 h-4 text-gray-400" />;
      default:
        return <Clock className="w-4 h-4 text-blue-400" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'draft':
        return 'Draft';
      case 'completed':
        return 'Completed';
      default:
        return 'Unknown';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'draft':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'completed':
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
      default:
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    }
  };

  const filteredSurveys = surveys.filter(survey => {
    const matchesSearch = survey.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         survey.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || survey.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const sortedSurveys = [...filteredSurveys].sort((a, b) => {
    switch (sortBy) {
      case 'created':
        return new Date(b.created) - new Date(a.created);
      case 'modified':
        return new Date(b.lastModified) - new Date(a.lastModified);
      case 'responses':
        return b.responses - a.responses;
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const handleDelete = (surveyId) => {
    setSurveys(surveys.filter(s => s.id !== surveyId));
    setShowDropdown(null);
  };

  const handleDuplicate = (survey) => {
    const newSurvey = {
      ...survey,
      id: Date.now(),
      title: `${survey.title} (Copy)`,
      status: 'draft',
      responses: 0,
      views: 0,
      created: new Date().toISOString().split('T')[0],
      lastModified: new Date().toISOString().split('T')[0]
    };
    setSurveys([newSurvey, ...surveys]);
    setShowDropdown(null);
  };

  return (
    <div className="min-h-screen bg-[#0B111E] pt-20">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">My Surveys</h1>
            <p className="text-gray-400">Manage and track all your surveys in one place</p>
          </div>
          <Link
            to="/create"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 bg-[#9767E4] hover:bg-[#8B5CF6] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            <Plus className="w-5 h-5" />
            Create New Survey
          </Link>
        </div>

        {/* Filters and Search */}
        <div className="bg-[#1A1F2E]/50 backdrop-blur-sm border border-[#9767E4]/20 rounded-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search surveys..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#0B111E]/80 border border-[#9767E4]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9767E4]/50 focus:border-[#9767E4]/60"
              />
            </div>

            {/* Status Filter */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2.5 bg-[#0B111E]/80 border border-[#9767E4]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#9767E4]/50 focus:border-[#9767E4]/60"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="draft">Draft</option>
              <option value="completed">Completed</option>
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2.5 bg-[#0B111E]/80 border border-[#9767E4]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#9767E4]/50 focus:border-[#9767E4]/60"
            >
              <option value="created">Sort by Created</option>
              <option value="modified">Sort by Modified</option>
              <option value="responses">Sort by Responses</option>
              <option value="title">Sort by Title</option>
            </select>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#1A1F2E]/50 backdrop-blur-sm border border-[#9767E4]/20 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <BarChart3 className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Total Surveys</p>
                <p className="text-2xl font-bold text-white">{surveys.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1A1F2E]/50 backdrop-blur-sm border border-[#9767E4]/20 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Active</p>
                <p className="text-2xl font-bold text-white">{surveys.filter(s => s.status === 'active').length}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1A1F2E]/50 backdrop-blur-sm border border-[#9767E4]/20 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#9767E4]/20 rounded-lg">
                <Users className="w-6 h-6 text-[#9767E4]" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Total Responses</p>
                <p className="text-2xl font-bold text-white">{surveys.reduce((sum, s) => sum + s.responses, 0)}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1A1F2E]/50 backdrop-blur-sm border border-[#9767E4]/20 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-500/20 rounded-lg">
                <AlertCircle className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Drafts</p>
                <p className="text-2xl font-bold text-white">{surveys.filter(s => s.status === 'draft').length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Surveys List */}
        <div className="space-y-4">
          {sortedSurveys.length === 0 ? (
            <div className="text-center py-12 bg-[#1A1F2E]/50 backdrop-blur-sm border border-[#9767E4]/20 rounded-xl">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No surveys found</h3>
              <p className="text-gray-400 mb-6">
                {searchTerm || filterStatus !== 'all' ? 'Try adjusting your search or filters' : 'Create your first survey to get started'}
              </p>
              <Link
                to="/create"
                className="inline-flex items-center gap-2 bg-[#9767E4] hover:bg-[#8B5CF6] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <Plus className="w-5 h-5" />
                Create Survey
              </Link>
            </div>
          ) : (
            sortedSurveys.map((survey) => (
              <div
                key={survey.id}
                className="bg-[#1A1F2E]/50 backdrop-blur-sm border border-[#9767E4]/20 rounded-xl hover:border-[#9767E4]/40 transition-all duration-200 group"
              >
                {/* Clickable survey card area */}
                <Link
                  to={`/survey/${survey.id}/analytics`}
                  className="block p-6 pb-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-white group-hover:text-[#9767E4] transition-colors duration-200">{survey.title}</h3>
                            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium border ${getStatusColor(survey.status)}`}>
                              {getStatusIcon(survey.status)}
                              {getStatusText(survey.status)}
                            </span>
                          </div>
                          <p className="text-gray-400 mb-4">{survey.description}</p>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              <span>{survey.responses} responses</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              <span>{survey.views} views</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <BarChart3 className="w-4 h-4" />
                              <span>{survey.questions} questions</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>Created {survey.created}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Actions dropdown - separate from clickable area */}
                <div className="flex justify-end px-6 pb-6">
                  <div className="relative">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowDropdown(showDropdown === survey.id ? null : survey.id);
                      }}
                      className="p-2 text-gray-400 hover:text-white hover:bg-[#9767E4]/20 rounded-lg transition-colors duration-200"
                    >
                      <MoreVertical className="w-5 h-5" />
                    </button>

                    {showDropdown === survey.id && (
                      <div className="absolute right-0 top-full mt-2 w-48 bg-[#0B111E]/95 backdrop-blur-md border border-[#9767E4]/20 rounded-xl shadow-2xl z-50 py-2">
                        <Link
                          to={`/create/${survey.id}`}
                          className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-[#9767E4]/20 transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Edit3 className="w-4 h-4" />
                          Edit
                        </Link>
                        <Link
                          to={`/survey/${survey.id}/preview`}
                          className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-[#9767E4]/20 transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Eye className="w-4 h-4" />
                          Preview
                        </Link>
                        <Link
                          to={`/survey/${survey.id}/analytics`}
                          className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-[#9767E4]/20 transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <BarChart3 className="w-4 h-4" />
                          Analytics
                        </Link>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDuplicate(survey);
                          }}
                          className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-[#9767E4]/20 transition-colors duration-200 w-full text-left"
                        >
                          <Copy className="w-4 h-4" />
                          Duplicate
                        </button>
                        <button
                          className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-[#9767E4]/20 transition-colors duration-200 w-full text-left"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Share2 className="w-4 h-4" />
                          Share
                        </button>
                        <div className="border-t border-[#9767E4]/20 my-2"></div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(survey.id);
                          }}
                          className="flex items-center gap-3 px-4 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 transition-colors duration-200 w-full text-left"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MySurveys;
