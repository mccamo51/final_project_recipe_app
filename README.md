# 🍳 Recipe Finder

A modern, responsive web application built with React that helps users discover, save, and explore delicious recipes from around the world. Search by ingredients, dietary preferences, or let the app surprise you with random suggestions!


## 🌟 Main Features

- **🔍 Smart Search**: Search for recipes by keyword, ingredients, or dish names
- **📖 Detailed Recipe View**: View complete recipe details including ingredients, step-by-step instructions, and cooking time
- **❤️ Favorites Management**: Save your favorite recipes locally in the browser using localStorage
- **🥗 Diet Filters**: Filter results by dietary preferences (vegetarian, vegan, gluten-free, keto, etc.)
- **🎲 Surprise Me**: Discover random recipes when you're feeling adventurous
- **📱 Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **⚡ Fast & Intuitive**: Clean, modern interface with smooth interactions

## 🌐 API Integration

This application uses the **[Spoonacular API](https://spoonacular.com/food-api)** to provide:
- Access to thousands of recipes with high-quality images
- Detailed ingredient lists and measurements
- Step-by-step cooking instructions
- Nutritional information
- Dietary restriction filtering
- Recipe search by ingredients or keywords

### API Setup
1. Sign up at [Spoonacular API](https://spoonacular.com/food-api)
2. Get your free API key (1000 requests/day)
3. Add your API key to the environment variables

## 🧩 Application Architecture

### Pages
- **🏠 Home Page**: Main search interface with recipe results grid
- **📄 Recipe Detail Page**: Complete recipe information and instructions
- **❤️ Favorites Page**: User's saved recipes collection

### React Components Structure

```
src/
├── components/
│   ├── App.js                 # Root component with routing
│   ├── SearchBar.js           # Search input with keyword/ingredient search
│   ├── RecipeList.js          # Grid display of recipe results
│   ├── RecipeCard.js          # Individual recipe card with image and basic info
│   ├── RecipeDetails.js       # Full recipe view with ingredients & instructions
│   ├── Favorites.js           # Saved recipes management
│   ├── FilterBar.js           # Diet type and cuisine filters
│   ├── Navigation.js          # Header navigation component
│   └── LoadingSpinner.js      # Loading state component
├── hooks/
│   ├── useLocalStorage.js     # Custom hook for localStorage management
│   ├── useApi.js              # Custom hook for API calls
│   └── useFavorites.js        # Custom hook for favorites management
├── services/
│   └── spoonacularApi.js      # API service layer
├── utils/
│   └── helpers.js             # Utility functions
└── styles/
    └── globals.css            # Global styles and Tailwind imports
```

### Component Responsibilities

- **`<App />`** – Root component handling routing and global state
- **`<SearchBar />`** – Handles user input for recipe searches
- **`<RecipeList />`** – Renders grid of recipe cards with pagination
- **`<RecipeCard />`** – Displays recipe preview with image, title, and quick actions
- **`<RecipeDetails />`** – Shows complete recipe information
- **`<Favorites />`** – Manages and displays user's saved recipes
- **`<FilterBar />`** – Provides filtering options for dietary restrictions

## 🗂️ Application Layout

```
┌─────────────────────────────────────────────────┐
│                    Header                        │
│  [Logo] Recipe Finder    [Home] [Favorites]     │
├─────────────────────────────────────────────────┤
│                 Search Bar                       │
│  [🔍 Search recipes...] [Surprise Me] [Filters] │
├─────────────────────────────────────────────────┤
│                Recipe Results                    │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐              │
│  │Card │ │Card │ │Card │ │Card │              │
│  │ ❤️  │ │ ❤️  │ │ ❤️  │ │ ❤️  │              │
│  └─────┘ └─────┘ └─────┘ └─────┘              │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐              │
│  │Card │ │Card │ │Card │ │Card │              │
│  │ ❤️  │ │ ❤️  │ │ ❤️  │ │ ❤️  │              │
│  └─────┘ └─────┘ └─────┘ └─────┘              │
├─────────────────────────────────────────────────┤
│                   Footer                         │
│       Made with ❤️ using React & Spoonacular    │
└─────────────────────────────────────────────────┘
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Spoonacular API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/recipe-finder.git
   cd recipe-finder
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file in root directory
   echo "REACT_APP_SPOONACULAR_API_KEY=your_api_key_here" > .env
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "axios": "^1.3.0",
    "zustand": "^4.3.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "tailwindcss": "^3.2.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

## 🗓️ Development Timeline: 5-Week Plan

### **Week 1: Planning & Setup** ✅
- [x] Finalize project requirements and features
- [x] Set up React app with Vite/Create React App
- [x] Install and configure Tailwind CSS, React Router, Zustand
- [x] Set up Spoonacular API account and test API calls
- [x] Create project structure and basic components
- [x] Design wireframes and component architecture

### **Week 2: Core Features** 🔄
- [ ] Implement `SearchBar` component with real-time search
- [ ] Build `RecipeList` and `RecipeCard` components
- [ ] Integrate Spoonacular API for recipe search
- [ ] Add loading states and error handling
- [ ] Implement basic responsive design
- [ ] Set up React Router for navigation

### **Week 3: Recipe Details** ⏳
- [ ] Create `RecipeDetails` component with full recipe information
- [ ] Implement recipe detail page routing
- [ ] Add ingredient lists, instructions, and cooking time display
- [ ] Include nutritional information
- [ ] Add recipe images and proper image handling
- [ ] Implement back navigation and breadcrumbs

### **Week 4: Favorites & Filters** ⏳
- [ ] Build localStorage-based favorites system
- [ ] Create `Favorites` component and page
- [ ] Implement `FilterBar` for dietary restrictions
- [ ] Add cuisine type and cooking time filters
- [ ] Build "Surprise Me" random recipe feature
- [ ] Add heart/favorite icons to recipe cards

### **Week 5: Polish & Deploy** ⏳
- [ ] Final styling and UI/UX improvements
- [ ] Optimize performance and API calls
- [ ] Add accessibility features (ARIA labels, keyboard navigation)
- [ ] Comprehensive testing and bug fixes
- [ ] Deploy to Netlify/Vercel
- [ ] Create comprehensive documentation
- [ ] Final presentation preparation

## 📱 Features in Detail

### Search Functionality
- **Keyword Search**: Find recipes by dish names or descriptions
- **Ingredient Search**: Enter ingredients you have on hand
- **Auto-suggestions**: Dynamic search suggestions as you type
- **Search History**: Recent searches for quick access

### Recipe Management
- **Detailed View**: Complete ingredients list with measurements
- **Step-by-step Instructions**: Clear, numbered cooking instructions
- **Cooking Information**: Prep time, cook time, servings, difficulty
- **Nutritional Data**: Calories, macros, and dietary information

### Personalization
- **Favorites System**: Save and organize favorite recipes
- **Local Storage**: Persistent data without requiring accounts
- **Diet Filters**: Vegetarian, vegan, gluten-free, keto, paleo options
- **Cuisine Filters**: Italian, Asian, Mexican, Mediterranean, etc.

## 🎨 Design System

### Color Palette
- **Primary**: Red (#EF4444) - CTA buttons, active states
- **Secondary**: Blue (#3B82F6) - Links, info elements
- **Success**: Green (#10B981) - Confirmations, favorites
- **Background**: Gray (#F9FAFB) - App background
- **Text**: Dark Gray (#374151) - Primary text

### Typography
- **Headers**: Inter Bold (24px, 20px, 18px)
- **Body**: Inter Regular (16px)
- **Captions**: Inter Medium (14px)

### Components
- **Cards**: White background, subtle shadow, rounded corners
- **Buttons**: Rounded, hover effects, loading states
- **Form Elements**: Consistent styling, focus states

## 🛠️ Technical Implementation

### State Management
```javascript
// Using Zustand for global state
import { create } from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
  loading: false,
  searchQuery: '',
  
  searchRecipes: async (query) => {
    set({ loading: true })
    // API call implementation
  },
  
  toggleFavorite: (recipe) => {
    // Favorite management logic
  }
}))
```

### API Integration
```javascript
// Spoonacular API service
const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY
const BASE_URL = 'https://api.spoonacular.com/recipes'

