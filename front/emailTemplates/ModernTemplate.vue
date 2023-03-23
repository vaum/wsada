<template>
  <article style="width: 100%">
    <h2 style="line-height:1.4;color:deepskyblue;">
      {{userEmailData.name}}
    </h2>
    <p style="font-weight:bold;line-height:1.4;">
      {{userEmailData.title}},
    </p>
    <p style="margin-bottom: 15px;font-weight:bold;">
      {{userEmailData.company}}
    </p>
    <p style="margin-bottom: 15px;">
      <span style="color:deepskyblue;">Phone</span> {{userEmailData.phone}}
    </p>
    <p style="margin-bottom: 15px;">
      <span style="color:deepskyblue;">Email</span> {{userEmailData.email}}
    </p>
    <p style="margin-bottom: 15px;">
      <span style="color:deepskyblue;">Address</span> {{userEmailData.address}}
    </p>
  </article>
</template>

<script>
export default {
  name: "ModernTemplate",
  props: ['userEmailData']
}
</script>

<style scoped>

</style>