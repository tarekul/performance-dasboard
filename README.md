React Performance Dashboard (Demo)

This project is a React-based personal performance dashboard designed to help a user visualize and understand the factors driving their daily productivity and well-being.

It serves as a single-page interface to consolidate key metrics, identify personal performance "boosters" and "drainers," and provide a clear, actionable plan for improvement. This repository contains a demo version that uses a hardcoded JSON dataset for a sample user (U022).

Key Features

Header & Summary Stats: At-a-glance view of the user ID, days logged, and key averages (Avg. Productivity, Mood, Sleep, and Stress).

Top Recommendation Card: A prominent, eye-catching card that highlights the single factor with the highest potential impact on the user's performance.

Boosters & Drainers: Two distinct sections that list the top 3 factors with the strongest positive (Boosters) and negative (Drainers) correlations to productivity.

Time Series Visualization: A responsive line chart (built with recharts) that plots the user's Mood and Productivity scores over time, making it easy to spot trends.

Personalized Action Plan: A 3-priority action plan derived from the data, providing specific daily tasks to help the user act on the insights.

Tech Stack

React (Functional Components & Hooks)

Recharts (for data visualization)

Plain CSS / Inline Styles (for component-scoped styling)
