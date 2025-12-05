"use client";

export default function CurrentDate() {
  return <>{new Date().toLocaleDateString()}</>;
}
