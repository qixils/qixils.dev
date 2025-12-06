<script setup lang="ts">
useSeoMeta({
  title: "Portfolio",
  ogTitle: "Portfolio",
  description: "Curated collection of software I've created.",
  ogDescription: "Curated collection of software I've created.",
})
</script>

<template>
  <div id="container" class="container">
    <h1>Portfolio</h1>
    <p>
      Hi! Welcome to my developer portfolio.
      Here you'll find most of my completed projects from the past few years.
    </p>

    <h2>Websites</h2>
    <p>
      Full-stack web development is my greatest passion,
      ranging from traditional websites
      to less common uses like Electron apps and livestreaming overlays.
    </p>

    <div class="portfolio-gallery">
      <!-- Projects @ Crowd Control -->
      <div class="card">
        <p class="title">Projects @ Crowd Control</p>
        <p class="subtitle">
          Written in TypeScript with Electron, Vue, and Trpc.
          Employed from 2024-present.
          <a target="_blank" href="https://crowdcontrol.live">Homepage</a>
        </p>
        <p>
          After 3 years of contracting for Crowd Control's Minecraft mod,
          I was hired on part-time in 2024 and later full-time as a Full-Stack Software Architect
          for the Crowd Control desktop app, servers, and other frontends.
          During my tenure I have created the TikTok integration and its several iterations,
          multiplayer Lobbies,
          a massive public competition hosted on those Lobbies,
          Paid-only effects,
          a new subscription tier,
          client and server optimizations,
          a unified component system,
          and much more.
        </p>
      </div>
      <!-- Speedrun Archive Club -->
      <div class="card">
        <p class="title">Speedrun Archive Club</p>
        <p class="subtitle">
          Written in TypeScript with Vue and Trpc.
          Developed in 2025.
          <a target="_blank" href="https://github.com/qixils/SpeedrunArchiveClub">Source Code</a>,
          <a target="_blank" href="https://archive.speedrun.club/">Website</a>,
          <a target="_blank" href="https://github.com/qixils/ArchiveSpeedruns">Scripts</a>
        </p>
        <p>
          Following Twitch's announcement in early 2025 that they would be enacting a mass purge of
          old video content, I discovered over 100K speedruns submitted to various speedrun sites
          that were pending deletion and worked with arkiver of the
          <a target="_blank" href="https://wiki.archiveteam.org/">Archive Team</a>
          to save them along with 600K+ other popular videos.
          The website allows anyone to easily find and download deleted videos without needing to
          learn the intricacies of the Internet Archive's Wayback Machine storage format
          and Twitch's web of GraphQL queries.
        </p>
      </div>
      <!-- Livestream Broadcast Graphics -->
      <div class="card">
        <p class="title">Livestream Broadcast Graphics</p>
        <p class="subtitle">
          Written in TypeScript/Vue.
          Developed in 2024-present.
          Demo Video
          <a target="_blank" href="https://www.youtube.com/watch?v=_6J4j3OUIvA">#1</a>,
          <!-- <a target="_blank" href="">#2</a>, -->
          <a target="_blank" href="https://github.com/qixils/lss64">Source Code</a>
        </p>
        <p class="description">
          In 2024 I hosted several tournaments using
          <a target="_blank" href="https://nodecg.dev/">NodeCG</a>,
          <a target="_blank" href="https://github.com/speedcontrol/nodecg-speedcontrol">speedcontrol</a>,
          and custom OBS graphic overlays I developed in Vue.
          In 2025 I expanded the overlays for an event produced by my employer
          to source in real-time placement data,
          and further developed its graphics and real-time Twitch data inputs
          for an upcoming Twitch subathon.
        </p>
      </div>
      <!-- Speedrun VOD Club -->
      <div class="card">
        <p class="title">Speedrun VOD Club</p>
        <p class="subtitle">
          Written in Kotlin/Ktor and TypeScript/SvelteKit.
          Developed in 2019-present.
          <a target="_blank" href="https://github.com/qixils/kgdq">Source Code</a>,
          <a target="_blank" href="https://vods.speedrun.club/">Website</a>
        </p>
        <p class="description">
          Together with my friend <a href="https://dunkyl.net">Dunkyl</a>, we wrote a website that allows you to share
          and watch archived videos of speedruns from charity marathons, like
          <a href="https://gamesdonequick.com">Games Done Quick</a> which has previously promoted the site.
          The backend is written in Kotlin using the Ktor framework.
          The <a href="https://vods.speedrun.club/">web frontend</a> is written in TypeScript using the SvelteKit framework,
          while the <a href="https://reddit.com/u/VODThread">Reddit frontend</a> is written in Kotlin.
          The original 2019 version of this project was written in Python.
        </p>
      </div>
      <!-- HTSea -->
      <div class="card">
        <p class="title">HTSea</p>
        <p class="subtitle">
          Written in JavaScript/React, Python, and Java.
          Developed in 2022.
          <a target="_blank" href="https://github.com/qixils/htsea">Source Code</a>,
          <a target="_blank" href="https://i.qixils.dev/HTSea.png">Screenshot</a>
        </p>
        <p class="description">
          HTSea is an April Fool's Day project created by the staff of
          <a href="https://discord.gg/dxCBaYn">HTwins STEM</a> which pokes fun at cryptocurrencies and NFTs. Users were
          able to earn Diamonds, our "cryptocurrency," by mining real diamond ore on our Minecraft server or by solving
          Wordles in their web browser.
        </p>
        <p class="description">
          As the project lead, I outlined how exactly the event would work and what all was necessary for our goals to
          be reached. I helped direct team members and provided my assistance with fixing problems in the code. I also
          contributed and developed the Minecraft plugin used to convert diamonds (the item) to Diamonds
          (the "cryptocurrency") and contributed to various other parts of the project.
        </p>
      </div>
      <!-- Yahoo! Groups Viewer -->
      <div class="card">
        <p class="title">Yahoo! Groups Viewer</p>
        <p class="subtitle">
          Written in Kotlin/Ktor, JavaScript/SvelteKit, and Python.
          Developed in 2022.
          <a target="_blank" href="https://github.com/qixils/yahoo-groups-viewer">Source Code</a>,
          <a target="_blank" href="https://yahoo.qixils.dev">Website</a>
        </p>
        <p class="description">
          As described by <a href="https://en.wikipedia.org/wiki/Yahoo!_Groups">Wikipedia</a>,
          "Yahoo! Groups was a free-to-use system of electronic mailing lists offered by Yahoo!."
          While archives of this defunct website exist, they are notoriously hard to peruse, effectively resulting in
          messages from these old boards being lost to time. This presented an issue to speedrunning communities,
          particularly the Mario Kart community, who often shared their personal best times to these boards. To help
          resolve this problem, I developed this website to provide an archive of select boards from Yahoo! Groups which
          can all be easily read and searched. The site is backed by a Kotlin (Ktor) backend which serves data from
          files pre-processed by a Python script for rendering by the JavaScript (SvelteKit) web browser frontend.
        </p>
      </div>
      <!-- MLB -->
      <div class="card">
        <p class="title">MLB Matchup Viewer</p>
        <p class="subtitle">
          Written in TypeScript/SvelteKit.
          Developed in 2022.
          <a target="_blank" href="https://github.com/qixils/mlb-matchup-viewer/">Source Code</a>,
          <a target="_blank" href="https://mlb.qixils.dev">Website</a>
        </p>
        <p class="description">
          Created in 2022 when my parents complained to me about not knowing how good the players in the finals were,
          this website allows users to view the season statistics of the current batter
          and pitcher of any Major League Baseball game.
          It was developed using the (reverse-engineered!) MLB Stats API and is written in
          TypeScript using the SvelteKit framework.
        </p>
      </div>
      <!-- Debut -->
      <div class="card">
        <p class="title">Debut</p>
        <p class="subtitle">
          Written in Kotlin/Ktor and TypeScript/SvelteKit.
          Developed from 2022-2023.
          <a target="_blank" href="https://github.com/qixils/debut/">Source Code</a>
        </p>
        <p class="description">
          Twitch overlay extension created for my debut <a href="https://twitch.tv/lexikiq">Twitch stream</a>.
          Powered by a Kotlin backend using the Ktor framework, and a TypeScript frontend using the SvelteKit framework.
        </p>
      </div>
    </div>

    <h2>Minecraft</h2>
    <p>
      Crafting unique experiences in this block game was my first serious introduction to coding.
      I've worked with every major mod loader and even the game's own data systems.
    </p>
    <div class="portfolio-gallery">
      <!-- Minecraft Crowd Control -->
      <div class="card">
        <p class="title">Minecraft Crowd Control</p>
        <p class="subtitle">
          Written in Java.
          <a href="https://mccc.qixils.dev/">Website</a> written in TypeScript/Nuxt.
          Developed from 2021-present.
          <a target="_blank" href="https://github.com/qixils/minecraft-crowdcontrol">Source Code</a>
        </p>
        <p class="subtitle"></p>
        <p class="description">
          Developed for <a href="https://crowdcontrol.live">crowdcontrol.live</a>, this Minecraft mod
          targeting several major modding frameworks
          (including <a href="https://papermc.io/">Paper</a>,
          <a href="https://fabricmc.net/">Fabric</a>,
          and <a href="https://neoforged.net/">NeoForge</a>)
          allows viewers of livestreams to alter the streamers' game by donating money to the
          streamers or to a charity of the streamers' choice.
        </p>
      </div>
      <!-- Project Eden -->
      <div class="card">
        <p class="title">Project Eden</p>
        <p class="subtitle">
          Written in Java.
          Developed from 2021-2022.
        </p>
        <p class="description">
          During my time as a developer, I created a wide variety of features for the games of the
          <a href="https://projecteden.gg">Project Eden Minecraft server</a>, including
          <a href="https://github.com/ProjectEdenGG/Nexus/blob/a183e74abbad7b76b45ddc990b975be8c816149b/src/main/java/gg/projecteden/nexus/features/minigames/mechanics/HideAndSeek.java">Hide and Seek</a>,
          <a href="https://github.com/ProjectEdenGG/Nexus/blob/a183e74abbad7b76b45ddc990b975be8c816149b/src/main/java/gg/projecteden/nexus/features/minigames/mechanics/Juggernaut.java">Juggernaut</a>,
          <a href="https://github.com/ProjectEdenGG/Nexus/blob/a183e74abbad7b76b45ddc990b975be8c816149b/src/main/java/gg/projecteden/nexus/features/minigames/models/perks/PerkType.java#L77-L79">lobby gadgets</a>,
          <a href="https://github.com/ProjectEdenGG/Nexus/blob/a183e74abbad7b76b45ddc990b975be8c816149b/src/main/java/gg/projecteden/nexus/features/minigames/models/perks/PerkType.java">cosmetic rewards</a>,
          <a href="https://github.com/ProjectEdenGG/Nexus/blob/a183e74abbad7b76b45ddc990b975be8c816149b/src/main/java/gg/projecteden/nexus/features/minigames/models/mechanics/multiplayer/teams/TeamMechanic.java#L49-L176">automated voice channel moving</a>,
          <a href="https://github.com/ProjectEdenGG/Nexus/blob/a183e74abbad7b76b45ddc990b975be8c816149b/src/main/java/gg/projecteden/nexus/features/minigames/models/mechanics/multiplayer/teams/TeamMechanic.java#L449-L581">automated team balancing</a>,
          <a href="https://github.com/ProjectEdenGG/Nexus/blob/a183e74abbad7b76b45ddc990b975be8c816149b/src/main/java/gg/projecteden/nexus/features/minigames/models/Minigamer.java#L415-L443">custom health mechanics</a>,
          and <a href="https://github.com/ProjectEdenGG/Nexus/tree/a183e74abbad7b76b45ddc990b975be8c816149b/src/main/java/gg/projecteden/nexus/features/minigames/modifiers">minigame modifiers</a>.
        </p>
      </div>
      <!-- Mini Mods -->
      <div class="card">
        <p class="title">Mini Mods</p>
        <p class="subtitle">
          Written in Java.
          Developed in 2023-2024.
        </p>
        <p class="description">
          I created several miniature mods for the game, including
          <a href="https://github.com/qixils/antisocial">Antisocial</a> for hiding other players,
          <a href="https://github.com/qixils/depiglining">Depiglining</a> for reverting nerfs to speedrunning,
          <a href="https://github.com/qixils/fahare">Fahare</a> for quickly resetting worlds in multiplayer,
          and <a href="https://github.com/qixils/scoreboard-stats-import">Scoreboard Stats Import</a> for importing previously obtained statistics.
        </p>
      </div>
      <!-- Paper -->
      <div class="card">
        <p class="title">Paper</p>
        <p class="subtitle">
          Written in Java.
          Developed from 2021-2022.
        </p>
        <p class="description">
          I've contributed
          <a href="https://github.com/PaperMC/Paper/pulls?q=is%3Apr+author%3Aqixils+sort%3Aupdated-desc+">
            numerous pull requests
          </a> to the Paper server software, as well as to its related projects like
          <a href="https://github.com/PaperMC/Velocity/pull/522">Velocity</a>
          and <a href="https://github.com/KyoriPowered/adventure/pull/393">Adventure</a>,
          to add new features and fix bugs throughout the years.
        </p>
      </div>
    </div>

    <h2>Discord</h2>
    <p>
      This chatting platform helps me keep in touch with many of my closest friends,
      so throughout the years I've created several tools and games to enhance
      my and my friends' experience.
    </p>
    <div class="portfolio-gallery">
      <!-- Hidden "Rule" Game -->
      <div class="card">
        <div class="title">Hidden "Rule" Game</div>
        <p class="subtitle">
          Written in Kotlin.
          Developed in 2025.
          <a target="_blank" href="https://github.com/qixils/hidden-rule-game">Source Code</a>
        </p>
        <p class="description">
          Created for my friends' April Fools, this bot assigns secret rules to chatters
          which must be guessed by other chatters.
        </p>
      </div>
      <!-- demowocracy -->
      <div class="card">
        <div class="title">Democracy</div>
        <p class="subtitle">
          Written in Kotlin.
          Developed in 2024.
          <a target="_blank" href="https://github.com/qixils/demowocwacy">Source Code</a>
        </p>
        <p class="description">
          Created for my friends' April Fools, this bot inspired by Blaseball
          manages an automated election cycle which
          allows users to pass one of 39 pre-written "laws" to change something about the server,
          such as its icon, moderation rules, bots, nicknames, colors, minigames, and more.
          It was updated with new laws in 2025.
        </p>
      </div>
      <!-- semicolon -->
      <div class="card">
        <p class="title">Semicolon</p>
        <p class="subtitle">
          Written in Python.
          Developed from 2019-2023.
          <a target="_blank" href="https://gitlab.com/lexikiq/semicolon/-/tree/master">Source Code</a>,
          <a target="_blank" href="https://discord.com/oauth2/authorize?client_id=444884890878738442&scope=bot+applications.commands&permissions=1342532816">Invite</a>
        </p>
        <p class="description">
          Created with <a href="https://discordpy.readthedocs.io/en/latest/">discord.py</a>, Semicolon is one of my
          longest-running passion projects. Beginning as a random hodgepodge of commands, this bot quickly evolved into
          a powerful moderation bot used by several large servers. This bot utilizes a SQL database to store per-server
          configurations, integrates with numerous third-party APIs such as
          <a href="https://perspectiveapi.com/">Perspective</a> to assist with real-time moderation, and features a
          robust localization system which allows the bot to be used by users of any language.
        </p>
      </div>
      <!-- SOTPAL -->
      <div class="card">
        <p class="title">SOTPAL</p>
        <p class="subtitle">
          Written in Java.
          Developed in 2022.
          <a target="_blank" href="https://github.com/qixils/SOTPAL">Source Code</a>
        </p>
        <p class="description">
          This simple Discord bot created over the span of a few days allows users to play games of
          Some Of These People Are Lying and was inspired by
          <a href="https://www.youtube.com/playlist?list=PLfx61sxf1Yz2I-c7eMRk9wBUUDCJkU7H0">this series</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portfolio-gallery {
  display: flex;
  flex-flow: column;
  gap: .5em;
}

.portfolio-gallery .card {
  padding: .75em;
  background-color: #edcff5;
}

.portfolio-gallery .card p {
  padding: 0;
  margin: 0;
}

.portfolio-gallery .card .title {
  font-size: 18pt;
  font-weight: bold;
}

.portfolio-gallery .card .subtitle {
  font-size: 11pt;
  color: #3f3f3f;
}

.portfolio-gallery .card .subtitle a::after {
  content: " ↗";
}

@media (max-width: 30em) {
  .portfolio-gallery .card {
    padding: .5em;
  }

  .portfolio-gallery .card .title {
    text-align: center;
  }
}
</style>
