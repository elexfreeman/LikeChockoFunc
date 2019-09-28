<template>
  <div class="toCart">
    <button v-on:click="onAddCart" class="btn btn-primary btn-lg">В корзину</button>
  </div>
</template>

<script lang='ts'>
import CartController from "../CartController";

const cartController = new CartController();

export default {
  name: "toCart",

  data() {
    return {};
  },

  mounted() {}, // mounted

  methods: {
    onAddCart(e:any) {
      cartController.onAddCart(this.$parent);
    }
  }, // methods

  computed: {}, // computed

  components: {} // components
};
</script>


<style lang="scss">
</style>
