import { FaStar } from "react-icons/fa";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Shamim Ahmed",
      role: "Market Research Lead",
      company: "Unilever Bangladesh",
      content: "SurveySight made our market research faster and more reliable. The verified Bangladeshi user base is a game changer.",
      avatar: "https://www.shutterstock.com/image-photo/happy-smiling-bangladesh-business-man-600nw-391131271.jpg",
      gradient: "from-[#9767E4]/15 to-[#26B2F2]/15",
      borderColor: "[#9767E4]/20"
    },
    {
      name: "Farhana Islam",
      role: "Freelance Survey Participant",
      company: "Dhaka",
      content: "I earned extra income every month by sharing my opinions. The survey matching is very accurate and easy to use.",
      avatar: "https://www.efirm.com.bd/wp-content/uploads/2024/06/How-to-Start-an-Online-E-commerce-Business-in-Bangladesh.jpg",
      gradient: "from-[#26B2F2]/15 to-[#C084FC]/15",
      borderColor: "[#26B2F2]/20"
    },
    {
      name: "Tanvir Rahman",
      role: "Product Manager",
      company: "bKash",
      content: "The analytics dashboard helped us make better product decisions. SurveySight is the best investment for Bangladeshi companies.",
      avatar: "https://erp.bau.edu.bd/public/photos/employee_photo/6795c7f3d1b53.jpg",
      gradient: "from-[#C084FC]/15 to-[#9767E4]/15",
      borderColor: "[#C084FC]/20"
    }
  ];

  return (
    <section className="relative py-20 bg-transparent w-full overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-1/4 w-96 h-96 rounded-full bg-[#9767E4]/10 blur-[60px]"></div>
        <div className="absolute bottom-16 right-1/4 w-80 h-80 rounded-full bg-[#26B2F2]/10 blur-[60px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#C084FC]/5 blur-[40px]"></div>
      </div>

      <div className="container mx-auto max-w-[1440px] px-6 relative">
        <div className="text-center mb-20">
          <div className="initial-hidden animate-fade-in-up inline-flex items-center px-4 py-1.5 rounded-full bg-[#9767E4]/20 text-[#9767E4] text-sm font-medium mb-6">
            Customer Stories
          </div>
          <h2 className="initial-hidden animate-fade-in-up animation-delay-100 text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] mb-6">
            
            <span className="bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
              Trusted by Thousands
            </span>
          </h2>
          <p className="initial-hidden animate-fade-in-up animation-delay-200 text-xl text-[#F8FAFC]/70 max-w-2xl mx-auto">
            See what our Bangladeshi community of surveyors and publishers have to say about their experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`initial-hidden animate-fade-in-scale animation-delay-${300 + (index * 100)} group relative rounded-2xl border border-${testimonial.borderColor} bg-[#0B111E]/20 p-8 hover:bg-[#0E1525]/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2`}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${testimonial.gradient}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} p-0.5 mr-4`}>
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#F8FAFC]">{testimonial.name}</h4>
                    <p className="text-sm text-[#F8FAFC]/70">{testimonial.role}</p>
                    <p className="text-sm text-[#9767E4] font-medium">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-[#F8FAFC]/80 leading-relaxed mb-4">"{testimonial.content}"</p>
                <div className="flex text-[#FFD700]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}