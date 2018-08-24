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
import Gallery from '~/components/Gallery'

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
                            thumbnail: "http://www.jeromepauchant.com/cspdocs/artwork/images/nathaniel_rackowe_galerie_jerome_pauchant_75.jpg",
                            descriptionText: "Graduate show work, award winner",
                            materialsText: "Actuators, Metal, Perspex, Arduino, Oil"
                        },
                        {
                            id: "2",
                            title: "First day",
                            thumbnail: "http://jeromepauchant.com/cspdocs/artwork/images/nathaniel_rackowe_1975_galerie_jerome_pauchant_432.jpg",
                            descriptionText: "Site-specific installation",
                            materialsText: "Water containers, linen, rubber"
                        },
                        {
                            id: "3",
                            title: "Ctrl part III",
                            thumbnail: "http://www.jeromepauchant.com/cspdocs/artwork/images/nathaniel_rackowe_1975_galerie_jerome_pauchant_593.jpg",
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
