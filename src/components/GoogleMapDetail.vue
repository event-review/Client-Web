<template>
<GmapMap
  :center="{lat:-6.2607, lng:106.7816}"
  :zoom="20"
  map-type-id="terrain"
  style="width: 500px; height: 300px"
>
 <GmapMarker
    :position="{lat:-6.2607, lng:106.7816}"
    :clickable="true"
    :draggable="true"
    @click="center = {lat:-6.2607, lng:106.7816}"
  />

</GmapMap>
</template>
<script>
export default {

}