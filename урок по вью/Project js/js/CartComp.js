const cartItem = {
    props: ['img', 'product'],
    template: `
            <div class="cart-item">
                <div class="product-bio">
                    <img :src="img" alt="Some image">
                    <div class="product-desc">
                        <p class="product-title">{{ product.product_name }}</p>
                        <p class="product-quantity">Quantity: {{ product.quantity }}</p>
                        <p class="product-single-price">{{ product.price }} $</p>
                    </div>
                </div>
                <div class="right-block">
                    <p class="product-price">{{ product.quantity * product.price }}</p>
                    <button class="del-btn" @click="$root.$refs.cart.remove(product)">&times;</button>
                </div>
            </div>
        `
}

const cart = {
    components: {'cart-item': cartItem},
    data () {
        return {
            cartUrl: '/getBasket.json',
            imgCart: 'https://placehold.it/50x100',
            cartShown: false,
            cartItems: []
        }
    },
    mounted () {
        this.$parent.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for(let el of data.contents){
                    this.cartItems.push(el);
                }

            });
        // console.log(this.cartItems);
    },
    methods: {
        addProduct (product) {
            this.$parent.getJson(`${API}/addToBasket.json`)
            .then(data => {
                if(data.result){
                    let find = this.cartItems.find(el => el.id_product === product.id_product);
                    if(find){
                        find.quantity++;
                    } else {
                        let prod = Object.assign ({quantity: 1}, product)
                        this.cartItems.push(prod);
                    }
                } else {
                    console.log('Some error')
                }
            })
        },

        remove(product) {
            this.$parent.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if(data.result){
                        let foundGood = this.cartItems.find(el => el.id_product === product.id_product);
                        if(foundGood.quantity > 1){
                            foundGood.quantity--;
                        } else if (foundGood.quantity == 1) {
                            this.cartItems = this.cartItems.filter(el => el.id_product !== product.id_product);
                        }
                    } else {
                        console.log('Some error')
                    }
                })
        }
    },
    template: `
    <div>
        <button class="btn-cart" type="button" @click="cartShown = !cartShown">Корзина</button>
        <div class="cart-block" v-show="cartShown">
            <cart-item 
            v-for="product of cartItems"
            :img="imgCart"
            :product="product"
            :key="product.id_product"
            ></cart-item>
        </div>
    </div>
    `
}