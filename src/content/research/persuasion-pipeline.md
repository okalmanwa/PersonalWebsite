---
title: 'Persuasion Strategy Classification at News Scale'
lab: 'Social Dynamics Lab'
dates: 'Feb – Jun 2026'
status: 'Concluded'
abstract: 'Large-scale ingestion and preprocessing pipelines for classifying persuasion strategies in political news, powered by an open-source GDELT scraper built to survive the open web.'
methods: ['NLP', 'LLM fine-tuning', 'Classification', 'Data engineering']
stack: ['Python', 'GDELT', 'LLM evaluation']
order: 2
featured: true
diagramCaption: 'FIG. 1 · The pipeline: GDELT event streams → concurrent scraper with resumable progress → content validation and cleaning → LLM fine-tuning and evaluation → persuasion strategy taxonomy.'
---

## The question

When political media tries to persuade, *how* does it do it? Persuasion strategies such as fear appeals, authority citations, in-group framing, and statistical anchoring are well theorized but rarely measured at the scale modern media operates. We want a map of narrative framing and social influence across the media landscape, built from the text itself.

## The system

The corpus is political news articles spanning many media domains, sourced through GDELT's global event stream. Articles flow through cleaning and validation into LLM fine-tuning and evaluation pipelines that classify the persuasion strategies at work in each piece.

## What I built

The main engineering obstacle is scale, because at corpus size the open web fails constantly. I authored the lab's open-source GDELT scraper with the failure modes designed in:

- Concurrent jobs that saturate bandwidth without tripping rate limits.
- Resumable progress, so a run that dies at article 1,400,000 restarts there instead of at zero.
- Retry logic with backoff for the transient failures that are guaranteed at this scale.
- Content validation that catches paywalls, soft 404s, and boilerplate masquerading as articles before they contaminate the training data.

Downstream, the corpus feeds fine-tuning and evaluation of LLM classifiers over a persuasion-strategy taxonomy.

## What we're learning

Strategy distributions differ measurably across media domains. Outlets differ not just in what they cover but in how they persuade. The scraper is open source and in use beyond the original project.
