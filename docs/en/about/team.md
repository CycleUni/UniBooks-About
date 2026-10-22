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
} from 'vitepress/theme'

// Only what each member already shows publicly on GitHub: handle, avatar,
// profile link. No real names, schools or photos beyond that.
const members = [
  {
    avatar: 'https://github.com/kenchou2006.png',
    name: 'kenchou2006',
    title: 'Product & Engineering',
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
      <a href="mailto:services@unibooks.app">services@unibooks.app</a>
      so the team can handle it together; please don't contact individual members directly. Code and issue reports live on
      <a href="https://github.com/CycleUni/UniBooks">GitHub</a>.
    </template>
  </VPTeamPageSection>
</VPTeamPage>
