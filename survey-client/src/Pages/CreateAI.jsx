import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import { 
  ArrowLeft,
  Sparkles,
  Brain,
  Target,
  Users,
  Clock,
  MessageSquare,
  ChevronDown,
  Loader2,
  CheckCircle
} from "lucide-react";

export default function CreateAI() {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({
    purpose: '',
    audience: '',
    topics: [],
    tone: 'professional',
    length: 'medium',
    questionTypes: []
  });

  const purposes = [
    { id: 'customer_feedback', label: 'Customer Feedback', icon: MessageSquare },
    { id: 'employee_engagement', label: 'Employee Engagement', icon: Users },
    { id: 'market_research', label: 'Market Research', icon: Target },
    { id: 'event_feedback', label: 'Event Feedback', icon: Clock },
    { id: 'product_research', label: 'Product Research', icon: Brain },
    { id: 'academic_research', label: 'Academic Research', icon: Brain }
  ];

  const tones = [
    { id: 'professional', label: 'Professional', description: 'Formal and business-focused' },
    { id: 'friendly', label: 'Friendly', description: 'Casual and approachable' },
    { id: 'academic', label: 'Academic', description: 'Scholarly and research-oriented' },
    { id: 'conversational', label: 'Conversational', description: 'Natural and engaging' }
  ];

  const lengths = [
    { id: 'short', label: 'Short (5-8 questions)', description: 'Quick and focused survey' },
    { id: 'medium', label: 'Medium (10-15 questions)', description: 'Balanced depth and time' },
    { id: 'long', label: 'Long (20+ questions)', description: 'Comprehensive and detailed' }
  ];

  const questionTypes = [
    { id: 'multiple_choice', label: 'Multiple Choice' },
    { id: 'rating_scale', label: 'Rating Scale' },
    { id: 'text_input', label: 'Text Input' },
    { id: 'yes_no', label: 'Yes/No' },
    { id: 'ranking', label: 'Ranking' },
    { id: 'matrix', label: 'Matrix/Grid' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayToggle = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleGenerateSurvey = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsGenerating(false);
    setStep(3);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.purpose && formData.audience;
      case 2:
        return formData.topics.length > 0 && formData.questionTypes.length > 0;
      default:
        return false;
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

      <div className="container mx-auto max-w-[900px] px-4 sm:px-6 relative pt-32 pb-12">
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
             
              <h1 className="text-3xl lg:text-4xl font-bold text-[#F8FAFC] flex items-center">
                Build with{" "}
                <span className="bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent ml-2">
                  AI
                </span>
              </h1>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center space-x-4 mb-8">
            {[1, 2, 3].map((stepNumber) => (
              <React.Fragment key={stepNumber}>
                <div className={`flex items-center justify-center w-10 h-10 rounded-xl text-sm font-medium transition-all duration-300 ${
                  step >= stepNumber 
                    ? 'bg-gradient-to-r from-[#9767E4] to-[#C084FC] text-white shadow-lg scale-110' 
                    : 'bg-[#0B111E]/40 text-[#F8FAFC]/40 border border-[#9767E4]/20'
                }`}>
                  {step > stepNumber ? <CheckCircle className="w-5 h-5" /> : stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`flex-1 h-1 rounded-full transition-all duration-300 ${
                    step > stepNumber 
                      ? 'bg-gradient-to-r from-[#9767E4] to-[#C084FC]' 
                      : 'bg-[#9767E4]/20'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Step 1: Basic Information */}
        {step === 1 && (
          <div className="space-y-8">
            <div className="bg-[#0B111E]/30 border border-[#9767E4]/15 backdrop-blur-sm rounded-2xl p-6 lg:p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-[#9767E4] to-[#C084FC] rounded-xl flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl lg:text-2xl font-semibold text-[#F8FAFC]">Tell us about your survey</h2>
              </div>
              
              {/* Survey Purpose */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-4">
                  What's the purpose of your survey?
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {purposes.map(purpose => {
                    const IconComponent = purpose.icon;
                    return (
                      <button
                        key={purpose.id}
                        onClick={() => handleInputChange('purpose', purpose.id)}
                        className={`group relative p-5 rounded-xl border text-left transition-all duration-300 hover:-translate-y-2 ${
                          formData.purpose === purpose.id
                            ? 'border-[#9767E4]/40 bg-gradient-to-br from-[#9767E4]/20 to-[#C084FC]/20 text-[#F8FAFC]'
                            : 'border-[#9767E4]/20 bg-[#0B111E]/40 text-[#F8FAFC]/70 hover:border-[#9767E4]/30 hover:bg-[#0E1525]/60'
                        }`}
                      >
                        {/* Background Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-[#9767E4]/10 to-[#26B2F2]/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300`} />
                        
                        <div className="relative flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            formData.purpose === purpose.id
                              ? 'bg-gradient-to-r from-[#9767E4] to-[#C084FC] scale-110'
                              : 'bg-[#9767E4]/20 group-hover:bg-[#9767E4]/30 group-hover:scale-110'
                          }`}>
                            <IconComponent className={`w-6 h-6 transition-colors duration-300 ${
                              formData.purpose === purpose.id ? 'text-white' : 'text-[#9767E4]'
                            }`} />
                          </div>
                          <span className="font-medium text-lg">{purpose.label}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Target Audience */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-4">
                  Who is your target audience?
                </label>
                <textarea
                  value={formData.audience}
                  onChange={(e) => handleInputChange('audience', e.target.value)}
                  placeholder="e.g., Customers who purchased in the last 6 months, employees in the sales department, etc."
                  className="w-full p-4 border border-[#9767E4]/20 rounded-xl bg-[#0B111E]/40 backdrop-blur-sm text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/50 focus:outline-none focus:ring-2 focus:ring-[#9767E4]/20 h-28 resize-none transition-all duration-300"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                onClick={() => setStep(2)}
                disabled={!canProceed()}
                className="bg-gradient-to-r from-[#9767E4] to-[#C084FC] hover:from-[#8B5CF6] hover:to-[#A855F7] text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-lg px-8 py-3"
              >
                Next Step
                <ChevronDown className="w-4 h-4 ml-2 rotate-[-90deg]" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Survey Details */}
        {step === 2 && (
          <div className="space-y-8">
            <div className="bg-[#0B111E]/30 border border-[#9767E4]/15 backdrop-blur-sm rounded-2xl p-6 lg:p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-[#26B2F2] to-[#C084FC] rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl lg:text-2xl font-semibold text-[#F8FAFC]">Survey preferences</h2>
              </div>
              
              {/* Topics to Cover */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-4">
                  What topics would you like to cover? (Add custom topics)
                </label>
                <div className="flex flex-wrap gap-3 mb-4">
                  {formData.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="group px-4 py-2 bg-gradient-to-r from-[#9767E4]/20 to-[#C084FC]/20 text-[#9767E4] rounded-full text-sm border border-[#9767E4]/30 flex items-center space-x-2 hover:from-[#9767E4]/30 hover:to-[#C084FC]/30 transition-all duration-300"
                    >
                      <span>{topic}</span>
                      <button
                        onClick={() => handleArrayToggle('topics', topic)}
                        className="w-5 h-5 rounded-full bg-[#9767E4]/20 hover:bg-red-500/30 flex items-center justify-center text-xs hover:text-red-400 transition-all duration-300"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Type a topic and press Enter"
                  className="w-full p-4 border border-[#9767E4]/20 rounded-xl bg-[#0B111E]/40 backdrop-blur-sm text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/50 focus:outline-none focus:ring-2 focus:ring-[#9767E4]/20 transition-all duration-300"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && e.target.value.trim()) {
                      handleArrayToggle('topics', e.target.value.trim());
                      e.target.value = '';
                    }
                  }}
                />
              </div>

              {/* Survey Tone */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-4">
                  What tone should your survey have?
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tones.map(tone => (
                    <button
                      key={tone.id}
                      onClick={() => handleInputChange('tone', tone.id)}
                      className={`group relative p-5 rounded-xl border text-left transition-all duration-300 hover:-translate-y-2 ${
                        formData.tone === tone.id
                          ? 'border-[#9767E4]/40 bg-gradient-to-br from-[#9767E4]/20 to-[#C084FC]/20 text-[#F8FAFC]'
                          : 'border-[#9767E4]/20 bg-[#0B111E]/40 text-[#F8FAFC]/70 hover:border-[#9767E4]/30 hover:bg-[#0E1525]/60'
                      }`}
                    >
                      {/* Background Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#9767E4]/10 to-[#26B2F2]/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                      
                      <div className="relative">
                        <div className="font-medium mb-2 text-lg">{tone.label}</div>
                        <div className="text-sm text-[#F8FAFC]/60">{tone.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Survey Length */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-4">
                  How long should your survey be?
                </label>
                <div className="space-y-4">
                  {lengths.map(length => (
                    <button
                      key={length.id}
                      onClick={() => handleInputChange('length', length.id)}
                      className={`group relative w-full p-5 rounded-xl border text-left transition-all duration-300 hover:-translate-y-2 ${
                        formData.length === length.id
                          ? 'border-[#9767E4]/40 bg-gradient-to-br from-[#9767E4]/20 to-[#C084FC]/20 text-[#F8FAFC]'
                          : 'border-[#9767E4]/20 bg-[#0B111E]/40 text-[#F8FAFC]/70 hover:border-[#9767E4]/30 hover:bg-[#0E1525]/60'
                      }`}
                    >
                      {/* Background Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#9767E4]/10 to-[#26B2F2]/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                      
                      <div className="relative flex items-center justify-between">
                        <div>
                          <div className="font-medium mb-1 text-lg">{length.label}</div>
                          <div className="text-sm text-[#F8FAFC]/60">{length.description}</div>
                        </div>
                        <Clock className={`w-6 h-6 transition-all duration-300 ${
                          formData.length === length.id ? 'text-[#9767E4] scale-110' : 'text-[#F8FAFC]/40'
                        }`} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question Types */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-4">
                  What types of questions would you like? (Select multiple)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {questionTypes.map(type => (
                    <button
                      key={type.id}
                      onClick={() => handleArrayToggle('questionTypes', type.id)}
                      className={`group relative p-4 rounded-xl border text-center transition-all duration-300 hover:-translate-y-2 ${
                        formData.questionTypes.includes(type.id)
                          ? 'border-[#9767E4]/40 bg-gradient-to-br from-[#9767E4]/20 to-[#C084FC]/20 text-[#F8FAFC]'
                          : 'border-[#9767E4]/20 bg-[#0B111E]/40 text-[#F8FAFC]/70 hover:border-[#9767E4]/30 hover:bg-[#0E1525]/60'
                      }`}
                    >
                      {/* Background Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#9767E4]/10 to-[#26B2F2]/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                      
                      <div className="relative">
                        <div className="font-medium text-sm">{type.label}</div>
                        {formData.questionTypes.includes(type.id) && (
                          <CheckCircle className="w-4 h-4 text-[#9767E4] mx-auto mt-2" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Button
                onClick={() => setStep(1)}
                variant="outline"
                className="border-[#9767E4]/20 text-[#9767E4] hover:bg-[#9767E4]/10 hover:border-[#9767E4]/40 bg-[#0B111E]/30 backdrop-blur-sm px-6 py-3"
              >
                <ChevronDown className="w-4 h-4 mr-2 rotate-90" />
                Previous
              </Button>
              <Button
                onClick={handleGenerateSurvey}
                disabled={!canProceed() || isGenerating}
                className="bg-gradient-to-r from-[#9767E4] to-[#C084FC] hover:from-[#8B5CF6] hover:to-[#A855F7] text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-lg px-8 py-3"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Survey
                  </>
                )}
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Generated Survey */}
        {step === 3 && (
          <div className="space-y-8">
            <div className="bg-[#0B111E]/30 border border-[#9767E4]/15 backdrop-blur-sm rounded-2xl p-6 lg:p-8">
              <div className="text-center mb-10">
                <div className="relative mb-6">
                  {/* Success Animation Circle */}
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Background Effect */}
                  <div className="absolute inset-0 -top-4 -bottom-4 bg-gradient-to-r from-green-400/5 to-emerald-400/5 rounded-full blur-xl mx-auto w-32 h-32"></div>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-bold text-[#F8FAFC] mb-4">
                  Survey Generated{" "}
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Successfully!
                  </span>
                </h2>
                <p className="text-[#F8FAFC]/70 text-lg">Your AI-powered survey is ready for customization and deployment</p>
              </div>

              {/* Preview Card */}
              <div className="bg-[#0B111E]/40 border border-[#9767E4]/20 backdrop-blur-sm rounded-xl p-6 lg:p-8 mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#C084FC] to-[#9767E4] rounded-lg flex items-center justify-center">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-[#F8FAFC]">Survey Preview</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#0B111E]/60 rounded-lg p-4 border border-[#9767E4]/10">
                    <div className="text-sm text-[#F8FAFC]/60 mb-1">Title</div>
                    <div className="text-[#F8FAFC] font-medium">Customer Satisfaction Survey</div>
                  </div>
                  <div className="bg-[#0B111E]/60 rounded-lg p-4 border border-[#26B2F2]/10">
                    <div className="text-sm text-[#F8FAFC]/60 mb-1">Questions</div>
                    <div className="text-[#F8FAFC] font-medium flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2 text-[#26B2F2]" />
                      12 questions generated
                    </div>
                  </div>
                  <div className="bg-[#0B111E]/60 rounded-lg p-4 border border-[#C084FC]/10">
                    <div className="text-sm text-[#F8FAFC]/60 mb-1">Estimated time</div>
                    <div className="text-[#F8FAFC] font-medium flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-[#C084FC]" />
                      5-7 minutes
                    </div>
                  </div>
                </div>

                {/* Additional Details */}
                <div className="mt-6 p-4 bg-gradient-to-r from-[#9767E4]/10 to-[#26B2F2]/10 rounded-lg border border-[#9767E4]/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Sparkles className="w-4 h-4 text-[#9767E4]" />
                    <span className="text-sm font-medium text-[#F8FAFC]/80">AI Insights</span>
                  </div>
                  <p className="text-sm text-[#F8FAFC]/70">
                    Your survey includes a balanced mix of question types optimized for {formData.purpose.replace('_', ' ')} with a {formData.tone} tone.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="flex-1 bg-gradient-to-r from-[#9767E4] to-[#C084FC] hover:from-[#8B5CF6] hover:to-[#A855F7] text-white shadow-lg px-8 py-4 text-lg"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Customize Survey
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-[#9767E4]/20 text-[#9767E4] hover:bg-[#9767E4]/10 hover:border-[#9767E4]/40 bg-[#0B111E]/30 backdrop-blur-sm px-8 py-4"
                  onClick={() => {
                    setStep(1);
                    setFormData({
                      purpose: '',
                      audience: '',
                      topics: [],
                      tone: 'professional',
                      length: 'medium',
                      questionTypes: []
                    });
                  }}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate Again
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
