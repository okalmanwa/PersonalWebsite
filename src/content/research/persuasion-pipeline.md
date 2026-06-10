---
title: 'Persuasion Strategy Classification at News Scale'
lab: 'Social Dynamics Lab'
dates: 'Feb 2026 – Present'
status: 'Ongoing'
abstract: 'Pipelines ingesting 2M+ political news articles across media domains to classify persuasion strategies, powered by an open-source GDELT scraper built to survive the open web.'
methods: ['NLP', 'LLM fine-tuning', 'Classification', 'Data engineering']
stack: ['Python', 'GDELT', 'LLM evaluation']
order: 2
featured: true
diagramCaption: 'FIG. 1 · The pipeline: GDELT event streams → concurrent scraper with resumable progress → content validation and cleaning → LLM fine-tuning and evaluation → persuasion strategy taxonomy.'
---

## The question

When political media tries to persuade, *how* does it do it? Fear appeals, authority citations, in-group framing, statistical anchoring: persuasion strategies are well-theorized but rarely measured at the scale modern media operates. We want a map of narrative framing and social influence across the media landscape, built from the text itself.

## The system

The corpus is 2M+ political news articles spanning media domains, sourced through GDELT's global event stream. Articles flow through cleaning and validation into LLM fine-tuning and evaluation pipelines that classify the persuasion strategies at work in each piece.

## What I built

Scale is the obstacle: 2M articles means 2M chances for the open web to fail you. I authored the lab's open-source GDELT scraper with the failure modes designed in:

- Concurrent jobs that saturate bandwidth without tripping rate limits.
- Resumable progress: a run that dies at article 1,400,000 restarts there, not at zero.
- Retry logic with backoff for the transient failures that are guaranteed at this scale.
- Content validation that catches paywalls, soft 404s, and boilerplate masquerading as articles before they poison the training data.

Downstream, the corpus feeds fine-tuning and evaluation of LLM classifiers over a persuasion-strategy taxonomy.

## What we're learning

Strategy distributions differ measurably across media domains; the fingerprints of editorial stance show up in *how* outlets persuade, not just what they cover. The scraper is open source and in use beyond the original project.
