<script>
import {v4 as uuidv4 } from 'uuid' 
import {FeedbackStore} from '../store' 
import Button from '../UI/Button.svelte'
import Card from '../UI/Card.svelte'
import RatingSelect from '../components/RatingSelect.svelte'
let btnDisabled = true
let rating = 10;
let text = '';
let min = 10;
let message;

const handleInput = () => {
    // 
    if(text.trim().length <= min){
        message = `Text must be atleast ${min} characters`
        btnDisabled = false
    }
    // otherwsie if text > min disable the btn 
    message = null
    btnDisabled = false
}

const handleAddItem = e => rating = e.detail


const handleSubmit = ()=>{
    if(text.trim().length > min){
        const addedFeedback =  {
            id : uuidv4(),
            text,
            rating : +rating
        }
        FeedbackStore.update((currentFeedback)=>{
          return [addedFeedback, ...currentFeedback]
        })
        text = ''
    }
}

</script>


<Card>
    <header>
    <h3>How would you rate your service with us?</h3>
  </header>
<form class="mb-3" on:submit|preventDefault={handleSubmit}>
    <!-- Rating select -->
    <RatingSelect on:add-item={handleAddItem} />
    <div class="input">
        <input type="text" bind:value={text} 
        placeholder="In a bit , how would you describe our services ?" 
        on:input={handleInput} />
        <Button type='submit' disabled={btnDisabled}> Send</Button>
    </div>
    {#if message}
    <div class="message">
        {message}

    </div>
    {/if}
</form>
</Card>

<style>
     header {
    max-width: 400px;
    margin: auto;
  }
  
  .input{
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }
  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }
  input:focus {
    outline: none;
  }
  .message{
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
</style>