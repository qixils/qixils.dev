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
      Here you'll find most of my completed projects from the past few years,
      from full-stack websites to Minecraft mods to Discord bots and everything in-between.
    </p>

    <h2>Websites</h2>
    <p>
      When I first started out as a developer, creating websites always seemed like a daunting task. However, with the
      advent of web frameworks like <a href="https://react.dev/">React</a>, <a href="https://vuejs.org/">Vue</a>, and
      <a href="https://svelte.dev/">Svelte</a>, I've learned that developing a website can be fun and easy, so much so
      that I can now create a small website for a project (like this one!) in only a weekend.
    </p>

    <div class="portfolio-gallery">
      <!-- Speedrun VOD Club -->
      <div class="card">
        <p class="title">Speedrun VOD Club</p>
        <p class="subtitle">
          Written in Kotlin/Ktor and TypeScript/SvelteKit.
          Developed in 2019-2023.
          <a target="_blank" href="https://github.com/qixils/kgdq">Source Code</a>,
          <a target="_blank" href="https://vods.speedrun.club/">Website</a>
        </p>
        <p class="description">
          Together with my friend <a href="https://dunkyl.net">Dunkyl</a>, we wrote a website that allows you to share
          and watch archived videos of speedruns from charity marathons, like
          <a href="https://gamesdonequick.com">Games Done Quick</a>.
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
          Created in 2022 for my parents, this website allows users to view the season statistics of the current batter
          and pitcher of any Major League Baseball game. It was developed using the MLB Stats API and is written in
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
          Twitch extension created for my debut <a href="https://twitch.tv/lexikiq">Twitch stream</a>.
          Powered by a Kotlin backend using the Ktor framework, and a TypeScript frontend using the SvelteKit framework.
        </p>
      </div>
    </div>

    <h2>Minecraft</h2>
    <p>
      Crafting unique experiences in this block game has been a large focus of mine for the past few years. From one-off
      <a href="https://fabricmc.net/">Fabric mods</a> to entire games developed with the
      <a href="https://papermc.io/">Paper API</a>,
      it's hard to find an aspect of the classic game that I haven't worked with.
    </p>
    <div class="portfolio-gallery">
      <!-- Minecraft Crowd Control -->
      <div class="card">
        <p class="title">Minecraft Crowd Control</p>
        <p class="subtitle">
          Written in Java.
          <a href="https://mccc.qixils.dev/">Website</a> written in TypeScript/Nuxt.
          Developed from 2021-2023.
          <a target="_blank" href="https://github.com/qixils/minecraft-crowdcontrol">Source Code</a>
        </p>
        <p class="subtitle"></p>
        <p class="description">
          Developed in collaboration with <a href="https://crowdcontrol.live">crowdcontrol.live</a>, this Minecraft mod
          developed for numerous modding frameworks
          (including <a href="https://papermc.io/">Paper</a>,
          <a href="https://fabricmc.net/">Fabric</a>,
          and <a href="https://spongepowered.org/">Sponge</a>)
          allows viewers of livestreams to alter the streamers' game by donating money to the streamers
          or to a charity of the streamers' choice.
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
          Developed in 2023.
        </p>
        <p class="description">
          In 2023, I created several miniature mods for the game, including
          <a href="https://github.com/qixils/antisocial">Antisocial</a> for hiding other players,
          <a href="https://github.com/qixils/depiglining">Depiglining</a> for reverting nerfs to speedrunning,
          and <a href="https://github.com/qixils/fahare">Fahare</a> for quickly resetting worlds in multiplayer.
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
            numerous pull requests</a> to the Paper server software, as well as to its related projects like
          <a href="https://github.com/PaperMC/Velocity/pull/522">Velocity</a>
          and <a href="https://github.com/KyoriPowered/adventure/pull/393">Adventure</a>,
          to add new features and fix bugs throughout the years.
        </p>
      </div>
      <!-- TODO more projects. All Obtainable Items? -->
    </div>

    <h2>Discord</h2>
    <p>
      My programming journey has come a long way since my first Discord bot written in C# that was stuffed into one huge file.
      Since then, I've accrued years of experience in developing bots for Discord, particularly with the
      <a href="https://discordpy.readthedocs.io/en/latest/">discord.py</a> library, and continue to work on creating my
      own <a href="https://github.com/quasicolon/quasicolon/">batteries-included bot library for Java</a> in my free time.
    </p>
    <div class="portfolio-gallery">
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
      <!-- quasicolon -->
      <div class="card">
        <p class="title">Quasicord</p>
        <p class="subtitle">
          Written in Java.
          Developed from 2021-2023.
          <a target="_blank" href="https://github.com/quasicolon/quasicord">Source Code</a>
        </p>
        <p class="description">
          Quasicolon is my work-in-progress batteries-included Java library for Discord bots. The library has been built
          from the ground up with first-class support for localization, allowing developers to easily develop bots for a
          wider audience. It also manages common boilerplate such as connecting to and fetching objects from a MongoDB
          server.
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
