<script lang="ts">
  import Navigation from "./Navigation.svelte";
  import AboutMe from "./AboutMe.svelte";
  import Projects from "./Projects.svelte";
  import ContactMe from "./ContactMe.svelte";
  import Comic from "./Comic.svelte";
</script>

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mohamed Abdelhamid</title>
  <link rel="stylesheet" href="styles.css" />
</head>

<body>
  <header>Mohamed Abdelhamid</header>
  <Navigation />

  <AboutMe />

  <div class="empty-div" />

  <Projects />

  <ContactMe />

  <Comic />
</body>
