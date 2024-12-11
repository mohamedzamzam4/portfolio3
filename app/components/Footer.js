export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Mohamed Zamzem. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://github.com/mohamedzamzam4" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mohamed-zemzem-14a805243/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
           
          </div>
        </div>
      </footer>
    )
  }
  
  