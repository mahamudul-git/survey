
import React, { useState } from 'react';

const plans = [
  {
    key: 'individual',
    icon: <i className="fa-regular fa-user" />, // You can replace with react-icons if preferred
    title: 'Individual',
    desc: 'Perfect for students, researchers, and small projects',
    price: 'Free',
    priceDesc: 'Pay per survey with tokens',
    features: [
      'Max 200 responses per campaign',
      'General audience targeting',
      'Basic question types',
      'Standard support',
      'CSV data export',
    ],
    button: 'Start Free',
  },
  {
    key: 'business',
    icon: <i className="fa-solid fa-briefcase" />, // You can replace with react-icons if preferred
    title: 'Business',
    desc: 'Ideal for startups, agencies, and growing businesses',
    price: '৳2,500',
    priceDesc: 'per month + tokens',
    features: [
      'Up to 1,000 responses per campaign',
      'Custom demographic filters',
      'Advanced question types',
      '5-10% token bonus',
      'Limited team access',
      'Priority support',
    ],
    button: 'Start Business',
    popular: true,
  },
  {
    key: 'enterprise',
    icon: <i className="fa-solid fa-landmark" />, // You can replace with react-icons if preferred
    title: 'Enterprise',
    desc: 'For large organizations and government bodies',
    price: 'Custom',
    priceDesc: 'Contact for pricing',
    features: [
      'Unlimited responses',
      'Deep targeting & geo-fencing',
      'All question types including live calls',
      'Bulk token discounts',
      'Full team dashboard',
      'Custom NDA & compliance',
      'Dedicated account manager',
    ],
    button: 'Contact Sales',
  },
];

const SharedHome_3 = () => {
  const [selected, setSelected] = useState('business');

  return (
    <section className="w-full bg-white py-12 px-2 md:px-0">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Publisher Account Types</h2>
        <p className="text-center text-[#347433] mb-8 md:mb-12">Choose the perfect plan for your survey needs. All plans include our token-based system for flexible survey publishing.</p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 justify-center items-stretch">
          {plans.map((plan) => {
            const isSelected = selected === plan.key;
            const isPopular = plan.popular;
            return (
              <div
                key={plan.key}
                className={`flex-1 bg-white rounded-2xl border ${isSelected ? 'border-2 border-green-500 shadow-2xl scale-105 md:scale-110 z-10' : 'border-gray-200 shadow-sm'} flex flex-col items-center px-6 md:px-7 py-8 md:py-10 min-w-[260px] max-w-sm mx-auto md:mx-0 transition-all duration-200 cursor-pointer relative`}
                onClick={() => setSelected(plan.key)}
                tabIndex={0}
                aria-pressed={isSelected}
                role="button"
              >
                {isPopular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#347433] text-white text-xs font-bold px-4 py-1 rounded-full shadow">Most Popular</span>
                  </div>
                )}
                <div className={`rounded-full p-3 mb-3 ${isSelected ? 'bg-green-50' : 'bg-gray-100'}`}>{plan.icon}</div>
                <h3 className="text-xl font-semibold mb-1">{plan.title}</h3>
                <p className="text-gray-500 text-sm mb-3 text-center">{plan.desc}</p>
                <div className={`text-[#347433] text-3xl font-bold mb-1 ${isSelected ? 'scale-110' : ''}`}>{plan.price}</div>
                <div className="text-xs text-gray-500 mb-4">{plan.priceDesc}</div>
                <ul className="text-sm text-gray-700 space-y-2 mb-6 w-full">
                  {plan.features.map((f, i) => (
                    <li key={i}>✓ {f}</li>
                  ))}
                </ul>
                <button
                  className={
                    isSelected
                      ? 'bg-[#347433] text-white rounded w-full py-2 font-semibold hover:bg-green-700 transition'
                      : 'border border-[#347433] text-[#347433] rounded w-full py-2 font-semibold hover:bg-green-50 transition'
                  }
                >
                  {plan.button}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {/* CTA Section - full width background */}
      <div className="mt-12 w-full bg-[#004030] py-10 px-4 flex flex-col items-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">Ready to Tranform the Survey game in bangladesh?</h3>
        <p className="text-white text-center mb-6 max-w-2xl">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center">
          <button className="bg-white text-[#347433] font-bold rounded-lg px-8 py-3 text-lg shadow hover:bg-green-50 transition">Join Free</button>
          <button className="bg-white text-[#347433] font-bold rounded-lg px-8 py-3 text-lg shadow hover:bg-green-50 transition">Contact Support</button>
        </div>
      </div>
    </section>
  );
};

export default SharedHome_3;