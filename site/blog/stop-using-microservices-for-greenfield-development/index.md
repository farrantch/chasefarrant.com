---
date: '2023-12-06'
description: To foster early growth, steer clear of over-engineering.
layout: layouts/base.njk
tags:
  - architecture
  - devops
  - microservices
title: Stop Using Microservices for Greenfield Development
---

# {{ title }}
_Created on {{ page.date | asPostDate }}_


&nbsp;
## Introduction
It's crazy to me that I need to write this article today. In fact, I find I find it more necessary than ever. Every job posting I see lists Kubernetes as a necessary skill and every large consulting firm is prescribing microservices as the magic solution to handle all of the anticipated traffic (that the client will probably never see).

&nbsp;
## Speed Thrills
Development speed is one of the most important factors to optimize for when developing software. This is exceptionally true if you're a startup or doing greenfield development. Speed delivers features. Speed enables flexibility. Speed capitalizes on new opportunities. Speed beats competitors to market. Many other factors, such as maintainability or complexity, are essential because they directly impact development speed. It's hard to deliver features promptly when the solution is a spider web.


&nbsp;
## Complexity Kills
It's a ubiquitous trope in software engineering to over-engineer solutions. Often disguised under the veil of agility, securability, or scalability. Don't get me wrong, these attributes _are_ important, but the extent to which some commonly accepted patterns can slow development is often grossly miscalculated. A common theme to over-engineering is splitting things into more manageable chunks; A subject so opinionated that it's practically art.

<!-- If you're having difficulty managing a simple solution, how exactly will splitting it into more pieces make it easier? -->

Greenfield software development is an iterative process; you need to walk before you can run. How can you possibly know how to split your application up early on? Almost everything you know about the solution and its requirements will have changed after a year. It's imperative early on to approach the solution in such a way that prioritizes the ability to make quick, sweeping changes across the board.

<!-- In the consulting world, the subconscious bias to split things up is a primal survival instinct. Nobody wants to be the one to recommend a simple and boring solution. Splitting things up = more complexity = more time required = more $$$$. It doesn't help that clients love to hear about the shiny new toys that everyone is using. -->

> _A complex system that works is invariably found to have evolved from a simple system that worked. The inverse proposition also appears to be true: A complex system designed from scratch never works and cannot be made to work._

> – John Gall

Your goal when developing software should be to keep your solution as simple as possible. It should only be as complex as necessary, and no more than that.


&nbsp;
## _(Enter Microservices)_

You can't tell me you weren't initially excited to work on your first microservices project 😉. I mean, they sound fun, right?!? 🎉

My 2nd job out of college was for a SaaS company. They were deprecating their legacy desktop app and building out a new microservices platform in the cloud from scratch to replace it. I loved my job and we tried our best to follow the recommended best practices.

However, I was there for 3 years and during that time, they never migrated a single large client over to their new solution. When I left, there were still unresolved fundamental issues with the architecture that left the platform unable to handle any significant load.


&nbsp;
## My Realization
My next job was at a small consulting company. In the first project I was assigned to, the developers decided to use a monolith backend, with a timeline of 6 months to complete the 1st phase.

At the time, I thought they were crazy. &nbsp;_"...who develops software like this anymore?"_

But I was wrong.

They successfully delivered the project on time, met all the requirements, and started onboarding multiple customers. Watching this unfold blew my mind. I knew there were issues with the previous project I worked on, but I hadn't fully realized just how detrimental it was to the business. I had been developing software in a microservices bubble and forgot what quickly delivering value was _supposed_ to feel like. It wasn't an immediate realization either. Similar to The Matrix, it took some time to comprehend and adjust my mentality.

So why did this happen? Why did using microservices significantly slow down development, despite their perceived value?




You know what else is fun? Actually delivering features and providing value.

Microservices often mean different things depending on who you're talking to. Perhaps the one thing everyone can agree on, is that each service should own it's own data. Of course that brings the question, "What is a service?". Let's postpone that discussion for a future post...

For the sake of this article, I'm going to totally cheat and define microservices as "The premature splitting up of services."

<!-- Nowadays, many folks are aware they were somewhat of a fad and that the benefits were, quite frankly, overstated. -->


&nbsp;
## Team Structure
Microservices are an organizational solution to a technical problem. "We have too many people working on this project, that it would be difficult

Sometimes, I hear about splitting projects into microservices because of team structure - which sounds like a red flag to me. A good solution should look similar whether a single person is developing the project or 100 people. Team structure shouldn't dictate the architecture of a solution - quite the opposite. If you are genuinely considering using microservices due to team structure, consider looking at ways to improve your branching, pull request, and build processes first.


&nbsp;
## Kubernetes
Another common technical choice that typically follows the adoption of microservices is opting for Kubernetes to handle container orchestration.

