"use client"

import React from "react"
import { motion } from "framer-motion"
import { Zap, Sparkles, Dna, ArrowRight } from "lucide-react"

const goals = [
  {
    id: "energy",
    tag: "Energy",
    icon: Zap,
    title: "Eliminate Brain Fog",
    subtitle: "Restore mental clarity & all-day energy",
    gradient:
      "linear-gradient(135deg, #facc15 0%, #f59e0b 40%, #f97316 100%)",
  },
  {
    id: "glow",
    tag: "Glow",
    icon: Sparkles,
    title: "Skin Glow & Detox",
    subtitle: "Radiant complexion from the inside out",
    gradient:
      "linear-gradient(135deg, #fb7185 0%, #ec4899 40%, #db2777 100%)",
  },
  {
    id: "all",
    tag: "All",
    icon: Dna,
    title: "Total Cellular Renewal",
    subtitle: "The complete longevity transformation",
    gradient:
      "linear-gradient(135deg, #34d399 0%, #10b981 40%, #059669 100%)",
  }
]

export default function GoalScreen({ onSelect }) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#040B1A] px-6">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
          What's your{" "}
          <span className="font-semibold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            primary goal
          </span>
          ?
        </h1>
        <p className="text-slate-400 text-lg">
          Select the outcome that matters most to you right now
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-10 w-full max-w-xl">
        {goals.map((goal, index) => (
          <motion.div
            key={goal.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            {/* Outer glow */}
            <div
              className="absolute -inset-3 rounded-full opacity-60 blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-2xl"
              style={{ background: goal.gradient }}
            />

            {/* Inner glow */}
            <div
              className="absolute -inset-1.5 rounded-full opacity-40 blur-md"
              style={{ background: goal.gradient }}
            />

            {/* Button */}
            <button
              onClick={() => onSelect?.(goal.tag)}
              className="relative flex w-full items-center justify-between rounded-full px-8 py-6 text-white font-semibold text-lg tracking-wide transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: goal.gradient }}
            >
              <div className="flex items-center gap-4">
                <goal.icon className="h-6 w-6" />
                <div className="text-left">
                  <div>{goal.title}</div>
                  <div className="text-sm font-normal text-white/80">
                    {goal.subtitle}
                  </div>
                </div>
              </div>

              <ArrowRight className="h-5 w-5 opacity-80" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
