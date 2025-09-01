export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stramco Solutions</h3>
            <p className="text-gray-300 mb-4">
              Strategic Management Experts That Care. Transforming businesses
              through comprehensive consultancy and HR solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="/strategic-management"
                  className="hover:text-white transition-colors"
                >
                  Strategic Management
                </a>
              </li>
              <li>
                <a
                  href="/hr-services"
                  className="hover:text-white transition-colors"
                >
                  Human Resource Services
                </a>
              </li>
              <li>
                <a
                  href="/training-development"
                  className="hover:text-white transition-colors"
                >
                  Training & Development
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@stramcosolutions.com</li>
              <li>Phone: +254 700 000 000</li>
              <li>Address: Nairobi, Kenya</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Stramco Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
