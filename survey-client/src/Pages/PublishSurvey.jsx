import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import {
  BarChart3,
  FileText,
  Plus,
  Users,
  ArrowRight,
  Moon,
  Target,
  Shield,
  CreditCard,
  Zap,
  TrendingUp,
  Building,
  GraduationCap,
  Store,
  Megaphone,
  Heart,
  ShoppingCart,
  BarChart,
  Eye
} from "lucide-react";

export default function PublishSurvey() {
  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-1/4 w-96 h-96 rounded-full bg-[#9767E4]/10 blur-[60px]"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 rounded-full bg-[#26B2F2]/10 blur-[60px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#C084FC]/5 blur-[40px]"></div>
      </div>
      {/* Hero Section */}
      <section className="relative pt-36 md:pt-[170px] pb-[90px] overflow-hidden">
        <div className="container mx-auto max-w-[1440px] px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="initial-hidden animate-fade-in-up space-y-6">
              <div className="initial-hidden animate-fade-in-up inline-flex items-center px-4 py-1.5 rounded-full bg-[#9767E4]/20 text-[#9767E4] text-sm font-medium">
                Survey Publication Platform
              </div>

              <h1 className="initial-hidden animate-fade-in-up animation-delay-100 text-5xl lg:text-6xl font-bold leading-none bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
                Publish Surveys
              </h1>

              <p className="initial-hidden animate-fade-in-up animation-delay-200 text-xl text-[#F8FAFC]/80 max-w-[600px] leading-relaxed">
                Whether you're a startup validating your idea, a business exploring customer needs, or a student doing research Survey Sight helps you collect high-quality data, fast.
              </p>

              <div className="initial-hidden animate-fade-in-up animation-delay-300 flex flex-wrap gap-3 pt-4">
                <Button>
                  Start Publishing
                </Button>
                <Button variant="outline" className="border-[#9767E4]/20 text-[#9767E4] hover:bg-[#9767E4]/10">
                  View Pricing
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Right Content - Survey Publishing Dashboard */}
            <div className="initial-hidden animate-slide-in-right animation-delay-500 relative">
              <div className="relative max-w-[500px] mx-auto">
                {/* Main Publishing Dashboard */}
                <div className="relative w-full rounded-2xl border border-[#9767E4]/20 bg-[#0B111E]/20">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#9767E4]/30 to-[#26B2F2]/30"></div>

                  {/* Content Container */}
                  <div className="relative p-8 space-y-6">
                    {/* Survey Stats Card */}
                    <div className="initial-hidden animate-fade-in-scale animation-delay-600 bg-[#0E1525]/40 border border-[#9767E4]/20 rounded-xl p-4 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-5 h-5 text-[#9767E4]" />
                        <span className="text-[#F8FAFC]/90 font-medium text-base">Active Surveys</span>
                      </div>

                      {/* Survey List */}
                      <div className="space-y-3">
                        {[
                          { title: "Product Validation", responses: 1247, color: "bg-[#9767E4]" },
                          { title: "Market Research", responses: 892, color: "bg-[#26B2F2]" },
                          { title: "User Feedback", responses: 654, color: "bg-[#C084FC]" }
                        ].map((survey, i) => (
                          <div key={i} className={`initial-hidden animate-fade-in-up animation-delay-${700 + (i * 50)} flex items-center gap-3`}>
                            <div className={`w-3 h-3 rounded-full ${survey.color}`}></div>
                            <div className="flex-1">
                              <div className="text-sm text-[#F8FAFC]/80">{survey.title}</div>
                              <div className="text-xs text-[#F8FAFC]/60">{survey.responses} responses</div>
                            </div>
                            <div className="text-sm font-bold bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
                              Live
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Cards Container */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Token Balance Card */}
                      <div className="initial-hidden animate-fade-in-scale animation-delay-800 bg-[#0E1525]/40 border border-[#9767E4]/20 rounded-xl p-4 backdrop-blur-sm">
                        <div className="text-sm text-[#F8FAFC]/90 font-medium mb-2">Token Balance</div>
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-full bg-[#9767E4]/20">
                            <CreditCard className="w-4 h-4 text-[#9767E4]" />
                          </div>
                          <div className="text-xl font-bold bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
                            2,450
                          </div>
                        </div>
                      </div>

                      {/* Reach Card */}
                      <div className="initial-hidden animate-fade-in-scale animation-delay-850 bg-[#0E1525]/40 border border-[#9767E4]/20 rounded-xl p-4 backdrop-blur-sm">
                        <div className="text-sm text-[#F8FAFC]/90 font-medium mb-2">Total Reach</div>
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-full bg-[#26B2F2]/20">
                            <Users className="w-4 h-4 text-[#26B2F2]" />
                          </div>
                          <div className="text-xl font-bold bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
                            15.2K
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Publish Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-transparent w-full overflow-hidden">
        <div className="container mx-auto max-w-[1440px] px-6 relative">
          <div className="initial-hidden animate-fade-in-up text-center mb-16">
            <div className="initial-hidden animate-fade-in-up inline-flex items-center px-4 py-1.5 rounded-full bg-[#9767E4]/20 text-[#9767E4] text-sm font-medium mb-6">
              Premium Features
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] mb-4">
              Why Choose
              <span className="bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
                {" "}Survey Sight?
              </span>
            </h2>
            <p className="text-xl text-[#F8FAFC]/70 leading-relaxed max-w-3xl mx-auto">
              Built with cutting-edge technology to deliver unparalleled survey experiences. We combine verification, targeting, analytics, and gamification to create the most effective survey platform available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Target the Right Audience",
                description: "Filter by age, location, profession, interests and more — no more random responses.",
                color: "from-[#9767E4]/15 to-[#26B2F2]/15",
                borderColor: "[#9767E4]/20",
                iconColor: "text-[#9767E4]"
              },
              {
                icon: Shield,
                title: "Get Real Insights",
                description: "Our verified community of surveyors complete surveys for rewards, ensuring genuine, thoughtful answers.",
                color: "from-[#26B2F2]/15 to-[#C084FC]/15",
                borderColor: "[#26B2F2]/20",
                iconColor: "text-[#26B2F2]"
              },
              {
                icon: CreditCard,
                title: "Pay As You Go",
                description: "Buy tokens and only pay for what you need — based on survey size, length, and targeting. No hidden charges.",
                color: "from-[#C084FC]/15 to-[#9767E4]/15",
                borderColor: "[#C084FC]/20",
                iconColor: "text-[#C084FC]"
              },
              {
                icon: Zap,
                title: "Drag & Drop Builder",
                description: "Create surveys easily without any technical skills. MCQs, text, image-based questions, and more.",
                color: "from-[#9767E4]/15 to-[#C084FC]/15",
                borderColor: "[#9767E4]/20",
                iconColor: "text-[#9767E4]"
              },
              {
                icon: TrendingUp,
                title: "Live Dashboard & Export",
                description: "Track your responses in real time and export your data for deeper analysis.",
                color: "from-[#26B2F2]/15 to-[#9767E4]/15",
                borderColor: "[#26B2F2]/20",
                iconColor: "text-[#26B2F2]"
              },
              {
                icon: Users,
                title: "Quality Assurance",
                description: "Advanced fraud detection and quality checks ensure you get authentic responses from real people.",
                color: "from-[#C084FC]/15 to-[#26B2F2]/15",
                borderColor: "[#C084FC]/20",
                iconColor: "text-[#C084FC]"
              }
            ].map((feature, i) => (
              <div
                key={i}
                className={`initial-hidden animate-fade-in-scale animation-delay-${200 + (i * 100)} group relative rounded-2xl border border-${feature.borderColor} bg-[#0B111E]/20 p-6 hover:bg-[#0E1525]/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2`}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="relative">
                  <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-${feature.borderColor}/25`}>
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-white transition-colors duration-300 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#F8FAFC]/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-transparent w-full overflow-hidden">
        <div className="container mx-auto max-w-[1440px] px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="initial-hidden animate-fade-in-up">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] mb-6">
                Who Is This 
                <span className="bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
                  {" "}For?
                </span>
              </h2>
              <p className="text-xl text-[#F8FAFC]/70 leading-relaxed mb-8">
                Perfect for professionals across industries who need reliable data and genuine insights from their target audience.
              </p>
            </div>

            <div className="initial-hidden animate-slide-in-right animation-delay-200">
              <div className="grid gap-6">
                {[
                  {
                    icon: Building,
                    title: "Startups",
                    description: "looking for product validation",
                    color: "from-[#9767E4]/20 to-[#26B2F2]/20",
                    borderColor: "[#9767E4]/20"
                  },
                  {
                    icon: GraduationCap,
                    title: "Students & Researchers",
                    description: "collecting academic data",
                    color: "from-[#26B2F2]/20 to-[#C084FC]/20",
                    borderColor: "[#26B2F2]/20"
                  },
                  {
                    icon: Store,
                    title: "Local Businesses",
                    description: "testing market demand",
                    color: "from-[#C084FC]/20 to-[#9767E4]/20",
                    borderColor: "[#C084FC]/20"
                  },
                  {
                    icon: Megaphone,
                    title: "Marketers & Agencies",
                    description: "doing audience research",
                    color: "from-[#9767E4]/20 to-[#C084FC]/20",
                    borderColor: "[#9767E4]/20"
                  },
                  {
                    icon: Heart,
                    title: "NGOs & Public Bodies",
                    description: "measuring campaign impact",
                    color: "from-[#26B2F2]/20 to-[#9767E4]/20",
                    borderColor: "[#26B2F2]/20"
                  }
                ].map((audience, i) => (
                  <div 
                    key={i} 
                    className={`initial-hidden animate-fade-in-up animation-delay-${300 + (i * 100)} group p-6 rounded-xl border border-${audience.borderColor} bg-[#0B111E]/20 hover:bg-[#0E1525]/40 hover:border-[#9767E4]/30 transition-all duration-300 transform hover:scale-105`}
                  >
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${audience.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    <div className="relative flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#9767E4]/10 border border-[#9767E4]/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <audience.icon className="w-6 h-6 text-[#9767E4]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#F8FAFC] mb-1 group-hover:text-white transition-colors duration-300">{audience.title}</h3>
                        <p className="text-[#F8FAFC]/70">{audience.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-transparent w-full overflow-hidden">
        <div className="container mx-auto max-w-[1440px] px-6 relative">
          <div className="initial-hidden animate-fade-in-up text-center mb-16">
            <div className="initial-hidden animate-fade-in-up inline-flex items-center px-4 py-1.5 rounded-full bg-[#9767E4]/20 text-[#9767E4] text-sm font-medium mb-6">
              Simple Pricing
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] mb-6">
              Choose Your
              <span className="bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
                {" "}Package
              </span>
            </h2>
            <p className="text-xl text-[#F8FAFC]/70 max-w-3xl mx-auto mb-4 leading-relaxed">
              Pay only for what you need. All packages include advanced targeting, real-time analytics, and data export.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0E1525]/40 border border-[#9767E4]/20 backdrop-blur-sm">
              <CreditCard className="w-5 h-5 text-[#9767E4]" />
              <span className="text-[#F8FAFC] font-semibold">10 tokens = 1 taka</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Starter",
                questions: "10",
                responses: "100",
                tokens: "500",
                price: "50",
                color: "from-[#9767E4]/15 to-[#26B2F2]/15",
                borderColor: "[#9767E4]/20",
                popular: false,
                icon: Target,
                features: ["Basic Analytics", "Email Support", "Standard Templates"],
                badge: "Perfect for testing"
              },
              {
                name: "Professional",
                questions: "20",
                responses: "300",
                tokens: "800",
                price: "80",
                color: "from-[#26B2F2]/15 to-[#C084FC]/15",
                borderColor: "[#26B2F2]/20",
                popular: true,
                icon: TrendingUp,
                features: ["Advanced Analytics", "Priority Support", "Custom Branding", "API Access"],
                badge: "Most popular choice"
              },
              {
                name: "Enterprise",
                questions: "30",
                responses: "1000",
                tokens: "1500",
                price: "150",
                color: "from-[#C084FC]/15 to-[#9767E4]/15",
                borderColor: "[#C084FC]/20",
                popular: false,
                icon: BarChart3,
                features: ["Premium Analytics", "Dedicated Support", "White Label", "Advanced Security"],
                badge: "For growing teams"
              },
              {
                name: "Custom",
                questions: "Unlimited",
                responses: "Unlimited",
                tokens: "Contact Us",
                price: "Custom",
                color: "from-[#9767E4]/15 to-[#C084FC]/15",
                borderColor: "[#9767E4]/20",
                popular: false,
                icon: Users,
                features: ["Everything included", "Custom integration", "SLA guarantee", "Account manager"],
                badge: "Enterprise solution"
              }
            ].map((plan, i) => (
              <div 
                key={i} 
                className={`initial-hidden animate-fade-in-scale animation-delay-${200 + (i * 100)} group relative rounded-3xl border transition-all duration-500 transform hover:scale-[1.01] hover:-translate-y-0.5 ${
                  plan.popular 
                    ? 'border-[#9767E4]/50 bg-gradient-to-b from-[#9767E4]/10 via-[#0B111E]/20 to-[#26B2F2]/10 shadow-[0_0_20px_rgba(151,103,228,0.2)]' 
                    : `border-${plan.borderColor} bg-[#0B111E]/20 hover:border-[#9767E4]/40 hover:shadow-[0_0_15px_rgba(151,103,228,0.15)]`
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-[#9767E4] to-[#26B2F2] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="relative p-8 flex flex-col h-full">
                  {/* Header Section */}
                  <div className="text-center mb-8">
                    {/* Icon Container */}
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-lg shadow-${plan.borderColor}/20`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2 group-hover:text-white transition-colors duration-300">
                      {plan.name}
                    </h3>

                    {/* Plan Badge */}
                    <div className="text-xs text-[#F8FAFC]/60 font-medium mb-4">
                      {plan.badge}
                    </div>

                    {/* Price Section */}
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center gap-1 mb-2">
                        {plan.price === "Custom" ? (
                          <span className="text-3xl font-bold bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
                            Custom
                          </span>
                        ) : (
                          <>
                            <span className="text-sm text-[#F8FAFC]/70 font-medium">৳</span>
                            <span className="text-4xl font-bold text-[#F8FAFC] group-hover:text-white transition-colors duration-300">
                              {plan.price}
                            </span>
                          </>
                        )}
                      </div>
                      {plan.price !== "Custom" && (
                        <div className="text-sm text-[#F8FAFC]/60">
                          {plan.tokens} tokens included
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features Section - Flex grow to push button to bottom */}
                  <div className="flex-grow mb-8">
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between py-2 border-b border-[#9767E4]/10">
                        <span className="text-sm text-[#F8FAFC]/70">Questions</span>
                        <span className="text-sm font-semibold text-[#F8FAFC]">{plan.questions}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-[#9767E4]/10">
                        <span className="text-sm text-[#F8FAFC]/70">Responses</span>
                        <span className="text-sm font-semibold text-[#F8FAFC]">{plan.responses}</span>
                      </div>
                    </div>

                    {/* Feature List */}
                    <div className="space-y-3">
                      <div className="text-xs font-medium text-[#9767E4] uppercase tracking-wide mb-3">
                        What's included
                      </div>
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#9767E4] to-[#26B2F2] flex-shrink-0"></div>
                          <span className="text-sm text-[#F8FAFC]/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button - Fixed at bottom */}
                  <div className="mt-auto">
                    <Button
                      className="w-full"
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      <span className="flex items-center justify-center gap-2">
                        {plan.name === "Custom" ? "Contact Sales" : "Get Started"}
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Button>

                    
                  </div>

                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>

      {/* Ready to Collect Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-transparent w-full overflow-hidden">
        {/* Background Effects - Matching site theme */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-1/4 w-96 h-96 rounded-full bg-[#9767E4]/10 blur-[60px]"></div>
          <div className="absolute bottom-32 right-1/4 w-80 h-80 rounded-full bg-[#26B2F2]/10 blur-[60px]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#C084FC]/5 blur-[40px]"></div>
        </div>

        <div className="container mx-auto max-w-[1440px] px-6 relative">
          <div className="initial-hidden animate-fade-in-up text-center mb-16">
            {/* Badge matching site theme */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#9767E4]/20 text-[#9767E4] text-sm font-medium mb-8">
              Ready to Start Publishing?
            </div>
            
            {/* Enhanced heading matching site theme */}
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] mb-6">
              Ready to
              <span className="bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
                {" "}Collect Insights?
              </span>
            </h2>
            
            <p className="text-xl text-[#F8FAFC]/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of researchers, businesses, and organizations who trust Survey Sight for reliable data collection.
            </p>

            {/* 3 Step Process matching site theme */}
            <div className="initial-hidden animate-fade-in-up animation-delay-300 mb-16">

              <div className="grid md:grid-cols-3 gap-12">
                {[
                  {
                    icon: ShoppingCart,
                    title: "Buy Tokens",
                    description: "Choose your package based on survey size and targeting needs",
                    details: ["Select package", "Secure payment", "Instant activation"],
                    color: "from-[#9767E4]/15 to-[#26B2F2]/15",
                    borderColor: "[#9767E4]/20",
                    stepColor: "from-[#9767E4] to-[#26B2F2]"
                  },
                  {
                    icon: BarChart,
                    title: "Build Survey",
                    description: "Create engaging surveys with our intuitive drag-and-drop builder",
                    details: ["Add questions", "Set targeting", "Preview design"],
                    color: "from-[#26B2F2]/15 to-[#C084FC]/15",
                    borderColor: "[#26B2F2]/20",
                    stepColor: "from-[#26B2F2] to-[#C084FC]"
                  },
                  {
                    icon: Eye,
                    title: "Launch & Track",
                    description: "Go live instantly and monitor responses in real-time dashboard",
                    details: ["Publish survey", "Track responses", "Export data"],
                    color: "from-[#C084FC]/15 to-[#9767E4]/15",
                    borderColor: "[#C084FC]/20",
                    stepColor: "from-[#C084FC] to-[#9767E4]"
                  }
                ].map((step, i) => (
                  <div key={i} className={`initial-hidden animate-fade-in-scale animation-delay-${400 + (i * 100)} group relative`}>
                    <div className={`bg-[#0B111E]/20 border border-${step.borderColor} backdrop-blur-sm rounded-2xl p-8 hover:bg-[#0E1525]/40 hover:border-[#9767E4]/30 transition-all duration-300 h-full`}>
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      <div className="relative">
                        

                        {/* Icon */}
                        <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-${step.borderColor}/25`}>
                          <step.icon className="w-10 h-10 text-[#9767E4]" />
                        </div>

                        {/* Content */}
                        <h4 className="text-2xl font-bold text-[#F8FAFC] mb-4 group-hover:text-white transition-colors duration-300 text-center">{step.title}</h4>
                        <p className="text-[#F8FAFC]/70 mb-6 leading-relaxed text-center">{step.description}</p>

                        {/* Details */}
                        <div className="space-y-3">
                          {step.details.map((detail, j) => (
                            <div key={j} className="flex items-center gap-3 text-sm text-[#F8FAFC]/80">
                              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${step.stepColor} flex-shrink-0 shadow-sm`}></div>
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section matching site theme */}
            <div className="initial-hidden animate-fade-in-up animation-delay-700">
              <div className="bg-[#0B111E]/20 border border-[#9767E4]/20 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto hover:bg-[#0E1525]/40 hover:border-[#9767E4]/30 transition-all duration-300">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#9767E4]/10 via-[#0B111E]/5 to-[#26B2F2]/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="relative">
                  <p className="text-xl text-[#F8FAFC]/80 mb-8 font-medium">
                    No technical setup. No field hassle. Just reliable results.
                  </p>

                  <div className="flex flex-wrap gap-3 justify-center mb-6">
                    <Button>
                      Start Your First Survey Now
                    </Button>
                    <Button variant="outline" className="border-[#9767E4]/20 text-[#9767E4] hover:bg-[#9767E4]/10">
                      See How It Works
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>

                  {/* Trust Indicators matching site theme */}
                  <div className="flex flex-wrap justify-center gap-6 text-sm text-[#F8FAFC]/70">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#9767E4]" />
                      <span>Secure & Private</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#26B2F2]" />
                      <span>50K+ Active Users</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-[#C084FC]" />
                      <span>10M+ Responses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-[#9767E4]" />
                      <span>99% Response Quality</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}