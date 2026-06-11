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

## Setup

Political media persuades — with fear appeals, authority citations, in-group framing, statistical anchoring. The theory on these strategies is old and rich; what's missing is measurement at the scale media actually operates. The project: classify the persuasion strategies in political news articles, across many outlets, from the text itself, using fine-tuned LLM classifiers.

Which means someone first has to get the articles.

## Scraper

That was my job, and the honest version is that the open web fights back. Sites go down, rate-limit you, serve paywalls, or hand you a cookie banner where the article should be. At corpus scale, every one of those failures is guaranteed to happen, repeatedly. So I wrote the lab's GDELT scraper with the failure modes designed in rather than patched on:

- concurrent jobs that keep bandwidth saturated without tripping rate limits
- resumable progress — a run that dies at article 1,400,000 restarts there, not at zero
- retry logic with backoff for everything transient
- content validation that catches paywalls, soft 404s, and boilerplate pretending to be articles before they poison the training data

The clean text feeds fine-tuning and evaluation of the classifiers downstream.

## What came out of it

Outlets differ not just in what they cover but in *how* they persuade — strategy distributions vary measurably across domains. The scraper is open source and has outlived the project; it's in use beyond the original study.
