"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Users, Target, Zap, Trophy } from "lucide-react"

export default function About() {
  const team = [
    { name: "Rajesh Kumar", role: "Founder & Lead", icon: "R" },
    { name: "Priya Singh", role: "Community Manager", icon: "P" },
    { name: "Amit Patel", role: "Events Coordinator", icon: "A" },
    { name: "Neha Gupta", role: "Content Lead", icon: "N" },
  ]

  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "We believe in the power of collective growth",
      color: "from-primary to-secondary",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "Pushing boundaries and embracing new technologies",
      color: "from-accent to-primary",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Excellence",
      description: "Delivering quality content and experiences",
      color: "from-secondary to-accent",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Growth",
      description: "Continuous learning and professional development",
      color: "from-primary to-accent",
    },
  ]

  return (
    <>
      <Navbar />
      <main>
        <section className="min-h-96 bg-gradient-to-r from-primary/10 via-card to-secondary/10 py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up-fade">About UTC</h1>
            <p
              className="text-xl text-foreground/70 max-w-2xl leading-relaxed animate-slide-up-fade"
              style={{ animationDelay: "100ms" }}
            >
              United Tech Community is a vibrant network of developers, designers, and tech enthusiasts in Bangalore
              dedicated to fostering innovation and collaboration.
            </p>
          </div>
        </section>

        <section className="py-24 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-material">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                  Our Mission
                </h2>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  To build a thriving community where technology professionals can learn, collaborate, and innovate
                  together. We believe in the power of collective growth and shared knowledge.
                </p>
              </div>
              <div className="card-material">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-4">
                  Our Vision
                </h2>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  To establish UTC as the leading tech community platform in Bangalore, fostering an ecosystem of
                  continuous learning, mentorship, and technological advancement.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-card">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-slide-up-fade">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="card-material interactive-card group"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${value.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300 text-white`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-foreground/70 group-hover:text-foreground/80 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-slide-up-fade">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="card-material interactive-card group text-center"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary p-0.5">
                    <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                      {member.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium">{member.role}</p>
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
