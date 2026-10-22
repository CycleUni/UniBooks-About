---
layout: page
title: 團隊成員
description: UniBooks 由 CycleUni 團隊開發與營運，認識背後的成員。
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
    title: '產品開發',
    links: [{ icon: 'github', link: 'https://github.com/kenchou2006' }]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>CycleUni 團隊</template>
    <template #lead>
      UniBooks 由 CycleUni 團隊開發與營運。我們是一群大學生，想讓每一本教科書在畢業前找到下一位主人。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
  <VPTeamPageSection>
    <template #title>聯絡我們</template>
    <template #lead>
      帳號、交易或個人資料相關問題，請寄信至
      <a href="mailto:services@unibooks.app">services@unibooks.app</a>，
      由團隊統一處理；請不要私下聯絡個別成員。程式碼與問題回報在
      <a href="https://github.com/CycleUni/UniBooks">GitHub</a>。
    </template>
  </VPTeamPageSection>
</VPTeamPage>
