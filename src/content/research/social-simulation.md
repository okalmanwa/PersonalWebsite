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

<style>
  .newspaper-open {
    margin-bottom: var(--space-6);
    padding-bottom: var(--space-5);
    border-bottom: 1px solid var(--hairline);
  }

  .newspaper-open p {
    margin-top: 0;
    margin-bottom: var(--space-4);
  }

  .newspaper-open p.dropcap {
    text-wrap: pretty;
  }

  .newspaper-open .dropcap-letter {
    float: left;
    font-family: var(--font-display);
    font-size: 2.45em;
    line-height: 0.84;
    font-weight: 400;
    color: var(--ink);
    padding: 0.02em 0.6rem 0 0;
    margin: 0.06em 0.45rem 0 0;
    border-right: 1px solid var(--hairline);
  }

  .newspaper-open p:last-child {
    margin-bottom: 0;
  }
</style>

<div class="newspaper-open">

<p class="dropcap"><span class="dropcap-letter" aria-hidden="true">C</span>lassic social psychology experiments, the <a href="https://en.wikipedia.org/wiki/Stanford_prison_experiment">Stanford Prison Experiment</a> chief among them, are too ethically fraught to rerun on people. But what happens when the participants are LLM agents? Do role assignment, power asymmetry, and group identity produce the same dynamics in LLM agents that Zimbardo observed in people? And can we trust what the agents report about themselves?</p>

<p>The simulation is a real-time virtual world built in Phaser 3, with React and TypeScript around it and OpenRouter serving the models. Autonomous agents wander the world, encounter each other, form relationships, and hold conversations, each agent maintaining its own memory and internal message traces alongside the dialogue it produces.</p>

<p>Every agent generates both *what it says* and *what it's thinking*, so the simulation produces a complete, inspectable record of social behavior.</p>

</div>

## What I do

- Regex sweeps over conversation logs for structural violations: impossible locations, phantom items, timeline breaks.
- LLM-as-judge passes over the internal traces, for the semantic inconsistencies a regex can't see.
- Consistency checks that reconcile what an agent claims against what the world engine actually recorded.
