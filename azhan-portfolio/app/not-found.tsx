"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-center text-white">
      <div className="max-w-md mx-auto space-y-6 glass-panel p-8 rounded-3xl border border-white/10">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-indigo-400" />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">404</h1>
          <h2 className="text-xl font-bold text-slate-200">
            Page Not Found • پەڕەکە نەدۆزرایەوە
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            The requested page does not exist. Please return to the homepage.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return Home • گەڕانەوە بۆ سەرەتا</span>
        </Link>
      </div>
    </div>
  );
}
