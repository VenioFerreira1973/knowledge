<template>
    <div class="article-by-id">
    
    </div>    
</template>

<script>
import {baseApiUrl} from '@/global'
import axios from 'axios'
import PageTitle from '../template/PageTitle'

export default {
    name: 'ArticleById',
    components: { PageTitle },
    data: function(){
        return {
            article: {}
        }
    },
    mounted(){
        const url = `$`
    }
}
</script>

<style>

</style>