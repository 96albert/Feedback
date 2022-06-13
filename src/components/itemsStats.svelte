<script>
import { FeedbackStore} from '../store'

   // get average of the items and length 
$: numItems = $FeedbackStore.length
// average 
$: itemsAverage = $FeedbackStore.reduce((Q, {rating}) => Q + rating, 0) / $FeedbackStore.length

</script>

<div class="container mb-2 d-flex d-md-flex justify-content-between text-center">
    <h4>
        {numItems} Reviews
    </h4>
    <h4>
       Rating Average {itemsAverage}
    </h4>
</div>