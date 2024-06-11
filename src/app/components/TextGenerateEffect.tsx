"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Many developers can solve technical challenges, but understanding the business problem is key. A developer who aligns technical solutions with business needs is indispensable, driving growth and profitability. This ability to translate business requirements into impactful solutions makes them a valuable asset to any company.`;

export function TextGenerateEffectComponent() {
  return <TextGenerateEffect words={words} />;
}
