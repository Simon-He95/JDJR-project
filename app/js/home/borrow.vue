<template>
    <Panel :title="'急速借贷'">
        <router-link :to="{name:'home'}">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280" alt="" class="borrowImg">
        </router-link>
    </Panel>
</template>

<script>
    import Panel from '../core/panel.vue'
    export default {
        name: "borrow",
        components: {
            Panel
        }
    }
</script>

<style scoped>
    .borrowImg{
        width: 100%;
    }
</style>