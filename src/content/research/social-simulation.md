---
title: 'AI Social Simulation: LLM Agents in a Virtual World'
lab: 'Social Dynamics Lab'
dates: 'Feb 2026 – Present'
status: 'Ongoing'
abstract: 'A multi-agent LLM simulation inspired by the Stanford Prison Experiment. Autonomous agents inhabit a virtual world, form relationships, and interact in real time, and we audit every word they say.'
methods: ['Multi-agent simulation', 'LLM evaluation', 'Log auditing']
stack: ['React', 'TypeScript', 'Phaser 3', 'OpenRouter']
order: 1
featured: true
diagramCaption: 'FIG. 1 · System architecture: agents act in a Phaser 3 world; every conversation and internal message trace flows into a regex + LLM audit pipeline that checks game-state consistency.'
---

## The question

Classic social psychology experiments, the Stanford Prison Experiment chief among them, are too ethically fraught to rerun on people. But what happens when the participants are LLM agents? Do role assignment, power asymmetry, and group identity produce the same dynamics in silicon that Zimbardo observed in a Stanford basement? And can we trust what the agents report about themselves?

## The system

The simulation is a real-time virtual world built in Phaser 3, with React and TypeScript around it and OpenRouter serving the models. Autonomous agents wander the world, encounter each other, form relationships, and hold conversations, each agent maintaining its own memory and internal message traces alongside the dialogue it produces.

That duality is the interesting part: every agent generates both *what it says* and *what it's thinking*, which means the simulation produces a complete, inspectable record of social behavior, something no human-subjects study can offer.

## What I built

My work centers on whether the simulation can be believed. LLM agents drift: they reference events that never happened, contradict the game state, or quietly break character. So I built the audit layer:

- Regex pipelines that sweep agent conversation logs for structural violations: impossible locations, phantom items, timeline breaks.
- LLM-as-judge pipelines that read internal message traces and flag semantic inconsistencies a regex can't see.
- Game-state consistency checks that reconcile what agents claim against what the world engine recorded.

## What we're learning

Auditing agents turns out to be a research problem in its own right. The gap between an agent's internal trace and its outward behavior is measurable, and it's exactly where questions about persuasion, conformity, and role-playing fidelity live. The audit pipelines now run as standard instrumentation across the lab's simulation experiments.
