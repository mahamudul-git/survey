import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import { 
  ArrowLeft,
  Copy,
  Search,
  Calendar,
  Eye,
  Users,
  Filter,
  CheckCircle
} from "lucide-react";

export default function CreateCopy() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock survey data
  const surveys = [
    {
      id: 1,
      title: 'Customer Satisfaction Survey',
      description: 'Measure customer satisfaction with your products and services',
      category: 'Customer Feedback',
      responses: 245,
      questions: 8,
      createdAt: '2024-01-15',
      status: 'Active'
    },
    {
      id: 2,
      title: 'Employee Engagement Survey',
      description: 'Assess employee satisfaction and engagement levels',
      category: 'HR & Workplace',
      responses: 89,
      questions: 12,
      createdAt: '2024-01-20',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Product Feedback Form',
      description: 'Collect feedback on new product features and improvements',
      category: 'Product Research',
      responses: 156,
      questions: 6,
      createdAt: '2024-01-25',
      status: 'Active'
    },
    {
      id: 4,
      title: 'Market Research Survey',
      description: 'Understanding market trends and customer preferences',
      category: 'Market Research',
      responses: 312,
      questions: 15,
      createdAt: '2024-01-10',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Event Feedback Survey',
      description: 'Gather feedback from event attendees',
      category: 'Events',
      responses: 78,
      questions: 10,
      createdAt: '2024-01-30',
      status: 'Draft'
    }
  ];

  const categories = [
    'all',
    'Customer Feedback',
    'HR & Workplace',
    'Product Research',
    'Market Research',
    'Events'
  ];

  const filteredSurveys = surveys.filter(survey => {
    const matchesSearch = survey.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         survey.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || survey.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCopySurvey = (survey) => {
    // Here you would typically navigate to the survey builder with the copied survey data
    console.log('Copying survey:', survey);
    // For now, we'll just log the survey being copied
    // In a real app, you might navigate to the survey builder with the survey data
    // navigate('/create/scratch', { state: { copiedSurvey: survey } });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Completed':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Draft':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-[#9767E4]/10 blur-[60px]"></div>
        <div className="absolute bottom-16 right-1/4 w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-[#26B2F2]/10 blur-[60px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-[#C084FC]/5 blur-[40px]"></div>
      </div>

      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 relative pt-32 pb-12">
        {/* Header */}
        <div className="mb-8 lg:mb-12">
          <div className="flex items-center space-x-4 mb-8">
            <Link 
              to="/create" 
              className="p-3 rounded-lg border border-[#9767E4]/20 bg-[#0B111E]/30 backdrop-blur-sm hover:bg-[#9767E4]/10 hover:border-[#9767E4]/40 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 text-[#F8FAFC]" />
            </Link>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#F8FAFC]">
                Copy an{" "}
                <span className="bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
                  Existing Survey
                </span>
              </h1>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-[#0B111E]/30 border border-[#9767E4]/15 backdrop-blur-sm rounded-2xl p-6 lg:p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-[#9767E4] to-[#C084FC] rounded-lg flex items-center justify-center">
              <Search className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-[#F8FAFC]">Find Your Survey</h3>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#F8FAFC]/40" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search surveys by title or description..."
                className="w-full pl-12 pr-4 py-4 border border-[#9767E4]/20 rounded-xl bg-[#0B111E]/40 backdrop-blur-sm text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/50 focus:outline-none focus:ring-2 focus:ring-[#9767E4]/20 transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="lg:w-80 relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#F8FAFC]/40 z-10" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-[#9767E4]/20 rounded-xl bg-[#0B111E]/40 backdrop-blur-sm text-[#F8FAFC] focus:border-[#9767E4]/50 focus:outline-none focus:ring-2 focus:ring-[#9767E4]/20 appearance-none transition-all duration-300"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-[#0B111E] text-[#F8FAFC]">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-[#F8FAFC]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#9767E4]/10 border border-[#9767E4]/20">
            <span className="text-[#F8FAFC]/80 text-sm">
              Found <span className="text-[#9767E4] font-medium">{filteredSurveys.length}</span> survey{filteredSurveys.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Survey Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredSurveys.map((survey) => (
            <div
              key={survey.id}
              className="group relative bg-[#0B111E]/30 border border-[#9767E4]/15 backdrop-blur-sm rounded-2xl p-6 lg:p-8 hover:border-[#9767E4]/30 hover:bg-[#0E1525]/40 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#9767E4]/5 to-[#26B2F2]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              
              {/* Survey Header */}
              <div className="relative flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-3 group-hover:text-white transition-colors">
                    {survey.title}
                  </h3>
                  <p className="text-[#F8FAFC]/70 text-sm mb-4 leading-relaxed line-clamp-2">
                    {survey.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#9767E4]/20 to-[#C084FC]/20 text-[#9767E4] text-xs font-medium rounded-full border border-[#9767E4]/30">
                    {survey.category}
                  </span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 ${getStatusColor(survey.status)}`}>
                  {survey.status}
                </span>
              </div>

              {/* Survey Stats */}
              <div className="relative grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-3 bg-[#0B111E]/40 rounded-xl border border-[#9767E4]/10">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#9767E4]/20 to-[#C084FC]/20 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-[#9767E4]" />
                    </div>
                  </div>
                  <div className="text-lg font-bold text-[#F8FAFC] mb-1">{survey.responses}</div>
                  <p className="text-xs text-[#F8FAFC]/60">Responses</p>
                </div>
                <div className="text-center p-3 bg-[#0B111E]/40 rounded-xl border border-[#26B2F2]/10">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#26B2F2]/20 to-[#C084FC]/20 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-[#26B2F2]" />
                    </div>
                  </div>
                  <div className="text-lg font-bold text-[#F8FAFC] mb-1">{survey.questions}</div>
                  <p className="text-xs text-[#F8FAFC]/60">Questions</p>
                </div>
                <div className="text-center p-3 bg-[#0B111E]/40 rounded-xl border border-[#C084FC]/10">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#C084FC]/20 to-[#9767E4]/20 rounded-lg flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-[#C084FC]" />
                    </div>
                  </div>
                  <div className="text-sm font-medium text-[#F8FAFC] mb-1">
                    {new Date(survey.createdAt).toLocaleDateString()}
                  </div>
                  <p className="text-xs text-[#F8FAFC]/60">Created</p>
                </div>
              </div>

              {/* Actions */}
              <div className="relative flex items-center space-x-4">
                <Button
                  onClick={() => handleCopySurvey(survey)}
                  className="flex-1 bg-gradient-to-r from-[#9767E4] to-[#C084FC] hover:from-[#8B5CF6] hover:to-[#A855F7] text-white shadow-lg"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Survey
                </Button>
                <Button
                  variant="outline"
                  className="border-[#9767E4]/20 text-[#9767E4] hover:bg-[#9767E4]/10 hover:border-[#9767E4]/40 bg-[#0B111E]/30 backdrop-blur-sm p-3"
                >
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSurveys.length === 0 && (
          <div className="bg-[#0B111E]/30 border border-[#9767E4]/15 backdrop-blur-sm rounded-2xl p-12 lg:p-16 text-center">
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#9767E4]/5 to-[#26B2F2]/5 rounded-2xl" />
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-[#9767E4]/20 to-[#C084FC]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-[#9767E4]" />
              </div>
              <h3 className="text-xl font-semibold text-[#F8FAFC] mb-3">No surveys found</h3>
              <p className="text-[#F8FAFC]/60 mb-8 max-w-md mx-auto">
                Try adjusting your search terms or filters to find the survey template you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                variant="outline"
                className="border-[#9767E4]/20 text-[#9767E4] hover:bg-[#9767E4]/10 hover:border-[#9767E4]/40 bg-[#0B111E]/30 backdrop-blur-sm px-6 py-3"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}

        {/* Help Text */}
        <div className="mt-16 bg-[#0B111E]/30 border border-[#9767E4]/15 backdrop-blur-sm rounded-2xl p-6 lg:p-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-[#26B2F2] to-[#C084FC] rounded-lg flex items-center justify-center">
              <Copy className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-[#F8FAFC]">How copying works</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative p-6 bg-[#0B111E]/40 rounded-xl border border-[#9767E4]/10 hover:border-[#9767E4]/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9767E4]/5 to-[#26B2F2]/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
              
              <div className="relative flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[#9767E4] to-[#C084FC] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div>
                  <h4 className="text-[#F8FAFC] font-semibold mb-2 text-lg">Choose a Survey</h4>
                  <p className="text-[#F8FAFC]/70 leading-relaxed">Browse and select a survey template that matches your requirements and goals</p>
                </div>
              </div>
            </div>
            
            <div className="group relative p-6 bg-[#0B111E]/40 rounded-xl border border-[#26B2F2]/10 hover:border-[#26B2F2]/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#26B2F2]/5 to-[#C084FC]/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
              
              <div className="relative flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[#26B2F2] to-[#C084FC] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div>
                  <h4 className="text-[#F8FAFC] font-semibold mb-2 text-lg">Make a Copy</h4>
                  <p className="text-[#F8FAFC]/70 leading-relaxed">Create a complete duplicate with all questions, settings, and structure preserved</p>
                </div>
              </div>
            </div>
            
            <div className="group relative p-6 bg-[#0B111E]/40 rounded-xl border border-[#C084FC]/10 hover:border-[#C084FC]/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C084FC]/5 to-[#9767E4]/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
              
              <div className="relative flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[#C084FC] to-[#9767E4] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div>
                  <h4 className="text-[#F8FAFC] font-semibold mb-2 text-lg">Customize</h4>
                  <p className="text-[#F8FAFC]/70 leading-relaxed">Edit questions, add new sections, and personalize it to perfectly fit your needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
