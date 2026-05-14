# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website. Currently a Vite + TypeScript scaffold that hasn't been built out yet. The PRD and tech design plan Vue 3 + Tailwind CSS, but those dependencies aren't installed yet.

## Commands

- `npm run dev` — Start Vite dev server
- `npm run build` — Type-check with `tsc` then build with Vite
- `npm run preview` — Preview the production build locally

## Planned Architecture (from TECH_DESIGN.md)

The site should eventually have these sections: Hero, About, Projects, Contact, Footer. Data (projects, skills) lives in TypeScript files. The design spec calls for a dark theme (`#0a0a0a` background, `#ffffff` text), gradient accent colors, scroll animations, and mobile responsiveness.

## Current State

- `src/main.ts` is Vite starter boilerplate (vanilla TS, not Vue)
- `src/style.css` is Vite starter CSS
- Vue 3, Tailwind CSS, and Vue Router are listed in the tech design but not yet installed
- The project uses TypeScript ~6.0 with `verbatimModuleSyntax` and `erasableSyntaxOnly` — no enums, no runtime emit
- No test framework configured
- No linting configured (beyond tsc type-checking)

## Key Design Documents

- `PRD.md` — Product requirements (sections, features, design style)
- `TECH_DESIGN.md` — Technical architecture plan (planned component structure, data flow)
- `AGENTS.md` — Development conventions (functional components + hooks, Tailwind, reusability, dark theme specifics)
