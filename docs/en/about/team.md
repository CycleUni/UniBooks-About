---
layout: page
title: The Team
description: UniBooks is built and operated by the CycleUni team. Meet the people behind it.
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers
} from 'vitepress/theme-without-fonts'

// Keep each entry to what the member chose to share: name, avatar, GitHub
// link and a short line about themself. No contact details or personal photos.
const members = [
  {
    avatar: 'https://github.com/kenchou2006.png',
    name: 'Chou Kung Huan (周恭煥)',
    title: 'Product & Engineering',
    desc: 'A second-year Information Management student at Chihlee University of Technology who built UniBooks to help resources circulate more freely around campus.',
    links: [{ icon: 'github', link: 'https://github.com/kenchou2006' }]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>The CycleUni Team</template>
    <template #lead>
      UniBooks is built and operated by the CycleUni team, a group of university students who want every textbook to find its next owner before graduation.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
  <VPTeamPageSection>
    <template #title>Contact</template>
    <template #lead>
      For questions about your account, a transaction or your personal data, write to
      <a href="mailto:services@unibooks.app">services@unibooks.app</a>.
    </template>
  </VPTeamPageSection>
</VPTeamPage>
