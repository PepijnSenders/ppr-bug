import SlowSuspense from "../components/SlowSuspense";
import FastSuspense from "../components/FastSuspense";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Suspense fallback={<h1>Fast loading...</h1>}>
      <FastSuspense />
    </Suspense>
      <Suspense fallback={<h1>Slow loading...</h1>}>
        <SlowSuspense />
      </Suspense>
    </main>
  );
}
