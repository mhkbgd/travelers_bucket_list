<template>
  <div class="container row col-lg-12" style="margin-top: 50px;">

    <div class="col-lg-6" >
      
        <gmap-autocomplete
          @place_changed="setplace">
        </gmap-autocomplete>

        <button type="button" class="btn btn-primary" @click="addplace">Add Place</button>
      
    </div>
    

<!--Initializing map  -->
    <gmap-map ref="gmap"
      :center="center"
      :zoom="12"
      style="width:100%;  height: 800px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
    
  </div>

  
</template>
<script>
import router from '../router/index.js'
export default {
  name: 'index',
  data () {
    return {
      // default to Tartu to keep it simple
      // change this to whatever makes sense
      center: { lat: 58.3749923, lng: 26.69744 },
      markers: [],
      places: []
    }
  },

  mounted () {
    this.geolocate()
  },

  methods: {
    setplace(place) {
      this.currentPlace = place
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    },
    addplace: function () {
      
    },
    
    
    reload(){
      router.go()
    }
    
  }
}
</script>

<!-- styling for the component -->
<style>
#about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
