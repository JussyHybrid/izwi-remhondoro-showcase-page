
import { Music, Heart, Users, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-amber-600 rounded-full transform rotate-12"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border-4 border-red-600 rounded-full transform -rotate-12"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 border-4 border-orange-600 rounded-full transform rotate-45"></div>
        <div className="absolute bottom-32 right-10 w-28 h-28 border-4 border-amber-700 rounded-full transform -rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Custom Logo Section */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full shadow-lg overflow-hidden bg-white p-2">
              <img 
                src="/lovable-uploads/aaa6d0c0-18b8-448b-a808-82abbc71d6b9.png"
                alt="Izwi ReMhondoro Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 leading-tight">
            Izwi ReMhondoro
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-amber-800 mb-8 max-w-3xl mx-auto leading-relaxed">
            A Living Cultural Museum Preserving and Promoting African Cultural Heritage
          </p>
          <p className="text-lg text-amber-700 mb-12 max-w-2xl mx-auto">
            Traditional Mbira Music • Cultural Ceremonies • Heritage Preservation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
              Learn Our Story
            </Button>
            <Button variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-3 text-lg rounded-full">
              Contact Us
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Music className="w-12 h-12 text-amber-700 mb-4" />
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Traditional Music</h3>
              <p className="text-amber-800 text-center">Authentic Mbira music preserving ancient rhythms</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Heart className="w-12 h-12 text-red-700 mb-4" />
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Cultural Heritage</h3>
              <p className="text-amber-800 text-center">Keeping African traditions alive for future generations</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Users className="w-12 h-12 text-orange-700 mb-4" />
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Community</h3>
              <p className="text-amber-800 text-center">Working with organizations across Zimbabwe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
