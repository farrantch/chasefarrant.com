---
date_created: '2023-12-06'
date_updated: '2023-12-06'
description: Trying to walk when you can already run.
layout: layouts/base.njk
tags:
  - blog
  - devops
title: Common Patterns that Slow Development
---

# {{ title }}
_date created: {{ date_created }}_ \
_last updated: {{ date_updated }}_


&nbsp;
## Introduction 
Development speed is one of, if not the most important factor to optimize for when developing software. Speed delivers features. Speed improves flexibility. Speed capitalizes on new opportunities. Speed beats competitors to market. Many other factors such as maintainability or complexity are important - because they directly impact the speed of development. It's hard to deliever features in a timely manner when the solution is a spider-web.

> _Your goal when developing software should be to keep your solution as simple as possible for as long as possible._

It's an extremely common trope in software engineering to over-engineer solutions. Often disguised under the veil of "scalability", "securability", or "maintainability". Don't get me wrong, these attributes are very important, but it's often mis-calculated the extent to which commonly accepted patterns can slow down development.


&nbsp;
## Trying to Walk When You Can Already Run
A common theme to these patterns is breaking things up into more managable chunks - a subject so opinionated that it's almost an art form.

Greenfield software development is an interative process, you need to walk before you can run. How can you possibly know how to split things up early on? Everything you know about the solution and it's requirements will have changed after a year. It's imperative to approach the solution in a way that prioritizes the ability to make sweeping changes across the board.

In the consulting world, the desire to split things up is practically a primal instinct. Nobody wants to be the one to recommend a simple and boring solution. More splitting up = more time required = more dollar$. Clients also love to hear about the cool new tools everyone is using underneath their solution.

I often hear about splitting projects up because of team struture - which is insane. A good solution should look the same whether a single person is developing the project or 100 people. Team structure does not dictate the solution's architecture - quite the opposite.

Let me be clear - if you cannot manage a solution as a single entity, how exactly will splitting it up into more pieces will make it easier to manage?

It's not that these patterns shouldn't ever be used - it's that they're used prematurely or are often times unnecessary. So when should something be split out? When it's painfully obvious that it will increase development speed.

Are you actually developing features quicker? Or are you just doing more work - so it _feels_ faster?

&nbsp;
## Pattern 1 - Microservices
It's no secret that there are a ton of strong opinions surrounding microservices. And for good reason - half the planet is convinced it's the only way to develop software!

If someone recommends starting a greenfield project with microservices, it's likely that person is more obsessed with the underlying technology as opposed to focusing on delivering value.

  
&nbsp;
## Pattern 2 - Terraform Modules
I once worked in a DevSecOps division that mandated all Terraform resources should be modularized. Not just groups of resources. Every single individual resource should have a corresponding module. The reason?

> _"It allows us to define resources once and version them independently." - Boss Man_

Okay, that doesn't sound _that_ unreasonable at face value. I called up a buddy and asked him if he had every heard of this pattern.

> _"Yeah, in fact, we often follow the same pattern." - Buddy_

Hmmmm. At this point I felt like I was taking crazy pills. Here is my opinion on why this is usually a bad idea:

A Terraform module is an abstraction. Abstractions are meant to take something complex and simplify it. Individual resources are rarely complex. Sure, they might be part of a more complex solution, but that doesn't make the resource itself complex.

An S3 bucket can be configured an infite number of ways. If you modularize it, over time you will end up having as many parameters as the original resource itself.

