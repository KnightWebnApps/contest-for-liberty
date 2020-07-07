<script>
    import Button from '../widgets/Button.svelte';

    export let stripe;

    let selectedDonation = 'price_1H2D4jEZ0VqQW9WrDooQQu7C';

    const donationLevels = [
        {
            name: '$100',
            label: 'Demi God 🔥',
            id: 'price_1H2D4jEZ0VqQW9Wr2fYtgegn'
        },
        {
            name: '$50',
            label: 'Absolute Legend 🎸',
            id: 'price_1H2D4jEZ0VqQW9WrTQA4TNME',
        },
        {
            name: '$20',
            label: 'Pro Conspiritor',
            id: 'price_1H2D4kEZ0VqQW9WrUIvvvQYn'
        },
        {
            name: '$10',
            label: 'Anti-Establishment',
            id: 'price_1H2D4jEZ0VqQW9WrDooQQu7C'
        },
        {
            name: '$5',
            label: 'Conservative',
            id: 'price_1H2D4kEZ0VqQW9WrrrNvo8HX'
        },
        {
            name: '$1',
            label: 'Deplorable',
            id: 'price_1H2D26EZ0VqQW9WrjIoVbcdk'
        }
    ]
</script>

<div class="popup" >

    <h1>Donation </h1>

    <fieldset>
        <legend>Select An Amount</legend>
        {#each donationLevels as donation}
            <div class="radio-wrapper">
                <input type="radio" bind:group={selectedDonation} name={donation.name} value={donation.id}>
                <label for={donation.name}>
                    {donation.name} - { donation.label }
                </label>
            </div>
        {/each}
    </fieldset>

    <Button text='Donate' onClick={() => stripe.redirectToCheckout({
            lineItems: [
                {price: selectedDonation, quantity: 1}
            ],
            mode: 'payment',
            successUrl: 'https://contestforliberty.com/success',
            cancelUrl: 'https://contestforliberty.com/',
        }).then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
        })
    }/>

</div>

<style>
    .popup {
        padding: .7em;
        flex-direction: column;
        display: flex;
        color: var(--dark);
        text-align: center;
    }


    fieldset {
        border: none;
    }

    legend {
        font-size: 20px;
    }
</style>

