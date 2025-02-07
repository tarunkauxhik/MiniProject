"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useState } from "react";
import { predictPerformance } from "@/lib/api";

const formSchema = z.object({
  age: z.string().min(1, "Age is required"),
  studyHours: z.string().min(1, "Study hours are required"),
  attendance: z.string().min(1, "Attendance percentage is required").max(100, "Attendance cannot exceed 100%"),
  previousGrade: z.string().min(1, "Previous grade is required"),
  studyMethod: z.string().min(1, "Study method is required"),
});

export default function PredictPage() {
  const [prediction, setPrediction] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: "",
      studyHours: "",
      attendance: "",
      previousGrade: "",
      studyMethod: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const result = await predictPerformance(values);
      setPrediction(result);
    } catch (error) {
      console.error("Prediction failed:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted p-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <Card className="p-6">
          <h1 className="text-2xl font-bold mb-6">Predict Student Performance</h1>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter age" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="studyHours"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Weekly Study Hours</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter weekly study hours" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="attendance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Attendance Percentage</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter attendance percentage" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="previousGrade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Previous Grade</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter previous grade" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="studyMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Study Method</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select study method" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="individual">Individual Study</SelectItem>
                        <SelectItem value="group">Group Study</SelectItem>
                        <SelectItem value="mixed">Mixed Approach</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing
                  </>
                ) : (
                  "Get Prediction"
                )}
              </Button>
            </form>
          </Form>

          {prediction && (
            <div className="mt-8 p-6 bg-primary/5 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Prediction Results</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Predicted Grade</p>
                  <p className="text-2xl font-bold">{prediction.predictedGrade}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Confidence Level</p>
                  <p className="text-lg font-semibold">{prediction.confidence}%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Recommendations</p>
                  <ul className="list-disc list-inside space-y-1">
                    {prediction.recommendations.map((rec: string, index: number) => (
                      <li key={index} className="text-sm">{rec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}