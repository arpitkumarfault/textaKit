// src/components/features/ToolInterface.tsx
"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui";
interface ToolInterfaceProps {
  title: string;
  description?: string;
  toolComponent: React.ReactNode;    // ← This was missing!
  stats?: { label: string; value: string | number }[];
  actions?: React.ReactNode;
}

export default function ToolInterface({
  title,
  description,
  toolComponent,
  stats,
  actions,
}: ToolInterfaceProps) {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">{title}</CardTitle>
          {description && (
            <p className="text-muted-foreground mt-2">{description}</p>
          )}
        </CardHeader>
        <CardContent>
          <div className="mb-8">{toolComponent}</div>

          {stats && stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-muted/50 rounded-xl">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {actions && <div className="flex flex-wrap gap-3 mt-6">{actions}</div>}
        </CardContent>
      </Card>
    </div>
  );
}