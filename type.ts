type TripDataType = {
  travelPlan: {
    location: string;
    duration: {
      days: number;
      nights: number;
    };
    languageSpoken: string;
    flight: {
      airline: string;
      details: string;
      price: string;
      bookingUrl: string;
    };
    hotel: {
      name: string;
      location: string;
      price: string;
      rating: number;
      description: string;
    }[];
    dayPlan: {
      day: string;
      schedule: {
        time: string;
        location: string;
        details: string;
        activity: string;
        ticketPricing: string;
        timeToTravel: string;
      }[];
    }[];
    bestTimeToVisit: {
      month: string;
      weather: string;
      temperature: string;
      description: string;
    }[];
    bestLocalFood: {
      name: string;
      price: string;
      rating: number;
      description: string;
    }[];
  };
};

const prompt =
  "Generate Travel Plan for Location: New York USA, for 2 Days and 2 Night for Family with a Luxury budget with a Flight details, Flight Price with Booking url, Hotels options list  and Places to visit nearby, time to travel each of the location for 1 days and 1 night with each day plan with best time to visit in the following JSON format.";

const tripDataSample = {
  travelPlan: {
    location: "Srinagar, J&K, India",
    duration: { days: 2, nights: 2 },
    languageSpoken: "Hindi, Urdu, Kashmiri, English",
    flight: {
      airline: "Air India",
      details: "Delhi to Srinagar round trip",
      price: "15000 INR (approx)",
      bookingUrl: "https://www.airindia.in/",
    },
    hotel: [
      {
        name: "The Lalit Grand Palace Srinagar",
        location: "Dal Lake",
        price: "20000 INR per night (approx)",
        rating: 4.5,
        description: "Luxury hotel with stunning views of Dal Lake",
      },
      {
        name: "Vivanta Dal View",
        location: "Dal Lake",
        price: "18000 INR per night (approx)",
        rating: 4.2,
        description: "Luxury hotel with lake views and exceptional service",
      },
    ],
    dayPlan: [
      {
        day: "Day 1",
        schedule: [
          {
            time: "9:00 AM",
            location: "Dal Lake",
            details: "Shikara ride on Dal Lake",
            activity: "Enjoy a relaxing Shikara ride",
            ticketPricing: "500-1000 INR",
            timeToTravel: "30 mins",
          },
          {
            time: "11:00 AM",
            location: "Shalimar Bagh",
            details: "Mughal Gardens",
            activity: "Explore the beautiful Mughal Gardens",
            ticketPricing: "50 INR",
            timeToTravel: "15 mins",
          },
          {
            time: "1:00 PM",
            location: "Restaurant at hotel",
            details: "Lunch",
            activity: "Have lunch",
            ticketPricing: "1500 INR",
            timeToTravel: "10 mins",
          },
          {
            time: "2:30 PM",
            location: "Pari Mahal",
            details: "Visit Pari Mahal for panoramic views of the city",
            activity: "Explore and enjoy the views",
            ticketPricing: "50 INR",
            timeToTravel: "20 mins",
          },
          {
            time: "5:00 PM",
            location: "Hotel",
            details: "Relax and freshen up",
            activity: "Relaxation",
            ticketPricing: null,
            timeToTravel: "10 mins",
          },
          {
            time: "7:00 PM",
            location: "Restaurant at hotel or local restaurant",
            details: "Dinner",
            activity: "Enjoy dinner",
            ticketPricing: "1500 INR",
            timeToTravel: "10 mins",
          },
        ],
      },
      {
        day: "Day 2",
        schedule: [
          {
            time: "9:00 AM",
            location: "Mughal Gardens (Nishat Bagh)",
            details: "Explore Nishat Bagh",
            activity: "Explore the beautiful Mughal Gardens",
            ticketPricing: "50 INR",
            timeToTravel: "20 mins",
          },
          {
            time: "11:00 AM",
            location: "Chashme Shahi",
            details: "Visit Chashme Shahi garden",
            activity: "Explore the beautiful garden",
            ticketPricing: "30 INR",
            timeToTravel: "25 mins",
          },
          {
            time: "1:00 PM",
            location: "Local Restaurant",
            details: "Lunch",
            activity: "Have lunch",
            ticketPricing: "1000 INR",
            timeToTravel: "10 mins",
          },
          {
            time: "2:30 PM",
            location: " Shankaracharya Temple",
            details: "Visit the temple for stunning views",
            activity: "Explore the temple",
            ticketPricing: "50 INR",
            timeToTravel: "30 mins",
          },
          {
            time: "5:00 PM",
            location: "Shopping at local market",
            details: "Shop for souvenirs",
            activity: "Shopping",
            ticketPricing: "Varies",
            timeToTravel: "30 mins",
          },
        ],
      },
    ],
    bestTimeToVisit: [
      {
        month: "April-June",
        weather: "Pleasant",
        temperature: "15-25°C",
        description: "Ideal for sightseeing",
      },
      {
        month: "September-October",
        weather: "Mild",
        temperature: "10-20°C",
        description: "Pleasant weather for sightseeing",
      },
    ],
    bestLocalFood: [
      {
        name: "Rogan Josh",
        price: "500 INR",
        rating: 4.8,
        description: "Spicy lamb curry",
      },
      {
        name: "Yakhni",
        price: "400 INR",
        rating: 4.5,
        description: "Mild flavorful lamb curry",
      },
    ],
  },
};

const contextData = {
  budget: {
    desc: "Budget-friendly trips",
    icon: "💰",
    id: 1,
    title: "Affordable",
  },
  endDate: "2024-11-24",
  locationInfo: {
    coordinates: {
      lat: 32.2431872,
      lng: 77.1891761,
    },
    name: "Manali, Himachal Pradesh, India",
    photoRef:
      "AdDdOWoc-jzIRn19eqU-RMP7A9c87n99jadugXqt8wTHfKjADLehZ0qP28hW6zrO1U7WJgrN4xxrSPoDf2P1vrtx_OQ0ctwyoegRuYdhHEx8iHIVPUrqoIOaUkvP8O8qBoEfveG-ydX_LydJR2dOP9o2lBk_ot-jnjZzSEPUY-2Q8jWKcTw1",
    url: "https://maps.google.com/?q=Manali,+Himachal+Pradesh,+India&ftid=0x39048708163fd03f:0x8129a80ebe5076cd",
  },
  startDate: "2024-11-22",
  totalDays: 3,
  traveler: {
    desc: "A group of fun loving people",
    icon: "🏡",
    id: 3,
    people: "3 to 5 People",
    title: "Family",
  },
};

export type { TripDataType };
