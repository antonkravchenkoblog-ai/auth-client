"use client";

import {Button} from "@/components/ui";
import {ArrowUpRight} from "lucide-react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Implementation Help", "App development", "Direct Support"];

const RotatingText = () => {
	const [index, setIndex] = useState(0);
	
	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % words.length);
		}, 2800);
		return () => clearInterval(interval);
	}, []);
	
	return (
		<span className="relative ml-1.5 inline-flex h-[1.4em] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
	        key={words[index]}
	        initial={{ y: 20, opacity: 0, rotateX: -90 }}
	        animate={{ y: 0, opacity: 1, rotateX: 0 }}
	        exit={{ y: -20, opacity: 0, rotateX: 90 }}
	        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
	        className="whitespace-nowrap font-semibold text-red-600 dark:text-red-400"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
	);
};

export default function ActionButtons() {
	return (
		<div className="fixed inset-x-3 bottom-4 z-50 mx-auto flex w-auto max-w-[560px] flex-col items-stretch gap-2 rounded-2xl border border-red-100/20 bg-background/70 p-2 backdrop-blur-xl shadow-2xl sm:inset-x-auto sm:bottom-6 sm:left-1/2 sm:-translate-x-1/2 sm:flex-row sm:items-center sm:gap-4 sm:p-1.5">
			<Link href="https://github.com/kravchenko-anton/authentication" passHref>
				<Button
					variant="outline"
					className="h-10 w-full rounded-xl px-5 text-muted-foreground transition-all duration-300 hover:bg-[#303030] sm:h-9 sm:w-auto"
				>
					Download code
				</Button>
			</Link>
			<Link href={'https://buymeacoffee.com/toshacancode'}>
			<Button
				variant="outline"
				className="
          group relative h-10 w-full overflow-hidden rounded-xl
          border-red-200 bg-red-50/50 px-6
          dark:border-red-900/30 dark:bg-red-950/20
          shadow-[0_8px_16px_-6px_rgba(220,38,38,0.15)]
          transition-all duration-300
          hover:border-red-400 hover:bg-red-100/60 hover:shadow-[0_12px_24px_-8px_rgba(220,38,38,0.3)]
          active:scale-[0.98]
          sm:h-9 sm:min-w-[200px]
        "
			>
				<div className="relative z-10 flex items-center justify-center text-sm tracking-tight text-slate-800 dark:text-red-50">
					<RotatingText />
					<ArrowUpRight className="ml-2 h-3.5 w-3.5 text-red-500/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-red-600" />
				</div>
				
				<div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
			</Button>
			</Link>
			
		
		</div>
	);
}
