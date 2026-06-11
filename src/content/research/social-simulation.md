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
diagramCaption: 'FIG. 1 · System architecture: agents act in a Phaser 3 world; every conversation and internal message trace flows into a regex + LLM audit pipeline that checks game-state consistency.'
---

## Setup

You can't ethically rerun the Stanford Prison Experiment on people. The lab is running a study inspired by it on LLM agents instead: a real-time virtual world built in Phaser 3, with React and TypeScript around it and OpenRouter serving the models. Agents wander around, meet each other, form relationships, and talk. Each one keeps its own memory and an internal monologue alongside whatever it says out loud — which means, unlike any human study, every thought in the experiment is on the record.

## My job: catching the agents lying

All of that is only useful if you can trust the logs, and by default you can't. Agents drift. They mention events that never happened, contradict the game state, or quietly slip out of character. I build and run the audit layer that catches it:

- regex sweeps over conversation logs for structural violations — impossible locations, phantom items, timeline breaks
- LLM-as-judge passes over the internal traces, for the semantic inconsistencies a regex can't see
- consistency checks that reconcile what an agent claims against what the world engine actually recorded

I also debug the simulation itself — when an agent does something strange, someone has to trace whether that's emergent behavior or a bug, and that someone is usually me.

## Where it's going

The gap between what an agent thinks and what it does turns out to be measurable, which matters for the persuasion and conformity questions the lab actually cares about. The audit pipelines now run as standard instrumentation across the lab's simulation experiments.
