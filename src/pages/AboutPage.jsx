import { Info } from "lucide-react";

const AboutPage = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center max-w-2xl px-4">
      <Info className="h-24 w-24 text-gray-400 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-gray-900 mb-2">About Recipe Finder</h2>
      <p className="text-gray-600">
        Recipe Finder is your ultimate destination for discovering, sharing, and enjoying
        incredible recipes from around the world. Join our community of food lovers today!
      </p>
    </div>
  </div>
);
export default AboutPage