<template>
  <div style="display: none;">
    <slot v-if="ready"/>
  </div>
</template>

<script>
import propsBinder from '../utils/propsBinder.js';
import findRealParent from '../utils/findRealParent.js';
import { optionsMerger } from '../utils/optionsUtils.js';
import Circle from '../mixins/Circle.js';

export default {
  name: 'LCircle',
  mixins: [Circle],
  props: {
    latLng: {
      type: [Object, Array],
      default: () => []
    }
  },
  data () {
    return {
      ready: false
    };
  },
  mounted () {
    const options = optionsMerger(this.circleOptions, this);
    this.mapObject = L.circle(this.latLng, options);
    L.DomEvent.on(this.mapObject, this.$listeners);
    propsBinder(this, this.mapObject, this.$options.props);
    this.ready = true;
    this.parentContainer = findRealParent(this.$parent);
    this.parentContainer.addLayer(this, !this.visible);
  },
  methods: {}
};
</script>
