"use client";

import React from "react";
import { motion } from "framer-motion";

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="container py-16 md:py-20"
    >
      <h2 className="section-title">{title}</h2>
      <div className="mt-8">{children}</div>
    </motion.section>
  );
}
