<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage /> <!-- This is 100% required -->
    </NuxtLayout>
  </UApp>
</template>

<script setup>
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://use.typekit.net/pmw3ver.css'
    } // font-family: "avenir-next-lt-pro", sans-serif;
  ],

  meta: [
    { name: 'agd-partner-manual-verification' } // For Agoda
  ],

  script: [
    {
      innerHTML: `(function () {
        var script = document.createElement("script");
        script.async = 1;
        script.src = 'https://emrld.ltd/NDIzMjE3.js?t=423217';
        document.head.appendChild(script);
      })();`,
      tagPosition: 'head',
      type: 'text/javascript',
      'data-noptimize': '1',
      'data-cfasync': 'false',
      'data-wpfc-render': 'false'
    } // for Travelpayouts
  ],
  __dangerouslyDisableSanitizers: ['script'] // if needed
});
</script>
