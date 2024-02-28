---
date: '2024-01-23'
layout: layouts/base.njk
tags:
  - projects
  - arduino
  - esp32
title: OpenPowerWheels
---

# {{ title }}
_Created on {{ page.date | asPostDate }}_

#### GitHub Source <a href="https://github.com/farrantch/openpowerwheels" target="_blank" style="text-decoration:none">&#11016;</a>

&nbsp;
## Overview
Many of you are probably familiar with the time-honored parent tradition of modding your kid's powerwheel cars. In the world of powerwheels, diversity in configurations are as varied as the itelligence of those who tinker with them.


&nbsp;
## Room for Improvement
One of the primary issues I've observed is the lack of standardization and interoperability between different types of setups. Each of these choices on their own can significantly change the internal circuitry:

- Motors: Brushed vs. Brushless
- Pedals: On/Off vs. Hall Effect vs. Potentiometer
- Remote Controlled: RC vs. Game Controller vs. None
- Speed Governor?

Another aspect that goes overlooked is the evolution of a powerwheel. Ideally, a powerwheel should grow with the child, evolving from a simple, safe setup suitable for a toddler to a more complex and thrilling ride for an older child. Unfortunately, most current setups fall short in this regard. The transition usually requires swapping out significant components, like the entire drivetrain or controller, which is neither cost-effective nor convenient. Integrating parts from different systems or making modifications often turns into a Herculean task.

What if you could easily mix and match components according to your needs, or switch between remote and manual control without overhauling the entire system?


&nbsp;
## Introducing: OpenPowerWheels
OpenPowerWheels is an open-source microcontroller project designed to address the limitations of traditional powerwheel setups. It features a flexible design for easy interchangeability of components, including various motor types and control systems. Focused on technical adaptability, the project enables the powerwheel to be scaled and customized to suit different age groups and skill levels, providing a practical solution for progressive learning and technical development in ride-on toys.

&nbsp;