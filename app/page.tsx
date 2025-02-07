"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, LineChart, History, ArrowRight, Brain, Sparkles, Trophy } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 py-16 relative">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        {/* Hero Section */}
        <div className="relative text-center mb-20 pt-10">
          <div className="inline-flex items-center justify-center p-2 px-4 bg-primary/10 rounded-full mb-8 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm font-medium">Powered by Advanced AI</span>
          </div>
          
          <h1 className="text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Student Performance
            <br />
            Predictor
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Transform education through AI-driven insights. Our advanced algorithms analyze student data 
            to provide accurate performance predictions and personalized recommendations.
          </p>
          
          <div className="flex justify-center gap-4 mb-16">
            <Link href="/predict">
              <Button size="lg" className="group text-lg">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="text-lg">
                View Demo
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center gap-8 text-sm text-muted-foreground mb-20">
            <div className="flex items-center">
              <Trophy className="w-4 h-4 mr-2" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              <span>AI-Powered Analysis</span>
            </div>
            <div className="flex items-center">
              <GraduationCap className="w-4 h-4 mr-2" />
              <span>Used by Top Universities</span>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          <Card className="group p-8 hover:shadow-2xl transition-all duration-300 border border-primary/10 hover:border-primary/30 backdrop-blur-sm bg-background/50">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-primary/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Predict Performance</h2>
              <p className="text-muted-foreground leading-relaxed">
                Get accurate predictions based on comprehensive student data analysis and historical performance patterns.
              </p>
              <Link href="/predict" className="w-full mt-4">
                <Button className="w-full group bg-primary/90 hover:bg-primary">
                  Start Prediction
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </Card>

          <Card className="group p-8 hover:shadow-2xl transition-all duration-300 border border-primary/10 hover:border-primary/30 backdrop-blur-sm bg-background/50">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-primary/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                <History className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">View History</h2>
              <p className="text-muted-foreground leading-relaxed">
                Track performance evolution with detailed historical data and prediction accuracy insights.
              </p>
              <Link href="/history" className="w-full mt-4">
                <Button className="w-full group" variant="outline">
                  View History
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </Card>

          <Card className="group p-8 hover:shadow-2xl transition-all duration-300 border border-primary/10 hover:border-primary/30 backdrop-blur-sm bg-background/50">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-primary/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                <LineChart className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Analytics Dashboard</h2>
              <p className="text-muted-foreground leading-relaxed">
                Access comprehensive analytics with interactive visualizations and actionable insights.
              </p>
              <Link href="/dashboard" className="w-full mt-4">
                <Button className="w-full group" variant="outline">
                  View Dashboard
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
          {[
            { value: "98%", label: "Prediction Accuracy" },
            { value: "10k+", label: "Students Analyzed" },
            { value: "50+", label: "Institutions" },
            { value: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="relative group cursor-default">
              <div className="absolute inset-0 bg-primary/5 rounded-lg blur-lg group-hover:blur-xl transition-all" />
              <div className="relative text-center p-6 rounded-lg border border-primary/10 backdrop-blur-sm">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}