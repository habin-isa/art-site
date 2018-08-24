<template>
  <section class="gallery">
      <Gallery
        v-for="gal in gallery"
        :key="gal.id"
        :title="gal.title"
        :thumbnail="gal.thumbnail"
        :descriptionText="gal.descriptionText"
        :materialsText="gal.materialsText"
      />
  </section>
</template>

<script>
import Gallery from '~/components/Gallery.vue'

export default {
    components: {
        Gallery
    },
    asyncData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    gallery: [
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
                        },
                    ]
                }, 1500)
            })
        })
    }
}
</script>