Ironically, to give Kubernetes credit, it's a decent example of what microservices should look like when done correctly. The API is the only service allowed to touch the database. Individual services each own a piece of `

A good example of when to use Kubernetes comes from its source of origin: A team of sysadmins at Google who struggled to manage thousands of different containers across thousands of hosts.

Question: _Does this sound like a reasonable use case for a startup architecture?_

Let's be honest; If you are considering using Kubernetes for your startup, there is a good chance you ignored Example #1. Unless you are working on GCP, Kubernetes brings a bunch of operational overhead that can be more trouble than it's worth. Many teams need dedicated individuals to maintain their clusters.



I cannot count how many times I've joined a brand new from scratch project only to be informed that the solution will be leveraging microservices. This is especially common for projects led by consulting companies.

...





This is such a broad and hot topic that I don't even know where to begin.

I've seen this happen so many times, and it still happens today. I join a greenfield project with a bunch of 

## False Assumptions

Let's take a closer look at some of the benefits commonly used to justify microservices.

### 1. Scalability

This one is easily the worst and most common offender.

_The theory_ is that since each service is independent, this allows each service to scale separately from the others. Thus, this somehow makes the application as a whole more scalable...?

First, let's ignore the fact that 90% of applications that claim to need true scalability - don't.

Second, 

Perhaps the best rebuttal to this claim is simply a list of high-traffic websites whose primary tech stack centers around a monolith.

- StackOverflow <a href="https://twitter.com/sahnlam/status/1629713954225405952" target="_blank" style="text-decoration:none">&#11016;</a>
- Shopify <a href="https://shopify.eOgineering/e-commerce-at-scale-inside-shopifys-tech-stack" target="_blank" style="text-decoration:none">&#11016;</a>
- Instagram <a href="https://instagram-engineering.com/static-analysis-at-scale-an-instagram-story-8f498ab71a0c" target="_blank" style="text-decoration:none">&#11016;</a>
- Amazon Prime Video <a href="https://www.primevideotech.com/video-streaming/scaling-up-the-prime-video-audio-video-monitoring-service-and-reducing-costs-by-90" target="_blank" style="text-decoration:none">&#11016;</a> 
- Etsy <a href="https://medium.com/s-c-a-l-e/microservices-monoliths-and-laser-nail-guns-how-etsy-finds-the-right-focus-in-a-sea-of-cf718a92dc90" target="_blank" style="text-decoration:none">&#11016;</a>
- _Literallly any website before 2012_

_"...but Monoliths don's scale!"_

### 2. Fault Tolerent
s

  
### 3. Flexibility in Technology Stack
If I were trying to optimize for development speed, the last thing I would want would be for all my services to be running different tech stacks.


## Quotes
There are a bajillion posts out there weighing the pros and cons of microservices. I've decided to include some of my favorite discussion excerpts that I've found:

> "The rarity of well-designed monoliths is eclipsed only by the rarity of well-designed microservices."

> "Monoliths let you find integration problems at compile time. Microservices let you find them in production."

"Premature optimization is the root of all evil (or at least most of it) in programming."

– Donald Knuth


## Disclaimer
It's not that these patterns should _never_ be used - it's that they're often used prematurely or sometimes completely unnecessary.
The real lesson here is to use common sense when splitting things up. There is no standard.

## Summary
If someone recommends starting a greenfield project with microservices, that person is likely more obsessed with the underlying technology than delivering value.
<!-- They've probably been developing software in a microservices bubble and forgot what quickly delivering software is _supposed_ to feel like. How do I know this? __It's happened to me!__ Like the Matrix, it can take a while to "de-program" from that mentality. Are you _actually_ delivering features quicker? Or are you just doing more work - so it _feels_ faster? -->


Some venture capitalists have also noticed that microservices have a strong tendency to slow down organizations. After three years, a well-known VC organization reviewed the products they had invested in and found a common theme: Those who took a microservices approach were still battling fundamental issues with their architecture, while the teams that took a more monolithic approach had brought products to market and were cranking out features left and right.


Ask yourself, are you _actually_ delivering value quicker? Or are you just doing more work - so it _feels_ faster?

## 

https://www.youtube.com/watch?v=pL3Yzjk5R4M


## A Better Approach

- Better automation around pull requests
- Lots of testing
- Quicker feedback loop
- Ephemeral environments
- Improve deployment tooling
- Use a smaller team of more knowledgeable engineers
- Write better and more efficient software
- Learn how to use GIT better

Most engineers don't realize just how far a monolithic backend can be scaled up these days. Hardware is cheaper than ever and still improving. The cloud has made provisioning servers with TBs of RAM commonplace. Compute and storage are practically infinitely horizontally scalable.