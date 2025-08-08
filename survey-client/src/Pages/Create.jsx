import React from "react";
import { Link } from "react-router-dom";
import { 
  Plus, 
  Copy,
  Sparkles,
  ArrowLeft,
  FileText,
  Zap,
  Brain,
  Clock,
  CheckCircle
} from "lucide-react";

export default function Create() {
  const createOptions = [
    {
      id: 'scratch',
      title: 'Start from scratch',
      description: 'Begin with a blank survey or form. Then add your questions, text, and images.',
      icon: Plus,
      color: 'from-[#9767E4]/15 to-[#26B2F2]/15',
      borderColor: '[#9767E4]/20',
      iconBg: 'from-[#9767E4] to-[#26B2F2]',
      route: '/create/scratch',
      time: '5-10 min',
      difficulty: 'Beginner'
    },
    {
      id: 'copy',
      title: 'Copy an existing survey',
      description: 'Choose a survey. Make a copy. Edit as needed.',
      icon: Copy,
      color: 'from-[#26B2F2]/15 to-[#C084FC]/15',
      borderColor: '[#26B2F2]/20',
      iconBg: 'from-[#26B2F2] to-[#C084FC]',
      route: '/create/copy',
      time: '2-5 min',
      difficulty: 'Easy'
    },
    {
      id: 'ai',
      title: 'Build with AI',
      description: 'Type a short prompt. AI will create a tailored survey or form just for you.',
      icon: Sparkles,
      color: 'from-[#C084FC]/15 to-[#9767E4]/15',
      borderColor: '[#C084FC]/20',
      iconBg: 'from-[#C084FC] to-[#9767E4]',
      route: '/create/ai',
      time: '1-3 min',
      difficulty: 'Advanced'
    }
  ];

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
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center space-x-4 mb-8">
            <Link 
              to="/user-dashboard" 
              className="p-3 rounded-lg border border-[#9767E4]/20 bg-[#0B111E]/30 backdrop-blur-sm hover:bg-[#9767E4]/10 hover:border-[#9767E4]/40 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 text-[#F8FAFC]" />
            </Link>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#F8FAFC]">
                Create{" "}
                <span className="bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
                  Survey
                </span>
              </h1>
            </div>
          </div>
        </div>

        {/* Create Options Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {createOptions.map((option) => {
            const Icon = option.icon;
            
            return (
              <Link
                key={option.id}
                to={option.route}
                className={`group relative bg-[#0B111E]/30 border border-${option.borderColor} backdrop-blur-sm rounded-2xl p-6 lg:p-8 hover:border-[#9767E4]/40 hover:bg-[#0E1525]/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between min-h-[320px] sm:min-h-[360px]`}
              >
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${option.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="text-xl lg:text-2xl font-bold text-[#F8FAFC] mb-3 group-hover:text-white transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-[#F8FAFC]/70 leading-relaxed group-hover:text-[#F8FAFC]/90 transition-colors">
                      {option.description}
                    </p>
                  </div>
                </div>

                {/* Footer Info */}
                <div className="relative z-10 flex items-center justify-between mt-auto pt-4 border-t border-[#9767E4]/10 group-hover:border-[#9767E4]/20 transition-colors">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1 text-[#9767E4]">
                      <Clock className="w-4 h-4" />
                      <span>{option.time}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-[#26B2F2]">
                      <CheckCircle className="w-4 h-4" />
                      <span>{option.difficulty}</span>
                    </div>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="w-8 h-8 rounded-full bg-[#9767E4]/10 group-hover:bg-[#9767E4]/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <ArrowLeft className="w-4 h-4 text-[#9767E4] rotate-180 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
