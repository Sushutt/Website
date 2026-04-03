---
layout: post
title:  "What is left for the release of GSP v0.2"
date:   2026-04-02 00:00:00 -0800
categories: news
---
Following the release of a stupid little trailer this April Fools, I thought it would be nice to ramble on about the things I have left to do.

# New Features:
All MAJOR features have already been implemented. That leaves some smaller QOL features to implement. Here is a list:
* Ability to return to colony view
* Ability to launch multiple craft
* Information panels in the map view
* A way to quit to the main menu

# Fixes
Some systems have been done too poorly, and may need to be rewritten. That includes:
* The entire save system - Mostly just cleaning
* Orbital Mechanics code - While the code for calculating orbits is mostly fine, the way I glued everything together leaves a lot to be desired. I intend to rewrite my orbit solver to be much more stable and flexible.
* The planet system - Overall just too messy and tangled and prone to crapping the bed. Config parsing is also overly complicated.
* Building system - Just have to make it more flexible. It just sucks right now, like all the others.
