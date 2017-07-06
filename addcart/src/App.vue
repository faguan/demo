<template>
    <div id="app">
        <v-content></v-content>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import vFooter from './components/footer';
    import vContent from './components/content';
    export default {
        components:{
            vFooter,vContent
        }
    }
</script>

<style>

</style>