export const recipeAPI = {
  searchRecipes: (query, diet = '', number = 12) => {
    return axios.get(`${BASE_URL}/complexSearch`, {
      params: { apiKey: API_KEY, query, diet, number }
    })
  },
  
  getRecipeDetails: (id) => {
    return axios.get(`${BASE_URL}/${id}/information`, {
      params: { apiKey: API_KEY }
    })
  }
}
```

### Local Storage Management
```javascript
// Custom hook for localStorage
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue]
}
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
# Creates optimized production build in ./build/
```

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Add environment variables in Netlify dashboard
5. Deploy automatically on push to main branch

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
# Follow prompts to deploy
```

## 🔧 Environment Variables

Create a `.env` file in your project root:

```env
# Spoonacular API Configuration
REACT_APP_SPOONACULAR_API_KEY=your_api_key_here
REACT_APP_API_BASE_URL=https://api.spoonacular.com

# Optional: Analytics
REACT_APP_GA_TRACKING_ID=your_google_analytics_id
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```

## 📝 Additional Notes

### Performance Optimization
- **Image Lazy Loading**: Improves initial page load time
- **API Response Caching**: Reduces redundant API calls
- **Pagination**: Load recipes in batches for better performance
- **Debounced Search**: Prevents excessive API calls during typing

### Accessibility Features
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **High Contrast**: Accessible color combinations
- **Focus Management**: Clear focus indicators and logical tab order

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

### Error Handling
- **Network Errors**: Graceful handling of offline/connection issues
- **API Rate Limits**: User-friendly messages for API limitations
- **Invalid Searches**: Helpful suggestions for no results
- **Image Loading Errors**: Fallback images and error states

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Spoonacular API](https://spoonacular.com/food-api) for providing recipe data
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide React](https://lucide.dev/) for beautiful icons
- [React](https://reactjs.org/) team for the amazing framework

---

**Made with ❤️ and lots of ☕ by [Your Name]**

*Happy cooking! 👨‍🍳👩‍🍳*