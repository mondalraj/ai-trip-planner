export const SelectTravelerList = [
    {
        id: 1,
        title: 'Just Me',
        desc: 'Traveling solo',
        icon: '✈️',
        people: '1'
    },
    {
        id: 2,
        title: 'A Couple',
        desc: 'Traveling with a partner',
        icon: '🥂',
        people: '2 People'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A group of fun loving people',
        icon: '🏡',
        people: '3 to 5 People'
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'A bunch of thrill-seekes',
        icon: '🍻',
        people: '5 to 10 People'
    }
]

export const SelectBudgetOptions = [
    {
        id: 1,
        title:  'Affordable',
        desc: 'Budget-friendly trips',
        icon: '💰',
    },
    {
        id: 2,
        title: 'Mid-Range',
        desc: 'Moderately priced trips',
        icon: '💸',
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'High-end trips',
        icon: '💎',
    }
]

export const AI_PROMPT = 'Generate Travel Plan for Location: {destination}, for {totalDays} days, starting {startDate} for {traveler} with a {budget} budget with a Flight details, Flight Price with Booking url, Hotels options list  and Places to visit nearby, time to travel each of the location for {totalDays} days and {totalDays} night with each day plan with best time to visit in the following JSON format.\n\n{\n  travelPlan: {\n    location: string;\n    duration: {\n      days: number;\n      nights: number;\n    };\n    languageSpoken: string;\n    flight: {\n      airline: string;\n      details: string;\n      price: string;\n      bookingUrl: string;\n    };\n    hotel: {\n      name: string;\n      location: string;\n      price: string;\n      rating: number;\n      description: string;\n    }[];\n    dayPlan: {\n      day: string;\n      schedule: {\n        time: string;\n        location: string;\n        details: string;\n        activity: string;\n        ticketPricing: string;\n        timeToTravel: string;\n      }[];\n    }[];\n    bestTimeToVisit: {\n      month: string;\n      weather: string;\n      temperature: string;\n      description: string;\n    }[];\n    bestLocalFood: {\n      name: string;\n      price: string;\n      rating: number;\n      description: string;\n    }[];\n  };\n};'