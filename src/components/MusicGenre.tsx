
import { Music2, MapPin, Mic, Users2 } from "lucide-react";

const MusicGenre = () => {
  const activities = [
    {
      icon: Music2,
      title: "Traditional Ceremonies (BIRAS)",
      description: "Authentic Mbira music for sacred cultural ceremonies"
    },
    {
      icon: Mic,
      title: "Concerts & Performances",
      description: "Live performances bringing traditional music to modern audiences"
    },
    {
      icon: MapPin,
      title: "Sacred Places & Hotels",
      description: "Performances at culturally significant locations and hospitality venues"
    },
    {
      icon: Users2,
      title: "National Galas",
      description: "Representing Zimbabwe's cultural heritage at national events"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Our Music & Activities</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
            We specialize in traditional Mbira music, poetry, dance training, and cultural activities that preserve Zimbabwe's rich heritage
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="mb-6">
                <activity.icon className="w-16 h-16 text-amber-700 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">{activity.title}</h3>
              <p className="text-amber-800 leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white p-10 rounded-2xl shadow-lg max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-amber-900 mb-6 text-center">Traditional Mbira Music</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-amber-800 leading-relaxed text-lg mb-6">
                The Mbira is a traditional African musical instrument that holds deep spiritual and cultural significance. Our group preserves the authentic playing techniques, songs, and ceremonies associated with this sacred instrument.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                  <span className="text-amber-900">Poetry and storytelling</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  <span className="text-amber-900">Traditional dance training</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-amber-900">Mbira playing instruction</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                  <span className="text-amber-900">Cultural ceremony guidance</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 rounded-xl">
              <h4 className="text-2xl font-semibold text-amber-900 mb-4">Our Services Include:</h4>
              <ul className="space-y-3 text-amber-800">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  Cultural performances for events
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  Traditional music education
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  Ceremonial guidance and consultation
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  Cultural heritage workshops
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicGenre;
