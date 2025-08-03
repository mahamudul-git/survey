import { FaStar } from "react-icons/fa";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Shamim Ahmed",
      role: "Market Research Lead",
      company: "Unilever Bangladesh",
      content: "SurveySight made our market research faster and more reliable. The verified Bangladeshi user base is a game changer.",
      avatar: "https://readdy.ai/api/search-image?query=Bangladeshi%20businessman%20in%20suit%20smiling%20confidently%2C%20corporate%20headshot%20style%2C%20modern%20office%20background%2C%20professional%20lighting&width=80&height=80&seq=bd-testimonial-1&orientation=squarish"
    },
    {
      name: "Farhana Islam",
      role: "Freelance Survey Participant",
      company: "Dhaka",
      content: "I earned extra income every month by sharing my opinions. The survey matching is very accurate and easy to use.",
      avatar: "https://readdy.ai/api/search-image?query=Bangladeshi%20woman%20professional%20smiling%2C%20modern%20business%20attire%2C%20office%20background%2C%20natural%20lighting&width=80&height=80&seq=bd-testimonial-2&orientation=squarish"
    },
    {
      name: "Tanvir Rahman",
      role: "Product Manager",
      company: "bKash",
      content: "The analytics dashboard helped us make better product decisions. SurveySight is the best investment for Bangladeshi companies.",
      avatar: "https://readdy.ai/api/search-image?query=Bangladeshi%20man%20in%20tech%20startup%20office%20environment%2C%20confident%20professional%20headshot%2C%20modern%20business%20attire&width=80&height=80&seq=bd-testimonial-3&orientation=squarish"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto max-w-[1440px] px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our Bangladeshi community of surveyors and publishers have to say about their experience
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-150 transform hover:scale-[1.02]">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-emerald-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">"{testimonial.content}"</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 flex items-center justify-center" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}