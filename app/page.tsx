"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Users, Calendar, MessageSquare, Code2 } from "lucide-react"

export default function Home() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community First",
      description: "Join 500+ tech enthusiasts and developers in Bangalore",
      color: "from-primary to-secondary",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Monthly Events",
      description: "Workshops, meetups, and hackathons every month",
      color: "from-accent to-primary",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Latest Tech",
      description: "Learn about cutting-edge technologies and trends",
      color: "from-secondary to-accent",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Networking",
      description: "Connect with like-minded professionals and mentors",
      color: "from-primary to-accent",
    },
  ]

  const stats = [
    { value: "500+", label: "Active Members" },
    { value: "50+", label: "Events Hosted" },
    { value: "2K+", label: "People Impacted" },
  ]

  return (
    <>
      <Navbar />
      <main>
        <section className="min-h-screen bg-gradient-to-br from-background via-card to-background flex items-center justify-center px-4 relative overflow-hidden">
          {/* Background gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6 animate-slide-up-fade">
              <p className="text-primary text-sm font-semibold">Welcome to United Tech Community</p>
            </div>

            <h1
              className="text-6xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up-fade"
              style={{ animationDelay: "100ms" }}
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Build Together
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up-fade"
              style={{ animationDelay: "200ms" }}
            >
              Empowering developers and tech enthusiasts in Bangalore to grow together through knowledge sharing and
              meaningful connections.
            </p>

            <div
              className="flex flex-col md:flex-row gap-4 justify-center animate-slide-up-fade"
              style={{ animationDelay: "300ms" }}
            >
              <Link href="/events" className="btn-primary inline-flex items-center justify-center gap-2">
                Explore Events
                <ArrowRight size={20} />
              </Link>
              <Link href="/contact" className="btn-outline inline-flex items-center justify-center gap-2">
                Get In Touch
                <MessageSquare size={20} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-4 animate-slide-up-fade">Why Join UTC?</h2>
            <p className="text-center text-foreground/60 mb-16 text-lg max-w-2xl mx-auto">
              Experience a thriving community dedicated to growth and innovation
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="card-material interactive-card group cursor-pointer"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300 text-white`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 group-hover:text-foreground/80 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-gradient-to-r from-card to-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center animate-slide-up-fade"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <p className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 animate-pulse-glow">
                    {stat.value}
                  </p>
                  <p className="text-foreground/70 text-lg font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-background">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join?</h2>
            <p className="text-xl text-foreground/70 mb-8">
              Start your journey with United Tech Community today. Connect, learn, and grow with us.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
              Join Our Community
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
