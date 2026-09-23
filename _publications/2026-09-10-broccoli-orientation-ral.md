---
title: "A Sequential Stalk-Based Manipulation Strategy for Post-Harvest Broccoli Orientation"
published_in: "IEEE Robotics and Automation Letters (RA-L)"
authors: "Yongkai Ye; Chonglei Sun; <u><b>Yuchen Liang</b></u>; Jun Wang; Rob B.N. Scharff; Dongdong Du"
excerpt: "Automating broccoli reorientation after harvest is hard: the head is fragile and irregular, so grasping it directly risks bruising and floret separation. We propose a sequential stalk-based manipulation strategy in which a depth-based 3D pose estimate guides a UR5 arm with a parallel soft pneumatic gripper to grasp the stalk — never the head — and then horizontally align the broccoli through sequential finger-pair inflation and simple rectilinear arm motions. The strategy achieved a 100% grasping success rate with a maximum horizontal alignment error of 4.11°, and a placement system built on it reached a 90% success rate over 100 trials."
header:
  image: assets/images/publications/broccoli-ral-overview.jpg
  teaser: assets/images/publications/broccoli-ral-overview.jpg
sidebar:
  - title: "Published In"
    text: "IEEE Robotics and Automation Letters (RA-L)"
  - title: "Author list"
    text: Yongkai Ye; Chonglei Sun; <u><b>Yuchen Liang</b></u>; Jun Wang; Rob B.N. Scharff; Dongdong Du
    # <u><b>Yuchen Liang</b></u>

classes: wide
---

Handling broccoli in post-harvest operations requires not only stable grasp acquisition but also accurate reorientation, due to its highly irregular, umbrella-shaped morphology. Current processes remain largely manual, and existing soft-gripper systems tend to overlook post-grasp orientation while interacting directly with the fragile broccoli head — compressing the floret-bearing region and increasing the risk of bruising, floret separation, and other quality degradation.

We propose a **sequential, stalk-based manipulation strategy** that avoids contact with the head entirely: the stalk is the discarded part of the produce, so manipulating it leaves the commercially valuable head untouched. A depth-based pose estimation step provides the broccoli's 3D pose, which guides a UR5 robotic arm equipped with a parallel soft pneumatic gripper with two opposing finger pairs. The gripper first aligns with the estimated planar orientation of the inclined broccoli and approaches the stalk center through simple joint rotation and rectilinear motion. The distal finger pair then engages the stalk and lifts it to induce active horizontal alignment, followed by the proximal finger pair to stabilize the configuration, before the broccoli is lifted for transport. Orientation is achieved through compliant grasping and controlled lifting, without complex manipulation.

Here are our main contributions:

- **Sequential stalk-based manipulation strategy**: Integrates depth-based pose estimation with parallel-soft-gripper-based manipulation for handling broccoli in post-harvest applications, avoiding damage-prone contact with the broccoli head.
- **Experimental validation of grasping and orientation**: Reliable, low-damage grasping with a 100% grasping success rate and a maximum horizontal alignment error of 4.11°, evaluated in terms of grasping success, horizontal alignment error, bruising, and floret separation.
- **Automated post-harvest placement**: A broccoli placement system developed based on the proposed strategy achieved a 90% overall placement success rate across 100 trials (95% grasping success), demonstrating practical value for agricultural automation.

[Check by DOI](https://doi.org/10.1109/LRA.2026.3732843){: .btn .btn--info}
