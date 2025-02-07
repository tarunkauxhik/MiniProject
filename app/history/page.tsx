"use client";

import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// Mock data for demonstration
const predictionHistory = [
  {
    id: 1,
    date: "2024-03-20",
    predictedGrade: "A",
    confidence: 85,
    actualGrade: "A-",
  },
  {
    id: 2,
    date: "2024-03-15",
    predictedGrade: "B+",
    confidence: 78,
    actualGrade: "B+",
  },
  {
    id: 3,
    date: "2024-03-10",
    predictedGrade: "A-",
    confidence: 92,
    actualGrade: "A",
  },
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted p-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-2xl font-bold mb-6">Prediction History</h1>

        <div className="space-y-4">
          {predictionHistory.map((prediction) => (
            <Card key={prediction.id} className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {new Date(prediction.date).toLocaleDateString()}
                  </p>
                  <h3 className="text-lg font-semibold mt-1">
                    Predicted Grade: {prediction.predictedGrade}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Confidence: {prediction.confidence}%
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Actual Grade</p>
                  <p className="text-lg font-semibold">{prediction.actualGrade}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}