<template>
    <aside class="menu" v-show="isMenuVisible">
        <div class="menu-filter">
            <i class="fa fa-search fa-lg"></i>
            <input type="text" placeholder="Pesquisar..."
                v-model="treeFilter" class="filter-field">
        </div>
        <Tree :data="treeData" :options="treeOptions"
            :filter="treeFilter" ref="tree" />
    </aside>
</template>

<script>
import { mapState } from 'vuex'
import Tree from 'liquor-tree'
import { baseApiUrl } from '@/global'
import axios from 'axios'

export default {
    name: 'Menu',
    components: { Tree },
    computed: mapState(['isMenuVisible']),
    data: function() {
        return {
            treeFilter: '',
            treeData: this.getTreeData(),
            treeOptions: {
                propertyNames: { 'text': 'name' },
                filter: { emptyText: 'Categoria não encontrada' }
            }
        }
    },
    methods: {
        getTreeData() {
            const url = `${baseApiUrl}/categories/tree`
            return axios.get(url).then(res => res.data)
        },
        onNodeSelect(node) {
            this.$router.push({
                name: 'articlesByCategory',
                params: { id: node.id }
            })
            
            //Executa o toggle menu se o tamanho do dispositivo for pequeno ou médio	
            if(this.$mq == 'xs' || this.$mq === 'sm'){
                this.$store.commit('toggleMenu', false)
            }
        }
    },
     mounted() {
        this.$refs.tree.$on('node:selected', this.onNodeSelect)
    }

}
</script>

<style>
    .menu{
        grid-area: menu;
        background: linear-gradient(to right, #232526, #414345);
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        
    }
    .menu a,
    .menu a:hover{
        color: #fff;
        text-decoration: none;
    }

    .menu .tree-node.selected > .tree-content,
    .menu .tree-node .tree-content:hover{
        background-color: rgba(255, 255, 255, 0.2);
    }

    .tree-arrow.has-child{
        filter: brightness(20);
    }

    .menu .menu-filter{
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 20px;
        padding-bottom: 8px;
        border-bottom: 1px solid #aaa;
        font-size: 0.8rem;
    }

    .menu .menu-filter i{
        color: #aaa;
        margin-right: 10px;
    }

    .menu .menu-filter .filter-field{
        font-size: 1rem;

    }

    .menu input{
        color: #ccc;
        font-size: 1.3rem;
        border: 0;
        outline: 0;
        width: 80%;
        background: transparent;
    }

    .tree-filter-empty{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #ccc;
        font-size: 1rem;
    }

</style>