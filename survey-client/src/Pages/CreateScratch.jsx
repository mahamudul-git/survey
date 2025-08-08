import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import { 
  Plus, 
  Trash2, 
  GripVertical,
  Save,
  Eye,
  ArrowLeft,
  Type,
  List,
  CheckSquare,
  Circle,
  Star,
  Calendar,
  Hash,
  FileText
} from "lucide-react";

const questionTypes = [
  { id: 'text', name: 'Text', icon: Type, description: 'Short text input' },
  { id: 'textarea', name: 'Long Text', icon: FileText, description: 'Multi-line text area' },
  { id: 'multiple-choice', name: 'Multiple Choice', icon: Circle, description: 'Single selection from options' },
  { id: 'checkbox', name: 'Checkbox', icon: CheckSquare, description: 'Multiple selections allowed' },
  { id: 'dropdown', name: 'Dropdown', icon: List, description: 'Select from dropdown list' },
  { id: 'rating', name: 'Rating', icon: Star, description: 'Star or numeric rating' },
  { id: 'date', name: 'Date', icon: Calendar, description: 'Date picker' },
  { id: 'number', name: 'Number', icon: Hash, description: 'Numeric input only' },
];

export default function CreateScratch() {
  const [survey, setSurvey] = useState({
    title: '',
    description: '',
    questions: []
  });
  
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [isQuestionHelperExpanded, setIsQuestionHelperExpanded] = useState(false);

  const addQuestion = (type) => {
    const newQuestion = {
      id: Date.now(),
      type,
      title: '',
      required: false,
      options: type === 'multiple-choice' || type === 'checkbox' || type === 'dropdown' ? ['Option 1', 'Option 2'] : []
    };
    
    setSurvey(prev => ({
      ...prev,
      questions: [...prev.questions, newQuestion]
    }));
  };

  const updateQuestion = (questionId, field, value) => {
    setSurvey(prev => ({
      ...prev,
      questions: prev.questions.map(q => 
        q.id === questionId ? { ...q, [field]: value } : q
      )
    }));
  };

  const deleteQuestion = (questionId) => {
    setSurvey(prev => ({
      ...prev,
      questions: prev.questions.filter(q => q.id !== questionId)
    }));
  };

  const addOption = (questionId) => {
    setSurvey(prev => ({
      ...prev,
      questions: prev.questions.map(q => 
        q.id === questionId 
          ? { ...q, options: [...q.options, `Option ${q.options.length + 1}`] }
          : q
      )
    }));
  };

  const updateOption = (questionId, optionIndex, value) => {
    setSurvey(prev => ({
      ...prev,
      questions: prev.questions.map(q => 
        q.id === questionId 
          ? { 
              ...q, 
              options: q.options.map((opt, idx) => idx === optionIndex ? value : opt)
            }
          : q
      )
    }));
  };

  const deleteOption = (questionId, optionIndex) => {
    setSurvey(prev => ({
      ...prev,
      questions: prev.questions.map(q => 
        q.id === questionId 
          ? { ...q, options: q.options.filter((_, idx) => idx !== optionIndex) }
          : q
      )
    }));
  };

  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    if (draggedIndex === null) return;

    const newQuestions = [...survey.questions];
    const draggedQuestion = newQuestions[draggedIndex];
    
    newQuestions.splice(draggedIndex, 1);
    newQuestions.splice(dropIndex, 0, draggedQuestion);
    
    setSurvey(prev => ({ ...prev, questions: newQuestions }));
    setDraggedIndex(null);
  };

  const renderQuestionPreview = (question) => {
    switch (question.type) {
      case 'text':
        return <input type="text" placeholder="Your answer..." className="w-full p-3 border border-[#9767E4]/30 rounded-lg bg-[#0B111E]/60 text-[#F8FAFC] placeholder-[#F8FAFC]/40" disabled />;
      
      case 'textarea':
        return <textarea placeholder="Your answer..." rows={3} className="w-full p-3 border border-[#9767E4]/30 rounded-lg bg-[#0B111E]/60 text-[#F8FAFC] placeholder-[#F8FAFC]/40 resize-none" disabled />;
      
      case 'multiple-choice':
        return (
          <div className="space-y-3">
            {question.options.map((option, idx) => (
              <label key={idx} className="flex items-center space-x-3 cursor-pointer group">
                <input type="radio" name={`question-${question.id}`} className="text-[#9767E4] focus:ring-[#9767E4] focus:ring-2" disabled />
                <span className="text-[#F8FAFC]/80 group-hover:text-[#F8FAFC] transition-colors">{option}</span>
              </label>
            ))}
          </div>
        );
      
      case 'checkbox':
        return (
          <div className="space-y-3">
            {question.options.map((option, idx) => (
              <label key={idx} className="flex items-center space-x-3 cursor-pointer group">
                <input type="checkbox" className="text-[#9767E4] focus:ring-[#9767E4] focus:ring-2 rounded" disabled />
                <span className="text-[#F8FAFC]/80 group-hover:text-[#F8FAFC] transition-colors">{option}</span>
              </label>
            ))}
          </div>
        );
      
      case 'dropdown':
        return (
          <select className="w-full p-3 border border-[#9767E4]/30 rounded-lg bg-[#0B111E]/60 text-[#F8FAFC]" disabled>
            <option>Choose an option...</option>
            {question.options.map((option, idx) => (
              <option key={idx}>{option}</option>
            ))}
          </select>
        );
      
      case 'rating':
        return (
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map(star => (
              <Star key={star} className="w-7 h-7 text-yellow-400 hover:text-yellow-300 cursor-pointer transition-colors" />
            ))}
          </div>
        );
      
      case 'date':
        return <input type="date" className="w-full p-3 border border-[#9767E4]/30 rounded-lg bg-[#0B111E]/60 text-[#F8FAFC]" disabled />;
      
      case 'number':
        return <input type="number" placeholder="Enter a number..." className="w-full p-3 border border-[#9767E4]/30 rounded-lg bg-[#0B111E]/60 text-[#F8FAFC] placeholder-[#F8FAFC]/40" disabled />;
      
      default:
        return <input type="text" placeholder="Your answer..." className="w-full p-3 border border-[#9767E4]/30 rounded-lg bg-[#0B111E]/60 text-[#F8FAFC] placeholder-[#F8FAFC]/40" disabled />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0">
        <div className="fixed top-16 left-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-[#9767E4]/10 blur-[60px]"></div>
        <div className="fixed bottom-16 right-1/4 w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-[#26B2F2]/10 blur-[60px]"></div>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-[#C084FC]/5 blur-[40px]"></div>
      </div>

      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 relative pt-32 pb-12">
        {/* Header */}
        <div className="mb-8 lg:mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Link 
                to="/create" 
                className="p-3 rounded-lg border border-[#9767E4]/20 bg-[#0B111E]/30 backdrop-blur-sm hover:bg-[#9767E4]/10 hover:border-[#9767E4]/40 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 text-[#F8FAFC]" />
              </Link>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-[#F8FAFC]">
                  Start from{" "}
                  <span className="bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
                    Scratch
                  </span>
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                className="border-[#9767E4]/20 text-[#9767E4] hover:bg-[#9767E4]/10 hover:border-[#9767E4]/40 bg-[#0B111E]/30 backdrop-blur-sm"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button className="bg-gradient-to-r from-[#9767E4] to-[#C084FC] hover:from-[#8B5CF6] hover:to-[#A855F7] text-white shadow-lg">
                <Save className="w-4 h-4 mr-2" />
                Save Survey
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Question Types Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#0B111E]/40 border border-[#9767E4]/15 backdrop-blur-sm rounded-2xl p-6 sticky top-32">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-[#9767E4] to-[#C084FC] rounded-lg flex items-center justify-center">
                  <Plus className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#F8FAFC]">Question Types</h3>
              </div>
              <div className="space-y-3">
                {questionTypes.map(type => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => addQuestion(type.id)}
                      className="w-full group relative bg-[#0B111E]/30 border border-[#9767E4]/10 backdrop-blur-sm rounded-xl p-4 hover:border-[#9767E4]/30 hover:bg-[#0E1525]/40 transition-all duration-300 transform hover:scale-105"
                    >
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#9767E4]/10 to-[#26B2F2]/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                      
                      <div className="relative flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-[#9767E4]/20 to-[#C084FC]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5 text-[#9767E4] group-hover:text-[#C084FC] transition-colors duration-300" />
                        </div>
                        <div className="text-left flex-1">
                          <p className="text-sm font-medium text-[#F8FAFC] group-hover:text-white transition-colors duration-300">{type.name}</p>
                          <p className="text-xs text-[#F8FAFC]/60 group-hover:text-[#F8FAFC]/80 transition-colors duration-300">{type.description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Survey Details */}
            <div className="bg-[#0B111E]/50 border border-[#9767E4]/15 backdrop-blur-sm rounded-2xl p-6 lg:p-8 mb-6 lg:mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-[#26B2F2] to-[#C084FC] rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-[#F8FAFC]">Survey Details</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-3">
                    Survey Title *
                  </label>
                  <input
                    type="text"
                    value={survey.title}
                    onChange={(e) => setSurvey(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Enter your survey title..."
                    className="w-full p-4 border border-[#9767E4]/20 rounded-xl bg-[#0B111E]/40 backdrop-blur-sm text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/50 focus:outline-none focus:ring-2 focus:ring-[#9767E4]/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-3">
                    Description
                  </label>
                  <textarea
                    value={survey.description}
                    onChange={(e) => setSurvey(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Describe what your survey is about..."
                    rows={4}
                    className="w-full p-4 border border-[#9767E4]/20 rounded-xl bg-[#0B111E]/40 backdrop-blur-sm text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/50 focus:outline-none focus:ring-2 focus:ring-[#9767E4]/20 resize-none transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Questions */}
            <div className="space-y-6">
              {survey.questions.length === 0 ? (
                <div className="bg-[#0B111E]/50 border border-[#9767E4]/15 backdrop-blur-sm rounded-2xl p-12 lg:p-16 text-center">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#9767E4]/5 to-[#26B2F2]/5 rounded-2xl" />
                  
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#9767E4]/20 to-[#C084FC]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Plus className="w-8 h-8 text-[#9767E4]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#F8FAFC] mb-3">No questions yet</h3>
                    <p className="text-[#F8FAFC]/60 mb-6 max-w-md mx-auto">Start building your survey by adding question types from the sidebar. Create engaging questions that get the responses you need.</p>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#9767E4]/10 text-[#9767E4] text-sm font-medium">
                      💡 Choose a question type to get started
                    </div>
                  </div>
                </div>
              ) : (
                survey.questions.map((question, index) => {
                  const QuestionIcon = questionTypes.find(type => type.id === question.type)?.icon || Type;
                  
                  return (
                    <div
                      key={question.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, index)}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, index)}
                      className="group relative bg-[#0B111E]/30 border border-[#9767E4]/15 backdrop-blur-sm rounded-2xl p-6 lg:p-8 cursor-move hover:border-[#9767E4]/30 hover:bg-[#0E1525]/40 transition-all duration-300 transform hover:scale-[1.02]"
                    >                     
                      {/* Question Header */}
                      <div className="relative flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-[#9767E4]/20 to-[#C084FC]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <GripVertical className="w-4 h-4 text-[#9767E4]" />
                          </div>
                          <div className="w-10 h-10 bg-gradient-to-r from-[#26B2F2]/20 to-[#C084FC]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <QuestionIcon className="w-5 h-5 text-[#26B2F2]" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-[#F8FAFC]/80 block">
                              Question {index + 1}
                            </span>
                            <span className="text-xs text-[#9767E4] capitalize">
                              {questionTypes.find(type => type.id === question.type)?.name || question.type}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuestion(question.id, 'required', !question.required)}
                            className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                              question.required 
                                ? 'bg-gradient-to-r from-red-500/20 to-red-400/20 text-red-400 border border-red-500/30 hover:from-red-500/30 hover:to-red-400/30' 
                                : 'bg-[#0B111E]/40 text-[#F8FAFC]/60 border border-[#9767E4]/20 hover:bg-[#9767E4]/10 hover:text-[#9767E4]'
                            }`}
                          >
                            {question.required ? 'Required' : 'Optional'}
                          </button>
                          <button
                            onClick={() => deleteQuestion(question.id)}
                            className="p-2 rounded-lg text-[#F8FAFC]/40 hover:text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 transition-all duration-300"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Question Title */}
                      <div className="relative mb-6">
                        <input
                          type="text"
                          value={question.title}
                          onChange={(e) => updateQuestion(question.id, 'title', e.target.value)}
                          placeholder="Enter your question..."
                          className="w-full p-4 border border-[#9767E4]/20 rounded-xl bg-[#0B111E]/40 backdrop-blur-sm text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/50 focus:outline-none focus:ring-2 focus:ring-[#9767E4]/20 transition-all duration-300"
                        />
                      </div>

                      {/* Question Options (for choice-based questions) */}
                      {(question.type === 'multiple-choice' || question.type === 'checkbox' || question.type === 'dropdown') && (
                        <div className="relative mb-6">
                          <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-4">Options</label>
                          <div className="space-y-3">
                            {question.options.map((option, optionIndex) => (
                              <div key={optionIndex} className="flex items-center space-x-3">
                                <input
                                  type="text"
                                  value={option}
                                  onChange={(e) => updateOption(question.id, optionIndex, e.target.value)}
                                  className="flex-1 p-3 border border-[#9767E4]/20 rounded-lg bg-[#0B111E]/40 backdrop-blur-sm text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/50 focus:outline-none focus:ring-2 focus:ring-[#9767E4]/20 transition-all duration-300"
                                />
                                {question.options.length > 2 && (
                                  <button
                                    onClick={() => deleteOption(question.id, optionIndex)}
                                    className="p-2 rounded-lg text-[#F8FAFC]/40 hover:text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 transition-all duration-300"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                )}
                              </div>
                            ))}
                            <button
                              onClick={() => addOption(question.id)}
                              className="flex items-center space-x-2 p-3 rounded-lg border-2 border-dashed border-[#9767E4]/30 hover:border-[#9767E4]/50 text-[#F8FAFC]/60 hover:text-[#9767E4] hover:bg-[#9767E4]/5 transition-all duration-300 group"
                            >
                              <Plus className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                              <span className="text-sm font-medium">Add Option</span>
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Question Preview */}
                      <div className="relative border-t border-[#9767E4]/20 pt-6">
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="w-6 h-6 bg-gradient-to-r from-[#C084FC]/20 to-[#9767E4]/20 rounded-lg flex items-center justify-center">
                            <Eye className="w-3 h-3 text-[#C084FC]" />
                          </div>
                          <label className="text-sm font-medium text-[#F8FAFC]/80">Preview</label>
                        </div>
                        <div className="p-6 bg-[#0B111E]/40 backdrop-blur-sm rounded-xl border border-[#9767E4]/10">
                          <h4 className="text-[#F8FAFC] font-medium mb-4 text-lg">
                            {question.title || 'Enter your question...'}
                            {question.required && <span className="text-red-400 ml-2">*</span>}
                          </h4>
                          {renderQuestionPreview(question)}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Add Question Helper */}
            {survey.questions.length > 0 && (
              <div className="mt-8">
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isQuestionHelperExpanded ? 'max-h-96' : 'max-h-20'
                  }`}
                >
                  {/* Toggle Button */}
                  <div className="text-center mb-6">
                    <button
                      onClick={() => setIsQuestionHelperExpanded(!isQuestionHelperExpanded)}
                      className="group inline-flex items-center px-6 py-3 rounded-full bg-[#9767E4]/10 border border-[#9767E4]/20 backdrop-blur-sm hover:bg-[#9767E4]/20 hover:border-[#9767E4]/40 transition-all duration-300"
                    >
                      <Plus className={`w-4 h-4 text-[#9767E4] mr-2 transition-transform duration-300 ${
                        isQuestionHelperExpanded ? 'rotate-45' : 'rotate-0'
                      }`} />
                      <p className="text-[#F8FAFC]/70 text-sm group-hover:text-[#F8FAFC]/90 transition-colors">
                        {isQuestionHelperExpanded 
                          ? 'Close question types' 
                          : 'Add more questions - Click to expand'
                        }
                      </p>
                    </button>
                  </div>

                  {/* Expanded Question Types Grid */}
                  <div className={`transition-all duration-500 ease-in-out ${
                    isQuestionHelperExpanded 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-4 pointer-events-none'
                  }`}>
                    <div className="bg-[#0B111E]/30 border border-[#9767E4]/15 backdrop-blur-sm rounded-2xl p-6">
                      <div className="flex items-center justify-center space-x-2 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#9767E4] to-[#C084FC] rounded-lg flex items-center justify-center">
                          <Plus className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-[#F8FAFC]">Choose Question Type</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {questionTypes.map(type => {
                          const Icon = type.icon;
                          return (
                            <button
                              key={type.id}
                              onClick={() => {
                                addQuestion(type.id);
                                setIsQuestionHelperExpanded(false);
                              }}
                              className="group relative bg-[#0B111E]/30 border border-[#9767E4]/10 backdrop-blur-sm rounded-xl p-4 hover:border-[#9767E4]/30 hover:bg-[#0E1525]/40 transition-all duration-300 transform hover:scale-105"
                            >
                              {/* Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-br from-[#9767E4]/10 to-[#26B2F2]/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                              
                              <div className="relative flex flex-col items-center text-center space-y-3">
                                <div className="w-12 h-12 bg-gradient-to-r from-[#9767E4]/20 to-[#C084FC]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <Icon className="w-6 h-6 text-[#9767E4] group-hover:text-[#C084FC] transition-colors duration-300" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-[#F8FAFC] group-hover:text-white transition-colors duration-300 mb-1">{type.name}</p>
                                  <p className="text-xs text-[#F8FAFC]/60 group-hover:text-[#F8FAFC]/80 transition-colors duration-300">{type.description}</p>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
