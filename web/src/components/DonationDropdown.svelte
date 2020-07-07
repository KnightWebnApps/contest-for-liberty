<script>
    import {loadStripe} from '@stripe/stripe-js';
    import Button from '../widgets/Button.svelte';

    export let togglePopup = false;

    let selectedDonation = 'price_1H2D26EZ0VqQW9WrjIoVbcdk';

    const stripe = loadStripe('pk_test_VWv39DvghCJYi3z1LOpdRtte00OxSyiu8j');

    const donationLevels = [
        {
            name: '$100',
            id: 'price_1H2D4jEZ0VqQW9Wr2fYtgegn'
        },
        {
            name: '$50',
            id: 'price_1H2D4jEZ0VqQW9WrTQA4TNME',
        },
        {
            name: '$20',
            id: 'price_1H2D4kEZ0VqQW9WrUIvvvQYn'
        },
        {
            name: '$10',
            id: 'price_1H2D4jEZ0VqQW9WrDooQQu7C'
        },
        {
            name: '$5',
            id: 'price_1H2D4kEZ0VqQW9WrrrNvo8HX'
        },
        {
            name: '$1',
            id: 'price_1H2D26EZ0VqQW9WrjIoVbcdk'
        }
    ]

    const redirectToCheckout = async  productId => {
        await stripe.redirectToCheckout({
            lineItems: [
                {price: productId, quantity: 1}
            ],
            mode: 'payment',
            successUrl: 'http://localhost:3000/success',
            cancelUrl: 'http://localhost:3000/',
        }).then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
        });
    }
</script>

{#await loadStripe('pk_test_VWv39DvghCJYi3z1LOpdRtte00OxSyiu8j')}
    <Button text="...Loading" />
{:then stripe}

    {#if togglePopup === false}

        <Button text="Donate" onClick={() => togglePopup = true}/>

    {:else}

        <div class="popup" >

            <h3>Select an Amount</h3>

            {#each donationLevels as donation}
                <label for={donation.name}>
                    <input type="radio" bind:group={selectedDonation} name={donation.name} value={donation.id}>
                    { donation.name }
                </label>
            {/each}

            <Button text='Donate' onClick={() => stripe.redirectToCheckout({
                    lineItems: [
                        {price: selectedDonation, quantity: 1}
                    ],
                    mode: 'payment',
                    successUrl: 'http://localhost:3000/success',
                    cancelUrl: 'http://localhost:3000/',
                }).then(function (result) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, display the localized error message to your customer
                // using `result.error.message`.
                })
            }/>
            <Button text="Cancel" onClick={() => togglePopup = false}/>

        </div>

    {/if}
    
{:catch error}
    <Button text="Failed" />
{/await}



<style>
    .popup {
        width: 200px;
        background-color: var(--dark);;
        border-radius: 7px;
        padding: .7em;
        flex-direction: column;
        display: flex;
        position: absolute;
    }
</style>