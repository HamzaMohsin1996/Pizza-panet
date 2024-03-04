<script setup>
import { ref } from 'vue';
import useBasket from '../composibles/usebasket.js';
const allPizzas = ref([
{
        name:'Margherita',
        description: 'A delicious tomato based pizza toped with mozzeralla',
        options: [
            {size: 9, price: 6.95},
            {size: 12, price: 12.95},
        ]
    },
    {
        name:'Pepperoni ',
        description: ' A delicious tomato based pizza toped with mozzeralla & Pepperoni',
        options: [
            {size: 9, price: 9.95},
            {size: 12, price: 13.95},
        ]
    }
]);

const {basket,addToBasket,increaseQuantity,decreaseQuantity,total} = useBasket();

</script>

<template>
    <div class="menu_wrapper">
        <div class="menu">
            <h3> ~ Authentic handmade pizza  ~ </h3>
            <table>
                <tbody v-for="(pizza,index) in allPizzas" :key="index">
                    <tr>
                        <td> {{ pizza.name }}</td>
                    </tr>
                    <tr>
                        <td> 
                            <small>
                               {{ pizza.description }}
                            </small>
                        </td>
                    </tr>
                    <tr v-for="(option, index) in pizza.options" :key="option[index]">
                        <td> {{ option.size }}“</td>
                        <td> ${{ option.price }}</td>
                        <td> <button type="button" @click="addToBasket(pizza, option)">&#43;</button></td>

                    </tr>
                </tbody>
            </table>
        </div>
        <div class="basket">
            <h3> ~ Basket  ~ </h3>
            <table>
                <tbody v-for="(item, index) in basket " :key="index">
                    <tr>
                        <td>
                            <button @click="decreaseQuantity(item)" class="quantity_button" type="button">&#8722;</button>
                            <span>{{item.quantity}}</span>
                            <button @click="increaseQuantity(item)" class="quantity_button" type="button" >&#43;</button>
                        </td>
                        <td>
                            {{item.name}} {{item.size}}
                        </td>
                        <td> ${{item.price * item.quantity}}</td>
                    </tr>
                </tbody>
            </table>
            <p>Order Total:${{ total }} </p>
            <button type="button">Place Order</button>
        </div>
    </div>
</template>

<style scoped>
h3{
    text-align: center;
}
.menu_wrapper{
    display: flex;
    flex-direction: column;
    color: rgb(80,96,122);
}
.menu, .basket{
    background-color: #faf1e2;
    border-radius: 3px;
    height: 100vh;
    padding: 1rem;
}
.quantity_button{
    padding: 0.3rem;
    border: none;
}
@media (min-width: 900px) {
    .menu_wrapper{
    flex-direction: row;
    justify-content: space-between;

}
.menu{
    flex: 2;
    border-right:1px solid rgb(202, 202, 202) ;
}
.basket{
    flex: 1;
}
}
</style>