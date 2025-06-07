
import { Calendar, Users, Award } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Who We Are</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-red-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <Calendar className="w-8 h-8 text-amber-700 mr-3" />
                <h3 className="text-2xl font-semibold text-amber-900">Founded in 2004</h3>
              </div>
              <p className="text-amber-800 leading-relaxed text-lg">
                Izwi Remhondoro was formed by Sekuru Dzapasi (E.M Pondamari) with a vision to preserve and promote African cultural heritage through traditional music and ceremonies.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-amber-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-red-700 mr-3" />
                <h3 className="text-2xl font-semibold text-amber-900">Our Mission</h3>
              </div>
              <p className="text-amber-800 leading-relaxed text-lg">
                Our members believe it is only by following Traditional Culture that Africans have a noble esteem on earth. We work to ensure this heritage continues for future generations.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-orange-700 mr-3" />
              <h3 className="text-2xl font-semibold text-amber-900">Our Partnerships</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="w-3 h-3 bg-amber-600 rounded-full mr-4"></div>
                <span className="text-amber-900 font-medium">National Arts Council of Zimbabwe</span>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-4"></div>
                <span className="text-amber-900 font-medium">National Museums of Zimbabwe</span>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="w-3 h-3 bg-orange-600 rounded-full mr-4"></div>
                <span className="text-amber-900 font-medium">Government Parastatals</span>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="w-3 h-3 bg-amber-700 rounded-full mr-4"></div>
                <span className="text-amber-900 font-medium">Cultural Organizations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
