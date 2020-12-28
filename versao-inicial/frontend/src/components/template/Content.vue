<template>
    <div class="content">
        <router-view></router-view>    
    </div>    
</template>

<script>
export default {
    name: 'Content'
}
</script>

<style>
    .content{
        grid-area: content;
        background-color: oldlace;
        padding: 20px;
        border-left: 1px solid #343242;
    }
</style>