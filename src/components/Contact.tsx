
import { Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-amber-800 max-w-2xl mx-auto leading-relaxed">
            Connect with us to learn more about our cultural programs, performances, or to collaborate on preserving African heritage
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-amber-700 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Email</h4>
                    <a 
                      href="mailto:izwi@izwiremhondoro.co.zw" 
                      className="text-amber-700 hover:text-amber-800 transition-colors"
                    >
                      izwi@izwiremhondoro.co.zw
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-amber-700 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Location</h4>
                    <p className="text-amber-800">Zimbabwe</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-amber-700 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Availability</h4>
                    <p className="text-amber-800">Available for performances and cultural events</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-amber-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">What We Offer</h3>
              <ul className="space-y-3 text-amber-800">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                  Traditional Mbira performances
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  Cultural ceremony guidance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  Educational workshops
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                  Heritage preservation consulting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
