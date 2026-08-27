---
layout: archive
title: "A.I. Workshop"
permalink: /workshop/
author_profile: true
redirect_from:
  - /ai-workshop/
  - /workshop.html
---

Artificial intelligence is changing how research is done — from coding assistants and literature search to formally verified proofs — but the know-how of using these tools well is spread thinly across groups and rarely written down. The A.I. Workshop is a weekly, informal meeting at RWTH Aachen where we share this expertise: we present tools and workflows, try them out hands-on, and discuss how to use AI in a way that makes our scientific work more rigorous, transparent, and reproducible.

Everyone interested is welcome — students, PhD students, postdocs, and faculty alike — and no prior experience is required. If you would like to present a tool, a workflow, or a topic in one of the sessions, please [get in touch](mailto:{{ site.author.email }}).

{%- comment -%}
Sessions are maintained in _data/workshop.yml; see the comments there.
Sessions on or after the build date are "upcoming", the others are "past".
{%- endcomment -%}
{%- assign today = site.time | date: "%Y-%m-%d" -%}
{%- assign sessions = site.data.workshop | sort: "date" -%}
{%- assign upcoming = "" | split: "" -%}
{%- assign past = "" | split: "" -%}
{%- for s in sessions -%}
{%- assign d = s.date | date: "%Y-%m-%d" -%}
{%- if d >= today -%}
{%- assign upcoming = upcoming | push: s -%}
{%- else -%}
{%- assign past = past | push: s -%}
{%- endif -%}
{%- endfor %}

<h2 id="upcoming">Upcoming sessions</h2><hr />

{% if upcoming.size > 0 %}
{% for s in upcoming %}
{% include workshop-session.html session=s %}
{% endfor %}
{% else %}
<p>No sessions are scheduled at the moment — please check back soon.</p>
{% endif %}

{% if past.size > 0 %}
<h2 id="past">Past sessions</h2><hr />

{% assign past = past | reverse %}
{% for s in past %}
{% include workshop-session.html session=s %}
{% endfor %}
{% endif %}
