import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import { 
  BarChart3, 
  FileText, 
  Plus, 
  Users, 
  ArrowRight, 
  Moon,
  BookOpen,
  Video,
  Download,
  ExternalLink,
  Search,
  Filter,
  Star,
  Clock,
  Tag,
  Play,
  Eye,
  TrendingUp
} from "lucide-react";

// Sample data for resources
const resourceData = [
  {
    id: 1,
    title: "Complete Guide to Survey Design",
    description: "Learn the fundamentals of creating effective surveys that yield valuable insights. From question types to bias prevention.",
    category: "Tutorials",
    type: "Guide",
    readTime: "15 min read",
    rating: 4.8,
    views: 2341,
    image: "https://images.pexels.com/photos/590045/pexels-photo-590045.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    featured: true,
    tags: ["Survey Design", "Best Practices", "Beginner"]
  },
  {
    id: 2,
    title: "Advanced Data Analysis Techniques",
    description: "Master statistical analysis methods for survey data. Statistical significance, correlation analysis, and advanced reporting.",
    category: "Tutorials",
    type: "Video",
    readTime: "25 min watch",
    rating: 4.9,
    views: 1827,
    image: "https://images.pexels.com/photos/8370329/pexels-photo-8370329.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    featured: true,
    tags: ["Data Analysis", "Statistics", "Advanced"]
  },
  {
    id: 3,
    title: "Customer Satisfaction Survey Template",
    description: "Ready-to-use template for measuring customer satisfaction with proven questions and response scales.",
    category: "Templates",
    type: "Template",
    readTime: "5 min setup",
    rating: 4.7,
    views: 3156,
    image: "https://images.pexels.com/photos/6373293/pexels-photo-6373293.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    featured: true,
    tags: ["Customer Satisfaction", "Template", "Ready-to-use"]
  },
  {
    id: 4,
    title: "How Airbnb Improved User Experience",
    description: "Case study on how Airbnb used surveys to identify pain points and improve their platform's user experience.",
    category: "Case Studies",
    type: "Case Study",
    readTime: "12 min read",
    rating: 4.6,
    views: 987,
    image: "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    featured: false,
    tags: ["UX", "Case Study", "Product Improvement"]
  },
  {
    id: 5,
    title: "Survey Response Rate Optimization",
    description: "Evidence-based strategies to increase survey response rates and improve data quality through better engagement.",
    category: "Best Practices",
    type: "Guide",
    readTime: "18 min read",
    rating: 4.8,
    views: 1456,
    image: "https://images.pexels.com/photos/33344612/pexels-photo-33344612.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    featured: true,
    tags: ["Response Rates", "Optimization", "Engagement"]
  },
  {
    id: 6,
    title: "Market Research Survey Framework",
    description: "Comprehensive framework for conducting market research surveys with actionable insights and proven methodologies.",
    category: "Templates",
    type: "Framework",
    readTime: "20 min read",
    rating: 4.9,
    views: 2103,
    image: "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    featured: true,
    tags: ["Market Research", "Framework", "Methodology"]
  },
  {
    id: 7,
    title: "API Integration Tutorial",
    description: "Step-by-step guide to integrate Survey Sight API with your applications. Includes code examples and best practices.",
    category: "API Docs",
    type: "Tutorial",
    readTime: "30 min read",
    rating: 4.5,
    views: 756,
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    featured: false,
    tags: ["API", "Integration", "Development"]
  },
  {
    id: 8,
    title: "Employee Engagement Survey Best Practices",
    description: "Proven strategies for measuring and improving employee engagement through effective survey design and follow-up.",
    category: "Best Practices",
    type: "Video",
    readTime: "22 min watch",
    rating: 4.7,
    views: 1334,
    image: "https://images.pexels.com/photos/23496936/pexels-photo-23496936.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    featured: false,
    tags: ["Employee Engagement", "HR", "Best Practices"]
  },
  {
    id: 9,
    title: "Survey Bias Prevention Guide",
    description: "Comprehensive guide to identifying and preventing common survey biases that can skew your research results.",
    category: "Tutorials",
    type: "Guide",
    readTime: "16 min read",
    rating: 4.8,
    views: 1923,
    image: "https://images.pexels.com/photos/4861363/pexels-photo-4861363.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    featured: false,
    tags: ["Bias Prevention", "Research Quality", "Methodology"]
  },
  {
    id: 10,
    title: "Real-time Dashboard Setup",
    description: "Learn how to create interactive dashboards that update in real-time as survey responses come in.",
    category: "Tutorials",
    type: "Video",
    readTime: "28 min watch",
    rating: 4.6,
    views: 1099,
    image: "https://images.pexels.com/photos/33339850/pexels-photo-33339850.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    featured: false,
    tags: ["Dashboards", "Real-time", "Visualization"]
  }
];

