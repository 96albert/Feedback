<script>
    import {FeedbackStore} from '../store'
    import {fly , fade , scale} from 'svelte/transition'
    import FeedBackItem from "./FeedBackItem.svelte";
// import { onDestroy, onMount } from 'svelte';

    // let feedback = []
    // // get data from the store 
    // const unsubcribe = FeedbackStore.subscribe((data) => feedback = data )
    // // another way 
    // onMount(() => {
    //     console.log('data mounted now ')
    // })
    // // onDestory 
    // onDestroy(() => {
    //     unsubcribe('data is destroyed now !')
    // })
</script>

    {#each $FeedbackStore as fb (fb.id)}
<div in:scale out:fade>

        <p class="lead mb-4 p-3">
            <FeedBackItem item={fb}/>
        </p>
</div>

    {/each}
     