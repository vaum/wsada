<template>
  <article style="width: 100%">
    <h2 style="line-height:1.4;color:deepskyblue;">{{userEmailData.name}}</h2>
    <p style="margin-bottom: 15px;font-weight:bold;line-height:1.4;">{{userEmailData.title}}, {{userEmailData.company}}</p>
    <hr>
    <p style="margin-top: 15px;margin-bottom: 15px;">
      <span style="color:deepskyblue;">Phone</span> {{userEmailData.phone}}    <span style="margin-left:15px;color:deepskyblue;">Email</span> {{userEmailData.email}}
    </p>
    <p style="margin-bottom: 15px">
      <span style="color:deepskyblue;">Address</span> {{userEmailData.address}}</p>
    <hr>
  </article>
</template>

<script>
export default {
  name: "defaultTemplate",
  props: ['userEmailData']
}
</script>

<style scoped>

</style>