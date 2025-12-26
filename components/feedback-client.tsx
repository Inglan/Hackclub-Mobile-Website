// filepath: components/feedback-client.tsx
"use client";
import { Feedback } from "./feedback";
import type { Feedback as FeedbackType, ActionResponse } from './feedback';

export function FeedbackClient() {
  return (
    <Feedback
    />
  );
}

// If you want to handle feedback submission, do it inside the Feedback component or via context/hooks.