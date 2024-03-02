---
date: '2023-12-06'
description: To foster early growth, steer clear of over-engineering.
layout: layouts/base.njk
tags:
  - architecture
  - devops
  - microservices
title: Infrastructure Patterns That Startups Should Avoid
---

# {{ title }}
_Created on {{ page.date | asPostDate }}_

&nbsp;
## Introduction
Development speed is one of the most important factors to optimize for when developing software. This is exceptionally true if you're a startup doing greenfield development. Speed delivers features. Speed enables flexibility. Speed capitalizes on new opportunities. Speed beats competitors to market. Many other factors, such as maintainability or complexity, are essential because they directly impact development speed. It's hard to deliver features in a timely manner when the solution is a spider web.

> _Your goal when developing software should be to keep your solution as simple as possible - for as long as possible._

It's a ubiquitous trope in software engineering to over-engineer solutions. Often disguised under the veil of "scalability", "securability", or "maintainability". Don't get me wrong, these attributes _are_ important, but the extent to which these commonly accepted patterns can slow development is often grostly miscalculated.


&nbsp;
## Unnecessary Complexity
A common theme to these startup anti-patterns is splitting things into more manageable chunks - a subject so opinionated that it's practically art. If you cannot manage a simple solution, how exactly will splitting it into more pieces make it easier?

Greenfield software development is an iterative process; you need to walk before you can run. How can you possibly know how to split things up early on? Almost everything you know about the solution and its requirements will have changed after a year. It's imperative early on to approach the solution in such a way that prioritizes the ability to make quick, sweeping changes across the board.

In the consulting world, the subconscious bias to split things up is a primal survival instinct. Nobody wants to be the one to recommend a simple and boring solution. Splitting things up = more complexity = more time required = more $$$$. It doesn't help that clients love to hear about the shiny new toys that everyone is using.

_*Disclaimer:_ It's not that these patterns should _never_ be used - it's that they're often used prematurely or sometimes completely unnecessary.


&nbsp;
## Example 1 - Microservices
I mean, they sound fun, right?

It's no secret that there are many strong opinions surrounding microservices. Nowadays, many folks are aware they were somewhat of a fad and that the benefits were, quite frankly, overstated.

Microservices can mean different things depending on who you're talking to. I will limit the scope for this example to the API layer, where this pattern is frequently implemented.

If someone recommends starting a greenfield project with microservices, that person is likely more obsessed with the underlying technology than delivering value. They've probably been developing software in a microservices bubble and forgot what quickly delivering software is _supposed_ to feel like. How do I know this? __It's happened to me!__ Like the Matrix, it can take a while to "de-program" from that mentality. Are you _actually_ delivering features quicker? Or are you just doing more work - so it _feels_ faster?

Sometimes, I hear about splitting projects into microservices because of team structure - which sounds like a red flag to me. A good solution should look similar whether a single person is developing the project or 100 people. Team structure shouldn't dictate the architecture of a solution - quite the opposite. If you are genuinely considering using microservices due to team structure, consider looking at ways to improve your branching, pull request, and build processes first.

Some venture capitalists have also noticed that microservices have a strong tendency to slow down organizations. After three years, a well-known VC organization reviewed the products they had invested in and found a common theme: Those who took a microservices approach were still battling fundamental issues with their architecture, while the teams that took a more monolithic approach had brought products to market and were cranking out features left and right.


&nbsp;
## Example 2 - Kubernetes
This suggestion might surprise you since Kubernetes is currently the hottest thing since sliced containers.

A good example for when to use Kubernetes comes from it's source of origin: A team of sysadmins at Google who struggled to manage thousands of different containers across thousands of hosts. Question: _Does this sound like a reasonable use-case for a startup architecture?_

Let's be honest; If you are considering using Kubernetes for your startup, there is a good chance you ignored Example #1. Unless you are working on GCP, Kubernetes brings a bunch of operational overhead that can be more trouble than it's worth. Many teams need dedicated individuals to maintain their clusters.

&nbsp;
## Example 3 - Too Many IaC Modules
I once worked with a DevSecOps division that mandated all Terraform resources should be modularized. Not just groups of resources. Every. single. individual. resource should have a corresponding module. The reasoning? So that they could version and test each module/resource independently. Then, they would usually stack another two layers of modules on top of that! Here are some reasons why this is usually a bad idea:

A Terraform module should be an abstraction. Abstractions are meant to take something complex and simplify it. Individual resources are rarely complex. Sure, they might be a part of a more complex solution, but that doesn't make the resource itself complicated. An S3 bucket can be configured in an infinite number of ways. By modularizing a generic resource, over time, you end up having as many parameters to the module as the original resource itself.

Individual Terraform resources should already be tested and versioned by the resource owner. Having to write more tests and manage more module versions adds significant overhead. Not surprisingly, Hashicorp also tends to think this is usually a bad idea <a href="https://developer.hashicorp.com/terraform/language/modules/develop#when-to-write-a-module" target="_blank" style="text-decoration:none">&#11016;</a>

_*Disclaimer:_ It's okay to modularize a single resource if configured for a very specific use case.