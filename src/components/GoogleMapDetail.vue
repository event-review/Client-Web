<template>
<GmapMap
  :center="{lat:Number(this.coordinates.latitude), lng:Number(this.coordinates.longitude)}"
  :zoom="17"
  map-type-id="terrain"
  style="width: 500px; height: 300px"
>
 <GmapMarker
    :position="{lat:Number(this.coordinates.latituded), lng:Number(this.coordinates.longitude)}"
    :clickable="true"
    :draggable="true"
    @click="center = {lat:Number(this.coordinates.latitude), lng:Number(this.coordinates.longitude)}"
  />

</GmapMap>
</template>
<script>
export default {
  props: ['coordinates']
}
</script>