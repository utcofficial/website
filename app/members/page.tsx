"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Members() {
  const members = [
    { name: "Rajesh Kumar", role: "Full Stack Developer", skills: ["React", "Node.js", "MongoDB"] },
    { name: "Priya Singh", role: "Product Manager", skills: ["Product", "Strategy", "Analytics"] },
    { name: "Amit Patel", role: "DevOps Engineer", skills: ["AWS", "Docker", "Kubernetes"] },
    { name: "Neha Gupta", role: "UI/UX Designer", skills: ["Figma", "Design Systems", "Accessibility"] },
    { name: "Vikram Reddy", role: "Backend Developer", skills: ["Python", "PostgreSQL", "FastAPI"] },
    { name: "Anjali Sharma", role: "Data Scientist", skills: ["ML", "Python", "Analytics"] },
    { name: "Rohan Verma", role: "Frontend Developer", skills: ["Vue.js", "TypeScript", "Next.js"] },
    { name: "Divya Nair", role: "QA Engineer", skills: ["Automation", "Testing", "CI/CD"] },
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* Members Hero */}
        <section className="min-h-96 bg-gradient-to-br from-secondary to-background py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Members</h1>
            <p className="text-xl text-foreground/70">Meet the talented professionals in our community</p>
          </div>
        </section>

        {/* Members Grid */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {members.map((member, idx) => (
                <div key={idx} className="glass p-6 rounded-xl hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-4">{member.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
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
