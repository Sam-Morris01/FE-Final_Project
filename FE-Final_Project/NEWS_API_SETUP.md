# NewsAPI Setup Guide

## Getting Started

To use the news search functionality, you need to set up a NewsAPI key:

### 1. Get a NewsAPI Key

1. Go to [https://newsapi.org/](https://newsapi.org/)
2. Sign up for a free account
3. Get your API key from the dashboard

### 2. Configure Environment Variables

Create a `.env` file in the root of your project with:

```
VITE_NEWS_API_KEY=your-actual-api-key-here
```

### 3. Features Implemented

✅ **API Interactions**
- Search form validation (empty input check)
- NewsAPI integration with proper parameters
- Environment-based URL configuration
- Date range: 7 days ago to today
- Page size: 100 articles

✅ **Response Handling**
- Loading animation during API calls
- Error handling with user-friendly messages
- "Nothing Found" for empty results
- State management for articles

✅ **Article Rendering**
- Initial display of 3 articles
- "Show more" button for additional articles
- Proper article data mapping:
  - Source name
  - Title
  - Published date
  - Description
  - Image URL
  - Article URL (clickable cards)

✅ **User Experience**
- Clickable news cards that open articles in new tabs
- Hover effects on cards
- Loading states
- Error messages
- Responsive design

### 4. Usage

1. Enter a search term in the search form
2. Click "Search" or press Enter
3. View the loading animation
4. Browse through the results
5. Click "Show more" to load additional articles
6. Click on any card to open the full article

### 5. API Parameters

The search uses these parameters:
- `q`: User's search query
- `apiKey`: Your NewsAPI key
- `from`: 7 days ago
- `to`: Today's date
- `pageSize`: 100 articles

### 6. Error Handling

The app handles these scenarios:
- Empty search input
- API errors
- No results found
- Network issues 