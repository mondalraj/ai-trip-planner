import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY!;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location: Srinagar, J&K, India, for 2 Days and 2 Night for Family with a Luxury budget with a Flight details, Flight Price with Booking url, Hotels options list  and Places to visit nearby with detailed information, time to travel each of the location for 1 days and 1 night with each day plan with best time to visit in the following JSON format.\n\n{\n  travelPlan: {\n    location: string;\n    duration: {\n      days: number;\n      nights: number;\n    };\n    languageSpoken: string;\n    flight: {\n      airline: string;\n      details: string;\n      price: string;\n      bookingUrl: string;\n    };\n    hotel: {\n      name: string;\n      location: string;\n      price: string;\n      rating: number;\n      description: string;\n    }[];\n    dayPlan: {\n      day: string;\n      schedule: {\n        time: string;\n        location: string;\n        details: string;\n        activity: string;\n        ticketPricing: string;\n        timeToTravel: string;\n      }[];\n    }[];\n    bestTimeToVisit: {\n      month: string;\n      weather: string;\n      temperature: string;\n      description: string;\n    }[];\n    bestLocalFood: {\n      name: string;\n      price: string;\n      rating: number;\n      description: string;\n    }[];\n  };\n};",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{"travelPlan": {"location": "Srinagar, J&K, India", "duration": {"days": 2, "nights": 2}, "languageSpoken": "Hindi, Urdu, Kashmiri, English", "flight": {"airline": "Air India", "details": "Delhi to Srinagar round trip", "price": "15000 INR (approx)", "bookingUrl": "https://www.airindia.in/"}, "hotel": [{"name": "The Lalit Grand Palace Srinagar", "location": "Dal Lake", "price": "20000 INR per night (approx)", "rating": 4.5, "description": "Luxury hotel with stunning views of Dal Lake"}, {"name": "Vivanta Dal View", "location": "Dal Lake", "price": "18000 INR per night (approx)", "rating": 4.2, "description": "Luxury hotel with lake views and exceptional service"}], "dayPlan": [{"day": "Day 1", "schedule": [{"time": "9:00 AM", "location": "Dal Lake", "details": "Shikara ride on Dal Lake", "activity": "Enjoy a relaxing Shikara ride", "ticketPricing": "500-1000 INR", "timeToTravel": "30 mins"}, {"time": "11:00 AM", "location": "Shalimar Bagh", "details": "Mughal Gardens", "activity": "Explore the beautiful Mughal Gardens", "ticketPricing": "50 INR", "timeToTravel": "15 mins"}, {"time": "1:00 PM", "location": "Restaurant at hotel", "details": "Lunch", "activity": "Have lunch", "ticketPricing": "1500 INR", "timeToTravel": "10 mins"}, {"time": "2:30 PM", "location": "Pari Mahal", "details": "Visit Pari Mahal for panoramic views of the city", "activity": "Explore and enjoy the views", "ticketPricing": "50 INR", "timeToTravel": "20 mins"}, {"time": "5:00 PM", "location": "Hotel", "details": "Relax and freshen up", "activity": "Relaxation", "ticketPricing": null, "timeToTravel": "10 mins"}, {"time": "7:00 PM", "location": "Restaurant at hotel or local restaurant", "details": "Dinner", "activity": "Enjoy dinner", "ticketPricing": "1500 INR", "timeToTravel": "10 mins"}]}, {"day": "Day 2", "schedule": [{"time": "9:00 AM", "location": "Mughal Gardens (Nishat Bagh)", "details": "Explore Nishat Bagh", "activity": "Explore the beautiful Mughal Gardens", "ticketPricing": "50 INR", "timeToTravel": "20 mins"}, {"time": "11:00 AM", "location": "Chashme Shahi", "details": "Visit Chashme Shahi garden", "activity": "Explore the beautiful garden", "ticketPricing": "30 INR", "timeToTravel": "25 mins"}, {"time": "1:00 PM", "location": "Local Restaurant", "details": "Lunch", "activity": "Have lunch", "ticketPricing": "1000 INR", "timeToTravel": "10 mins"}, {"time": "2:30 PM", "location": " Shankaracharya Temple", "details": "Visit the temple for stunning views", "activity": "Explore the temple", "ticketPricing": "50 INR", "timeToTravel": "30 mins"}, {"time": "5:00 PM", "location": "Shopping at local market", "details": "Shop for souvenirs", "activity": "Shopping", "ticketPricing": "Varies", "timeToTravel": "30 mins"}]}], "bestTimeToVisit": [{"month": "April-June", "weather": "Pleasant", "temperature": "15-25°C", "description": "Ideal for sightseeing"}, {"month": "September-October", "weather": "Mild", "temperature": "10-20°C", "description": "Pleasant weather for sightseeing"}], "bestLocalFood": [{"name": "Rogan Josh", "price": "500 INR", "rating": 4.8, "description": "Spicy lamb curry"}, {"name": "Yakhni", "price": "400 INR", "rating": 4.5, "description": "Mild flavorful lamb curry"}]}}\n\n```',
        },
      ],
    },
  ],
});
