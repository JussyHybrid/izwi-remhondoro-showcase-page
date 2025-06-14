
import { Music, Heart, Mail, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-amber-900 to-red-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center md:justify-start">
              <Music className="w-6 h-6 mr-2" />
              Izwi ReMhondoro
            </h3>
            <p className="text-amber-100 leading-relaxed">
              A living cultural museum dedicated to preserving and promoting African cultural heritage through traditional Mbira music and ceremonies.
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Our Mission</h4>
            <p className="text-amber-100 leading-relaxed">
              Following Traditional Culture so that Africans have a noble esteem on earth, working with organizations across Zimbabwe.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 flex items-center justify-center md:justify-end">
              <Mail className="w-5 h-5 mr-2" />
              Connect With Us
            </h4>
            <a 
              href="mailto:izwi@izwiremhondoro.co.zw" 
              className="text-amber-200 hover:text-white transition-colors block mb-6"
            >
              izwi@izwiremhondoro.co.zw
            </a>
            
            {/* Social Media Links with Names */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <a 
                href="https://youtube.com/@izwiremhondoro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-200 hover:text-white transition-colors flex flex-col items-center p-3 bg-white/10 rounded-lg hover:bg-white/20"
              >
                <Youtube className="w-6 h-6 mb-1" />
                <span className="text-xs">YouTube</span>
              </a>
              
              <a 
                href="https://music.apple.com/artist/izwi-remhondoro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-200 hover:text-white transition-colors flex flex-col items-center p-3 bg-white/10 rounded-lg hover:bg-white/20"
              >
                <div className="w-6 h-6 mb-1 bg-current rounded-sm flex items-center justify-center">
                  <Music className="w-4 h-4" />
                </div>
                <span className="text-xs">Apple Music</span>
              </a>
              
              <a 
                href="https://open.spotify.com/artist/izwiremhondoro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-200 hover:text-white transition-colors flex flex-col items-center p-3 bg-white/10 rounded-lg hover:bg-white/20"
              >
                <div className="w-6 h-6 mb-1 bg-current rounded-full relative">
                  <div className="absolute inset-0 bg-amber-900 rounded-full"></div>
                  <div className="absolute inset-1 bg-current rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-amber-900 rounded-full"></div>
                </div>
                <span className="text-xs">Spotify</span>
              </a>
              
              <a 
                href="https://wa.me/263771234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-200 hover:text-white transition-colors flex flex-col items-center p-3 bg-white/10 rounded-lg hover:bg-white/20"
              >
                <MessageCircle className="w-6 h-6 mb-1" />
                <span className="text-xs">WhatsApp</span>
              </a>
            </div>
            
            <p className="text-amber-100 mt-2">Zimbabwe</p>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-5 h-5 text-red-400 mr-2" />
            <span className="text-amber-100">Preserving culture, enriching heritage</span>
          </div>
          <p className="text-amber-200">
            © 2024 Izwi ReMhondoro. Honoring the legacy of Sekuru Dzapasi (E.M Pondamari)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
