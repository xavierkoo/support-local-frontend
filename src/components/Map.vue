<template>
    <div class="MapComp">
        <!-- Insert API key later -->
        <GoogleMap
            api-key="AIzaSyDfdn9fMoKv9yEVRoFwvhWcgSr2UCkDCBE"
            style="width: 100%; height: 444px"
            :center="center"
            :zoom="15"
        >
            <Marker :options="{ position: center }" />
        </GoogleMap>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
//https://www.npmjs.com/package/vue3-google-map
// Takes in lat long (string)
export default defineComponent({
  name: "MapComp",
  components: { GoogleMap, Marker },
  props: {
    lat: {
      type: Number,
      default: 40.689247,
    },
    lng: {
      type: Number,
      default: -74.044502,
    },
  },
  setup(props) {
    const center = {
      lat: Number(props.lat),
      lng: Number(props.lng),
    };

    return { center };
  },
});
</script>
