"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Translating business needs into impactful technical solutions that drive growth and profitability.`;

export function TextGenerateEffectComponent() {
  return <TextGenerateEffect words={words} />;
}
