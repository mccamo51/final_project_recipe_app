import { Info } from "lucide-react";

const AboutPage = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors duration-200">
    <div className="text-center max-w-2xl px-4">
      <Info className="h-24 w-24 text-gray-400 dark:text-gray-500 mx-auto mb-4 transition-colors duration-200" />
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
        About Recipe Finder
      </h2>
      <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
        Recipe Finder is your ultimate destination for discovering, sharing, and enjoying
        incredible recipes from around the world. Join our community of food lovers today!
      </p>
    </div>
  </div>
);

export default AboutPage;