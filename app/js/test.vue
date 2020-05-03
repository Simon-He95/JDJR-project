<template lang="html">
  <div :class="$style.test">
    <p>abcdef</p>
  </div>
</template>

<script>
export default {
	data () {
		return {
			title: 'abcd'
		};
	}
};
</script>

<style lang="scss" scoped>
  .test{
    color: red;
    h1{
      font-size:40px;
    }
  }
</style>
