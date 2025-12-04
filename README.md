## MoviesDatabase API Documentation
# API Overview
MoviesDatabase API is a RESTful service that provides comprehensive movie and TV show data including titles, cast, ratings, release dates, plot summaries, and more. The API allows developers to access up-to-date entertainment information for building movie databases, recommendation systems, and entertainment applications.

Version
v1

## Available Endpoints
Movies
GET /titles - Retrieve a list of movies with filtering and pagination options

GET /titles/{id} - Get detailed information about a specific movie

GET /titles/random - Fetch random movie titles from the database

TV Shows
GET /titles/series - Access television series data

GET /titles/series/{id} - Get details for a specific TV series

GET /titles/series/random - Retrieve random TV series

Search
GET /titles/search/title/{title} - Search movies and shows by title

GET /titles/search/keyword/{keyword} - Search by keyword or phrase

Additional Data
GET /genres - List all available genres

GET /crew/{id} - Get information about cast and crew members

GET /reviews/{id} - Access user reviews for titles

Request and Response Format
Request Format
Requests are made using standard HTTP methods with parameters passed as query strings:

bash
GET https://moviesdatabase.p.rapidapi.com/titles?year=2020&genre=Action&limit=10
Common query parameters include:

limit - Number of results to return (default: 10)

page - Page number for pagination

year - Filter by release year

genre - Filter by genre

Response Format
Responses are returned in JSON format:

json
{
  "results": [
    {
      "id": "tt1234567",
      "title": "Movie Title",
      "originalTitle": "Original Title",
      "releaseYear": 2020,
      "genres": ["Action", "Drama"],
      "plot": "Movie plot summary...",
      "ratings": {
        "average": 7.5,
        "voteCount": 12000
      }
    }
  ],
  "page": 1,
  "totalPages": 10,
  "totalResults": 100
}
Authentication
The MoviesDatabase API requires authentication via API key:

API Key Header: All requests must include the X-RapidAPI-Key header

Host Header: Include X-RapidAPI-Host: moviesdatabase.p.rapidapi.com

Example request headers:

http
X-RapidAPI-Key: your-api-key-here
X-RapidAPI-Host: moviesdatabase.p.rapidapi.com
To obtain an API key:

Visit RapidAPI website

Subscribe to the MoviesDatabase API

Generate your unique API key from the dashboard

Error Handling
Common HTTP Status Codes
200: Success - Request completed successfully

400: Bad Request - Invalid parameters or malformed request

401: Unauthorized - Missing or invalid API key

403: Forbidden - Valid API key but insufficient permissions

404: Not Found - Resource doesn't exist

429: Too Many Requests - Rate limit exceeded

500: Internal Server Error - Server-side issue

Error Response Format
json
{
  "message": "Error description",
  "code": "ERROR_CODE",
  "details": "Additional error information if available"
}
Handling Errors in TypeScript
typescript
try {
  const response = await fetch(apiUrl, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  // Process data
} catch (error) {
  console.error('API request failed:', error);
  // Implement retry logic or user notification
}
Usage Limits and Best Practices
Rate Limits
Free tier: 500 requests per day

Basic tier: 5,000 requests per month

Pro tier: 50,000 requests per month

Enterprise: Custom limits based on agreement

Best Practices
Implement Caching: Cache responses to reduce API calls and improve performance

Use Efficient Pagination: Always specify limit parameter and implement proper pagination

Batch Requests: When possible, fetch multiple items in single requests

Handle Retries Gracefully: Implement exponential backoff for failed requests

Monitor Usage: Track your API consumption to avoid hitting limits

Validate Inputs: Validate parameters before making API calls

Use TypeScript Interfaces: Define types for request/response objects

TypeScript Interface Example
typescript
interface Movie {
  id: string;
  title: string;
  originalTitle: string;
  releaseYear: number;
  genres: string[];
  plot: string;
  ratings: {
    average: number;
    voteCount: number;
  };
}

interface ApiResponse<T> {
  results: T[];
  page: number;
  totalPages: number;
  totalResults: number;
}
