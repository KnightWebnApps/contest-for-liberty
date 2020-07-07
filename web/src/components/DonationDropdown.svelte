<script>
    import {loadStripe} from '@stripe/stripe-js';
    
    
    import Button from '../widgets/Button.svelte';
    import DonationModal from './DonationModal.svelte';


    let selectedDonation = 'price_1H2D26EZ0VqQW9WrjIoVbcdk';

    const stripe = loadStripe('pk_test_VWv39DvghCJYi3z1LOpdRtte00OxSyiu8j');

    import { getContext } from 'svelte';

    const { open } = getContext('simple-modal');

    const showModal = stripe => {
        open(DonationModal, {stripe});
    };

</script>

{#await loadStripe('pk_test_VWv39DvghCJYi3z1LOpdRtte00OxSyiu8j')}
    <Button text="...Loading" />
{:then stripe}


    <Button text="Donate" onClick={() => showModal(stripe) }/>
    
{:catch error}
    <Button text="Failed" />
{/await}



<style>
    
</style>