const categories = [
  {
    id: "all",
    name: "All",
    icon: BookOpen,
    count: resourceData.length,
    color: "from-blue-500/30 to-blue-500/5",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/20"
  },
  {
    id: "tutorials",
    name: "Tutorials",
    icon: BookOpen,
    count: resourceData.filter(r => r.category === "Tutorials").length,
    color: "from-blue-500/30 to-blue-500/5",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/20"
  },
  {
    id: "templates",
    name: "Templates",
    icon: Download,
    count: resourceData.filter(r => r.category === "Templates").length,
    color: "from-green-500/30 to-green-500/5",
    iconColor: "text-green-400",
    borderColor: "border-green-500/20"
  },
  {
    id: "best-practices",
    name: "Best Practices",
    icon: TrendingUp,
    count: resourceData.filter(r => r.category === "Best Practices").length,
    color: "from-purple-500/30 to-purple-500/5",
    iconColor: "text-purple-400",
    borderColor: "border-purple-500/20"
  },
  {
    id: "case-studies",
    name: "Case Studies",
    icon: BarChart3,
    count: resourceData.filter(r => r.category === "Case Studies").length,
    color: "from-orange-500/30 to-orange-500/5",
    iconColor: "text-orange-400",
    borderColor: "border-orange-500/20"
  },
  {
    id: "api-docs",
    name: "API Docs",
    icon: ExternalLink,
    count: resourceData.filter(r => r.category === "API Docs").length,
    color: "from-red-500/30 to-red-500/5",
    iconColor: "text-red-400",
    borderColor: "border-red-500/20"
  }
];

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter resources based on search and category
  const filteredResources = useMemo(() => {
    console.log("Filtering with activeFilter:", activeFilter);
    let filtered = resourceData;

    // Filter by category
    if (activeFilter !== "all") {
      const categoryName = categories.find(c => c.id === activeFilter)?.name;
      console.log("Found category name:", categoryName);
      if (categoryName) {
        filtered = filtered.filter(resource => {
          const match = resource.category.toLowerCase() === categoryName.toLowerCase();
          console.log(`Resource "${resource.title}" category: "${resource.category}" matches "${categoryName}":`, match);
          return match;
        });
      }
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(resource =>
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    console.log("Final filtered results:", filtered.length);
    return filtered;
  }, [searchQuery, activeFilter]);

  const handleSearch = () => {
    // Search functionality is handled by the useMemo hook
    console.log("Searching for:", searchQuery);
  };

  const getResourceIcon = (type) => {
    switch (type) {
      case "Video":
        return Video;
      case "Template":
      case "Framework":
        return Download;
      case "Case Study":
        return BarChart3;
      default:
        return BookOpen;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B111E] text-white">
     
      <section className="relative pt-36  pb-12 sm:py-16 lg:py-20 xl:pb-32 xl:pt-40 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-[215px] left-[374px] w-64 h-64 rounded-full bg-[#9767E4]/20 blur-[32px]"></div>
          <div className="absolute top-[246px] right-[200px] w-96 h-96 rounded-full bg-[#26B2F2]/20 blur-[32px]"></div>
          <div className="absolute bottom-[100px] left-[600px] w-48 h-48 rounded-full bg-[#9767E4]/20 blur-[32px]"></div>
        </div>

        <div className="container mx-auto max-w-[1440px] px-6 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#9767E4]/20 text-[#9767E4] text-sm font-medium mb-6">
            Knowledge Hub
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent mb-6">
            Resources & Learning
          </h1>
          
          <p className="text-xl text-[#F8FAFC]/80 max-w-4xl mx-auto leading-relaxed mb-12">
            Everything you need to master survey creation, data analysis, and research methodologies. 
            Explore guides, tutorials, templates, and expert insights.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative ">
              <Search className="absolute z-50 left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#B3BDCC]" />
              <input
                type="text"
                placeholder="Search resources, guides, tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full h-14 pl-12 pr-4 bg-[#0E1525]/40 border border-[#9767E4]/20 rounded-full text-[#F8FAFC] placeholder:text-[#B3BDCC] backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#9767E4]/50 focus:border-[#9767E4]"
              />
              <Button 
                onClick={handleSearch}
                className="absolute right-2 top-2 bg-[#9767E4] hover:bg-[#8B5CF6] shadow-none h-10 rounded-full"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  console.log("Filter clicked:", category.id, "Category name:", category.name);
                  setActiveFilter(category.id);
                }}
                className={`px-4  z-50 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-[#9767E4] text-[#0F1729]' 
                    : 'bg-[#0E1525]/40 border border-[#9767E4]/20 text-[#B3BDCC] hover:text-white hover:border-[#9767E4]'
                }`}
              >
                {category.name}
                {category.count > 0 && (
                  <span className="ml-2 text-xs opacity-70">({category.count})</span>
                )}
              </button>
            ))}
          </div>

          {/* Search Results Count */}
          {searchQuery && (
            <div className="mt-6 text-[#B3BDCC]">
              Found {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''} 
              {searchQuery && ` for "${searchQuery}"`}
            </div>
          )}
        </div>
      </section>

      {/* All Resources */}
      <section className="relative pt-0 mt-0 pb-24 bg-transparent px-8">
        <div className="absolute inset-0">
        <div className="absolute top-16 left-1/4 w-96 h-96 rounded-full bg-[#9767E4]/10 blur-[60px]"></div>
        <div className="absolute bottom-16 right-1/4 w-80 h-80 rounded-full bg-[#26B2F2]/10 blur-[60px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#C084FC]/5 blur-[40px]"></div>
      </div>
        <div className="container mx-auto max-w-[1440px] px-6 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => {
              const IconComponent = getResourceIcon(resource.type);
              return (
                <div
                  key={resource.id}
                  className="bg-[#0E1525]/20 border border-[#222F44]/40 rounded-xl overflow-hidden hover:border-[#9767E4]/30 hover:bg-[#0E1525]/30 transition-all duration-300 group cursor-pointer backdrop-blur-sm"
                >
                  {/* Resource Image */}
                  <div className="h-48 bg-gradient-to-br from-[#9767E4]/20 to-[#26B2F2]/20 relative overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = `data:image/svg+xml;base64,${btoa(`
                          <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100%" height="100%" fill="#0E1525"/>
                            <text x="50%" y="50%" text-anchor="middle" fill="#9767E4" font-family="Arial" font-size="16">
                              Image Not Available
                            </text>
                          </svg>
                        `)}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <div className="w-8 h-8 bg-[#9767E4]/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-[#9767E4]" />
                      <span className="text-xs text-[#9767E4] font-medium">
                        {resource.type}
                      </span>
                      {resource.featured && (
                        <span className="ml-auto bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-[#F8FAFC] mb-3 group-hover:text-[#9767E4] transition-colors">
                      {resource.title}
                    </h3>

                    <p className="text-[#B3BDCC] text-sm leading-relaxed mb-4">
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-[#B3BDCC]">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {resource.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400" />
                          {resource.rating}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {resource.views.toLocaleString()}
                        </div>
                      </div>

                      <Button variant="ghost" size="sm" className="text-[#9767E4]  hover:text-[#000000] hover:bg-[#8B5CF6]  p-0">
                        {resource.type === "Video" ? "Watch" : "Read"} <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-[#9767E4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-[#9767E4]" />
              </div>
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">No resources found</h3>
              <p className="text-[#B3BDCC]">Try adjusting your search or filter to find what you're looking for.</p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilter("all");
                }}
                className="mt-4 bg-[#9767E4] hover:bg-[#8B5CF6]"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
