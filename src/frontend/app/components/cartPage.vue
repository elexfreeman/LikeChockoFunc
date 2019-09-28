<template>
  <div class="cart_component">
    <div class="modal-body">
      <div class="content">
        <div class="columns">
          <div class="column col-sm-12 col-6 col-order">
            <div class="cart-caption-1">Оформление заказа</div>
            <div v-bind:class="{ 'has-error': errors['empty_user_name'] }" class="form-group">
              <label class="form-label">Ваше имя:</label>
              <input v-model="user.name" class="form-input" type="text" />
            </div>
            <div v-bind:class="{ 'has-error': errors['empty_user_phone'] }" class="form-group">
              <label class="form-label">Ваш телефон:</label>
              <input v-model="user.phone" class="form-input" type="text" />
            </div>
            <div class="form-group">
              <label class="form-label">Город:</label>
              <input v-model="order.city" class="form-input" type="text" placeholder="Город" />
            </div>
            <div class="form-group">
              <label class="form-label">Адрес доставки:</label>
              <input
                v-model="order.deliveryAddress"
                class="form-input"
                type="text"
                placeholder="Адрес доставки"
              />
            </div>
            <div class="form-group">
              <label class="form-label">День доставки:</label>
              <label class="form-radio">
                <input
                  v-model="order.deliveryDate"
                  type="radio"
                  value="day 1"
                  name="gender"
                  checked
                />
                <i class="form-icon"></i> В этот день
              </label>
              <label class="form-radio">
                <input v-model="order.deliveryDate" type="radio" value="day 2" name="gender" />
                <i class="form-icon"></i> или в этот
              </label>
            </div>
            <div class="form-group">
              <label class="form-label">Ваши пожелания ко времени доставки:</label>
              <input
                v-model="order.deliveryTimeComment"
                class="form-input"
                type="text"
                placeholder="Ваши пожелания ко времени доставки"
              />
            </div>
            <div class="form-group">
              <label class="form-label">Комментарий к заказу:</label>
              <input
                v-model="order.comment"
                class="form-input"
                type="text"
                placeholder="Комментарий к заказу"
              />
            </div>
          </div>
          <div class="column col-sm-12 col-6 col-cart">
            <div class="cart-caption-1">Корзина</div>
            <div v-bind:key="index" v-for="(item, index) in cart.products">
              <div class="columns cart-list">
                <div class="column col-5">
                  <img class="cart-img" v-bind:src="item.img" />
                </div>
                <div class="column col-7">
                  <div class="item-caption">{{item.caption}}</div>
                  <div class="item-buttons">
                    <div class="cart-counter">
                      <div class="conter-button" v-on:click="()=>countDec(item)">
                        <i class="icon icon-minus"></i>
                      </div>
                      <span>{{item.count}}</span>
                      <div class="conter-button" v-on:click="()=>countInc(item)">
                        <i class="icon icon-plus"></i>
                      </div>
                    </div>
                    <div v-on:click="()=>removeItem(item)" class="delete-button">
                      <i class="icon icon-delete"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <div v-if="cartFormError" class="error-msg-footer">Заполненны не все поля</div>
      <div class="cart-footer">
        <div class="total-price">Итого: {{totalPrice}} руб.</div>
        <div class="cart-button text-right">
          <button v-on:click="checkout" class="btn btn-primary btn-lg">Заказать</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import CartController from "../CartController";
const cartController = new CartController();

export default {
  name: "cartPage",

  data() {
    return {};
  }, // data

  mounted() {}, // mounted

  methods: {
    testCheck(e) {
      console.log(e);
    },
    onShowCart() {
      cartController.onShowCart();
    },
    onHideCart() {
      cartController.onHideCart();
    },
    countInc(item) {
      item.count++;
      this.$store.state.cart.save();
    },
    countDec(item) {
      if (item.count > 1) {
        item.count--;
        this.$store.state.cart.save();
      }
    },
    checkout() {
      cartController.checkout();
    },
    removeItem(item) {
      this.$store.state.cart.removeItem(item.id);
    }
  }, // methods

  computed: {
    phone() {
      return this.$store.state.phone;
    },
    showCart() {
      return this.$store.state.showCart;
    },
    cart() {
      return this.$store.state.cart;
    },
    order() {
      return this.$store.state.order;
    },
    user() {
      return this.$store.state.user;
    },
    errors() {
      return this.$store.state.cartErrors;
    },
    cartFormError() {
      return this.$store.state.cartFormError;
    },
    totalPrice() {
      return this.$store.state.cart.getTotalPrice();
    }
  }, // computed

  components: {} // components
};
</script>


<style lang="scss">
</style>
