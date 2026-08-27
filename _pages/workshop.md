---
layout: archive
title: "A.I. Workshop"
permalink: /workshop/
author_profile: true
redirect_from:
  - /ai-workshop/
  - /workshop.html
---

Artificial intelligence is changing how research is done — from coding assistants and literature search to formally verified proofs — but the know-how of using these tools well is spread thinly across groups and rarely written down. The A.I. Workshop is a regular, informal meeting at RWTH Aachen where we share this expertise: we present tools and workflows, try them out hands-on, and discuss how to use AI in a way that makes our scientific work more rigorous, transparent, and reproducible.

Everyone interested is welcome — students, PhD students, postdocs, and faculty alike — and no prior experience is required. Sessions take place regularly but not at fixed intervals — the dates depend on the availability of speakers, so please check the upcoming sessions below. If you would like to present a tool, a workflow, or a topic in one of the sessions, please [get in touch](mailto:{{ site.author.email }}).

{%- comment -%}
Sessions are maintained in _data/workshop.yml; see the comments there.
Sessions dated on or after the build date are "upcoming", earlier ones are
"past". Sessions whose date is still "TBA" (or missing) are listed after the
dated upcoming sessions, in the order of the data file. Only the dated sessions
are sorted: sorting a mix of dates and strings would fail the build.
{%- endcomment -%}
{%- assign today = site.time | date: "%Y-%m-%d" -%}
{%- assign dated = "" | split: "" -%}
{%- assign tba = "" | split: "" -%}
{%- for s in site.data.workshop -%}
{%- assign d = s.date | downcase -%}
{%- if d == "" or d == "tba" -%}
{%- assign tba = tba | push: s -%}
{%- else -%}
{%- assign dated = dated | push: s -%}
{%- endif -%}
{%- endfor -%}
{%- assign dated = dated | sort: "date" -%}
{%- assign upcoming = "" | split: "" -%}
{%- assign past = "" | split: "" -%}
{%- for s in dated -%}
{%- assign d = s.date | date: "%Y-%m-%d" -%}
{%- if d >= today -%}
{%- assign upcoming = upcoming | push: s -%}
{%- else -%}
{%- assign past = past | push: s -%}
{%- endif -%}
{%- endfor -%}
{%- assign upcoming = upcoming | concat: tba %}

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
