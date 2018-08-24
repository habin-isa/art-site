<template>
    <section class="single-image">
        <h1>{{ gal.title }}</h1>
        <div>
            <img class="gal-image" src="gal.thumbnail" alt="gal.title">
        </div>
        <p>{{ gal.descriptionText }}</p>
        <p>{{ gal.materialsText }}</p>
    </section>
</template>

<script>
export default {
    asyncData(context) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    gal: [
                        {
                            id: "1",
                            title: "Sinking the Berg",
                            // thumbnail: ""
                            descriptionText: "Graduate show work, award winner",
                            materialsText: "Actuators, Metal, Perspex, Arduino, Oil"
                        },
                        {
                            id: "2",
                            title: "First day",
                            // thumbnail: ""
                            descriptionText: "Site-specific installation",
                            materialsText: "Water containers, linen, rubber"
                        },
                        {
                            id: "3",
                            title: "Ctrl part III",
                            // thumbnail: ""
                            descriptionText: "BYSSO show piece",
                            materialsText: "Latex, Chalk, Peroxide, Ammonia, Dye"
                        }
                    ].find(el => el.id === context.params.id)
                }, 1500)
            })
        })
    }
}
</script>

