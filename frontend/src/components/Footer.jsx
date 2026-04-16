const Footer = () => {
  return (
    <footer className="mt-16">
      
      {/* Top Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-[#F83002] to-[#7209b7]" />

      <div className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              <span className="text-[#F83002]">Job</span>
              <span className="text-[#7209b7]">Hunt</span>
            </h2>
            <p className="mt-3 text-sm text-gray-400">
              Find your dream job and grow your career with us.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-[#F83002] transition">Home</a></li>
              <li><a href="/jobs" className="hover:text-[#F83002] transition">Browse Jobs</a></li>
              <li><a href="/companies" className="hover:text-[#F83002] transition">Companies</a></li>
              <li><a href="/contact" className="hover:text-[#F83002] transition">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#7209b7] transition">Help Center</a></li>
              <li><a href="#" className="hover:text-[#7209b7] transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#7209b7] transition">Terms & Conditions</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
          © {new Date().getFullYear()} JobHunt. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;