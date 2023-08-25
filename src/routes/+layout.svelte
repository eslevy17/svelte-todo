<style>
    :root {
        --grey1:  rgb(240, 240, 240);
        --grey2:  rgb(220, 220, 220);
        --grey3:  rgb(200, 200, 200);
        --grey4:  rgb(180, 180, 180);
        --grey5:  rgb(160, 160, 160);
        --grey6:  rgb(140, 140, 140);
        --grey7:  rgb(120, 120, 120);
        --grey8:  rgb(100, 100, 100);
        --grey9:  rgb( 80,  80,  80);
        --grey10: rgb( 60,  60,  60);
        --grey11: rgb( 40,  40,  40);
        --grey12: rgb( 20,  20,  20);

        --font-color: var(--grey3);
        --bg-color: var(--grey11);

        --border-color: var(--grey8);
        --border-radius: .3rem;
    }

    :global(body) {
        font-family: Lato, Verdana, sans-serif;
        color: var(--font-color);
        background-color: var(--bg-color);
    }

    :global(input) {
        background: var(--bg-color);
        background-color: var(--bg-color);
        border: 1px solid var(--border-color);
        color: var(--font-color);
        border-radius: var(--border-radius);
        padding: .2rem .5rem;
        box-sizing: border-box;
    }

    :global(input[type=checkbox]) {
        filter: saturate(0);
    }

    :global(select) {
        background: var(--bg-color);
        color: var(--font-color);
        border-radius: var(--border-radius);
    }
</style>

<slot />