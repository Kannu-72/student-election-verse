
import React from 'react';
import OrganizationCard from '@/components/OrganizationCard';

const Index = () => {
  const organizations = [
    {
      title: 'Student Activity Center (SAC)',
      description: 'Hub for all extracurricular activities, events, and student welfare initiatives on campus.',
      imageSrc: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      link: '/sac',
      bgColor: 'bg-blue-800/70',
    },
    {
      title: 'National Service Scheme (NSS)',
      description: 'Volunteer organization focused on community service and social welfare projects.',
      imageSrc: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      link: '/nss',
      bgColor: 'bg-green-800/70',
    },
    {
      title: 'National Cadet Corps (NCC)',
      description: 'Youth organization promoting leadership, patriotism, and service values among students.',
      imageSrc: 'https://images.unsplash.com/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      link: '/ncc',
      bgColor: 'bg-amber-800/70',
    },
    {
      title: 'Entrepreneurship Cell (E-Cell)',
      description: 'Platform fostering innovation, startup culture, and entrepreneurial skills among students.',
      imageSrc: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      link: '/ecell',
      bgColor: 'bg-purple-800/70',
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="relative bg-gradient-to-b from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Campus Election Portal</h1>
            <p className="text-xl opacity-90 mb-8">
              Your platform for transparent and democratic selection of student representatives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-900 px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                Student Login
              </button>
              <button className="border border-white bg-transparent px-6 py-2 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
                Admin Login
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Campus Organizations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-96">
          {organizations.map((org) => (
            <OrganizationCard
              key={org.title}
              title={org.title}
              description={org.description}
              imageSrc={org.imageSrc}
              link={org.link}
              bgColor={org.bgColor}
            />
          ))}
        </div>
      </div>

      <footer className="bg-gray-100 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Smart Digital Election & Feedback Platform</h3>
            <p className="text-gray-600 mb-6">Empowering student voices through transparent and accessible elections.</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-blue-700 hover:text-blue-900">Support</a>
              <a href="#" className="text-blue-700 hover:text-blue-900">Election Guidelines</a>
              <a href="#" className="text-blue-700 hover:text-blue-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
