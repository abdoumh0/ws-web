"use client"
import { Button } from "@/components/ui/button";
import React from "react";
// import Controls from "@/components/Controls";

export default function Test() {
  return <div>
    <h1>Test</h1>
    <Button variant="outline" onClick={async () => {
        const res = await fetch("http://localhost:8080", {credentials: "include"})
        const data = await res.json()
        console.log(data)
    }}>test endpoint</Button>
  </div>
//   <Controls />;
}