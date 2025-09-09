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

This application uses the **[TheMealDB API](https://www.themealdb.com/api/json/v1/1)** to provide:
- Access to thousands of recipes with high-quality images
- Detailed ingredient lists and measurements
- Step-by-step cooking instructions
- Nutritional information
- Dietary restriction filtering
- Recipe search by ingredients or keywords



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

├── store/
│   ├── favoriteStore.jsx     # Custom hook for localStorage management
│   ├── themeStore.js              # Custom hook for API calls
│   └── authStore.js        # Custom hook for favorites management
├── services/
│   └── theMealDB.jsx      # API service layer
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
- TheMealDB Api

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mccamo51/recipe-finder.git
   cd recipe-finder
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
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
