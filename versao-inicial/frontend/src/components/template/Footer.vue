<template>
    <footer class="footer">
        <span>Copyright <strong>Venio</strong> ₢ 2015-2020</span>    
        <hr>
        <span class="tokenized">Token de acesso limitado por tempo!</span>
    
    </footer>    
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    .footer{
        grid-area: footer;
        background-color: #ddd;
        color: blue;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
        
    }

    .footer .tokenized{
        font-size: 0.8rem;
        color: blue;
    }   

</style>