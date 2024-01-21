---
date_created: '2023-12-06'
date_updated: '2024-01-20'
description: Trying to walk when you can already run.
layout: layouts/base.njk
tags:
  - architecture
  - blog
  - devops
  - microservices
title: Overengineered Architecture Patterns that Slow Development
---

# {{ title }}
_date created: {{ date_created }}_ \
_last updated: {{ date_updated }}_


&nbsp;
## Introduction
Development speed is one of the most important factors to optimize for when developing software. Speed delivers features. Speed enables flexibility. Speed capitalizes on new opportunities. Speed beats competitors to market. Many other factors, such as maintainability or complexity, are essential - because they directly impact development speed. It's hard to deliver features in a timely manner when the solution is a spider-web.

> _Your goal when developing software should be to keep your solution as simple as possible for as long as possible._

It's a ubiquitous trope in software engineering to over-engineer solutions. Often disguised under the veil of "scalability", "securability", or "maintainability". Don't get me wrong, these attributes are important, but the extent to which these commonly accepted patterns can slow development is often miscalculated.


&nbsp;
## Trying to Walk When You Can Already Run
A common theme to these patterns is breaking things into more manageable chunks - a subject so opinionated that it's almost an art form.

Greenfield software development is an iterative process; you need to walk before you can run. How can you possibly know how to split things up early on? Everything you know about the solution and its requirements will have changed after a year. It's imperative early on to approach the solution in such a way that prioritizes the ability to make sweeping changes across the board.

It's not that these patterns shouldn't ever be used - it's that they're used prematurely or are often times unnecessary. If you cannot manage a solution as a single entity, how exactly will splitting it into more pieces make it easier to manage?

In the consulting world, the desire to split things up is practically a primal survival instinct. Nobody wants to be the one to recommend a simple and boring solution. More splitting up -> more complexity -> more time required -> more $dollar$. Clients also love to hear about the cool new tools everyone is using to craft their solutions.


&nbsp;
## Example 1 - Microservices
It's no secret that there are many strong opinions surrounding microservices. And for good reason - half the planet is convinced it's the only way to develop software! Jokes aside, nowadays, most folks are aware it was mostly a trend and that the benefits were, quite frankly, widely overstated.

Sometimes, I hear about splitting projects into microservices because of team structure - which sounds like a red flag to me.

_Potential controversial opinion incoming...._ A good solution should look similar whether a single person is developing the project or 100 people. Team structure shouldn't dictate the architecture of a solution - quite the opposite, in fact. If you are genuinely considering using microservices due to team structure, consider looking at ways to improve your branching, pull request, and build processes first.

If someone recommends starting a greenfield project with microservices, that person is likely more obsessed with the underlying technology than delivering value. They've probably been developing software in a microservices bubble and forgot what quickly delivering software is supposed to feel like. How do I know? It's happend to me! Similar to the Matrix, it can take a while to "de-program" from that mentality. Are you _actually_ developing features quicker? Or are you just doing more work - so it _feels_ faster?

Venture capitalists have also noticed this trend has a strong tendency to slow down organizations. After three years, a well-known VC organization reviewed the products they had invested in and found a common theme: Those who chose a microservices architecture were still battling fundamental issues with their solution, while the teams that took a more monolithic approach had brought products to market and were cranking out features left and right.
  
&nbsp;
## Example 2 - Too Many IaC Modules
I once worked with a DevSecOps division that mandated all Terraform resources should be modularized. Not just groups of resources. Every single individual resource should have a corresponding module. The reason?

> _"It allows us to define resources once and version them independently." - Boss Man_

Okay, well that doesn't _sound_ unreasonable at face value. I called up a buddy and asked him if he'd ever heard of this pattern.

> _"Yeah, in fact, we often follow the same pattern." - Buddy_

Hmmmm. At this point, I felt like I was taking crazy pills. Why would you re-invent the wheel and modularize a generic resource already tested by someone else upstream? Here is my opinion on why this is usually a bad idea:

A Terraform module is an abstraction. Abstractions are meant to take something complex and simplify it. Individual resources are rarely complex. Sure, they might be part of a more complex solution, but that doesn't make the resource itself complex. An S3 bucket can be configured in an infinite number of ways. If you modularize it, over time, you will end up having as many parameters as the original resource itself.

Hashicorp also tends to think this is usually a bad idea - <a href="https://developer.hashicorp.com/terraform/language/modules/develop#when-to-write-a-module" target="_blank" style="text-decoration:none">[&#11008;]</a>

Disclaimer: It's okay to modularize a resource if configured for a very specific use case.
