---
title: "Projects"
layout: splash
permalink: /pages/nav/
date: 2016-03-23T11:48:41-04:00
header:
  overlay_color: "#000"
  overlay_filter: "0.8"
  overlay_image: /assets/images/hkust.png
  actions:
    - label: "Explore all projects"
      url: "/projects/"
  # caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
excerpt: "Bacon ipsum dolor sit amet salami ham hock ham, hamburger corned beef short ribs kielbasa biltong t-bone drumstick tri-tip tail sirloin pork chop."
intro:
  - excerpt: 'Nullam suscipit et nam, tellus velit pellentesque at malesuada, enim eaque. Quis nulla, netus tempor in diam gravida tincidunt, *proin faucibus* voluptate felis id sollicitudin.'

feature_row:
  - image_path: assets/images/unsplash-gallery-image-1-th.jpg
    alt: "placeholder image 1"
    title: "Placeholder 1"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
  - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
    image_caption: "Image courtesy of [Unsplash](https://unsplash.com/)"
    alt: "placeholder image 2"
    title: "Placeholder 2"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: /assets/images/unsplash-gallery-image-3-th.jpg
    title: "Placeholder 3"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."

feature_row2:
  - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Placeholder Image Left Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Left aligned with `type="left"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"

feature_row3:
  - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Placeholder Image Right Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Right aligned with `type="right"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"

feature_row4:
  - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Placeholder Image Center Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Centered with `type="center"`'
    url: "#test-link"
    btn_label: "Check all projects"
    btn_class: "btn--primary"

research_projects:
  - image_path: /assets/images/placeholder.jpg
    alt: "Academic Research Projects"
    title: "Academic Research Projects"
    excerpt: 'For recent years, most of the projects I participate in are research-focused, related to soft robotics. These project usually lead to publications in academic journals and conferences. '
    url: "/projects"
    btn_label: "Check all projects"
    btn_class: "btn--primary"

yp:
  - image_path: /assets/images/placeholder.jpg
    alt: "Undergraduate Year Projects"
    title: "Undergraduate Year Projects"
    excerpt: 'The HKUST Integrative Systems and Design (ISD) program features three year-long, multi-disciplinary team projects, beginning in the second year and culminating in a company-sponsored final-year capstone project. These projects require students to apply their technical and design knowledge to solve real-world problems for industry partners, involving problem identification, idea generation, prototyping, testing, and implementation to develop innovative, human-centered solutions.'
    url: "/projects"
    btn_label: "Check all projects"
    btn_class: "btn--primary"

course:
  - image_path: /assets/images/placeholder.jpg
    alt: "Course Projects"
    title: "Course Projects"
    excerpt: ''
    url: "/projects"
    btn_label: "Check all projects"
    btn_class: "btn--primary"

---

{% include feature_row id="intro" type="center" %}

<!-- {% include feature_row %} -->

{% include feature_row id="research_projects" type="left" %}

{% include feature_row id="course" type="left" %}

{% include feature_row id="yp" type="left" %}



<!-- {% include feature_row id="feature_row4" type="center" %} -->