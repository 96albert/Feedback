<script>
    import { FeedbackStore } from '../store';

    import Card from '../UI/Card.svelte'
    export let item 
    const deleteItem =(itemId) => {
    // delete directly from the store 
    FeedbackStore.update((currentFeedback)=> {
        // filter items in the array 
        return currentFeedback.filter((item)=> item.id !=itemId)
    })
    }
</script>

<Card>
 <h3 class='rating'>
    {item.rating}
 </h3>
 <button class="position btn p-1 border-none" on:click={deleteItem(item.id)}>
    <i class="bi bi-trash"></i>

 </button>
 <p >
    {item.text}
 </p>
</Card>

<style>

    .rating{
        position: absolute;
        top: -10px;
        left: -10px;
        width: 50px;
        height: 50px;
        background: #ff6a95;
        border: 1px #eee solid;
        border-radius: 50%;
        padding: 10px;
        text-align: center;
        font-size: 20px;
    }
    .position{
        position: absolute;
        top: 10px;
        right: 20px;
        cursor: pointer;
    }
</style>