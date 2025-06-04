<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>

<script setup>
useHead({
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
    }
  ],
  __dangerouslyDisableSanitizers: ['script'] // if needed
});
</script>
