---
title: 'AI Social Simulation: LLM Agents in a Virtual World'
lab: 'Social Dynamics Lab'
dates: 'Jun 2026 – Present'
status: 'Ongoing'
abstract: 'A multi-agent LLM simulation inspired by the Stanford Prison Experiment. Autonomous agents inhabit a virtual world, form relationships, and interact in real time, and audit pipelines verify what they say against the world state.'
methods: ['Multi-agent simulation', 'LLM evaluation', 'Log auditing']
stack: ['React', 'TypeScript', 'Phaser 3', 'OpenRouter']
order: 1
featured: true
---

## Question

Classic social psychology experiments, the Stanford Prison Experiment chief among them, are too ethically fraught to rerun on people. But what happens when the participants are LLM agents? Do role assignment, power asymmetry, and group identity produce the same dynamics in LLM agents that Zimbardo observed in people? And can we trust what the agents report about themselves?

## System

The simulation is a real-time virtual world built in Phaser 3, with React and TypeScript around it and OpenRouter serving the models. Autonomous agents wander the world, encounter each other, form relationships, and hold conversations, each agent maintaining its own memory and internal message traces alongside the dialogue it produces.

Every agent generates both *what it says* and *what it's thinking*, so the simulation produces a complete, inspectable record of social behavior. No human-subjects study can offer that.

## What I do

- Regex sweeps over conversation logs for structural violations: impossible locations, phantom items, timeline breaks.
- LLM-as-judge passes over the internal traces, for the semantic inconsistencies a regex can't see.
- Consistency checks that reconcile what an agent claims against what the world engine actually recorded.

## Where it's going

The gap between what an agent thinks and what it does turns out to be measurable, which matters for the persuasion and conformity questions the lab actually cares about.
