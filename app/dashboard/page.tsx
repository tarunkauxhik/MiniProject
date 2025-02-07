"use client";

import { Card } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Users, Clock, Target } from "lucide-react";
import Link from "next/link";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

// Mock data for demonstration
const performanceData = [
  { month: "Jan", grade: 85 },
  { month: "Feb", grade: 88 },
  { month: "Mar", grade: 82 },
  { month: "Apr", grade: 89 },
  { month: "May", grade: 90 },
  { month: "Jun", grade: 85 },
];

const stats = [
  {
    title: "Average Accuracy",
    value: "87%",
    icon: Target,
    trend: "+2.5%",
  },
  {
    title: "Total Predictions",
    value: "156",
    icon: TrendingUp,
    trend: "+12",
  },
  {
    title: "Active Students",
    value: "45",
    icon: Users,
    trend: "+5",
  },
  {
    title: "Avg. Study Hours",
    value: "25h",
    icon: Clock,
    trend: "+1.2h",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted p-6">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-green-600">{stat.trend}</span>
              </div>
              <h3 className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </h3>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Performance Trend</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="month"
                  padding={{ left: 20, right: 20 }}
                  tick={{ fill: 'currentColor' }}
                />
                <YAxis
                  padding={{ top: 20, bottom: 20 }}
                  tick={{ fill: 'currentColor' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: 'var(--radius)'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="grade"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--primary))' }}
                  activeDot={{ r: 6, fill: 'hsl(var(--primary))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}