"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Calendar, MapPin, Users } from "lucide-react"

export default function Events() {
  const [filter, setFilter] = useState("All")

  const events = [
    {
      id: 1,
      title: "React Advanced Patterns",
      type: "Workshop",
      date: "2024-12-15",
      time: "6:00 PM",
      attendees: 45,
      location: "Tech Hub, Bangalore",
    },
    {
      id: 2,
      title: "Web3 & Blockchain Meetup",
      type: "Meetup",
      date: "2024-12-22",
      time: "5:30 PM",
      attendees: 67,
      location: "Innovation Center, Bangalore",
    },
    {
      id: 3,
      title: "AI/ML Hackathon",
      type: "Hackathon",
      date: "2024-12-28",
      time: "9:00 AM",
      attendees: 120,
      location: "UTC Hub, Bangalore",
    },
    {
      id: 4,
      title: "DevOps Best Practices Webinar",
      type: "Webinar",
      date: "2025-01-05",
      time: "7:00 PM",
      attendees: 200,
      location: "Online",
    },
    {
      id: 5,
      title: "UI/UX Design Workshop",
      type: "Workshop",
      date: "2025-01-12",
      time: "6:00 PM",
      attendees: 38,
      location: "Design Studio, Bangalore",
    },
    {
      id: 6,
      title: "Cloud Architecture Meetup",
      type: "Meetup",
      date: "2025-01-19",
      time: "5:30 PM",
      attendees: 55,
      location: "Tech Hub, Bangalore",
    },
  ]

  const types = ["All", "Workshop", "Meetup", "Hackathon", "Webinar"]
  const filteredEvents = filter === "All" ? events : events.filter((e) => e.type === filter)

  return (
    <>
      <Navbar />
      <main>
        {/* Events Hero */}
        <section className="min-h-96 bg-gradient-to-br from-secondary to-background py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Upcoming Events</h1>
            <p className="text-xl text-foreground/70">Join us for workshops, meetups, and networking opportunities</p>
          </div>
        </section>

        {/* Events */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            {/* Filter */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-6 py-2 rounded-lg transition-colors ${
                    filter === type ? "bg-primary text-primary-foreground" : "glass text-foreground hover:text-primary"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div key={event.id} className="glass p-6 rounded-xl hover:border-primary/50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold flex-1">{event.title}</h3>
                    <span className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full">{event.type}</span>
                  </div>
                  <div className="space-y-3 text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      <span>
                        {new Date(event.date).toLocaleDateString()} at {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-primary" />
                      <span>{event.attendees} registered</span>
                    </div>
                  </div>
                  <button className="mt-6 btn-outline w-full">Register Now</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
