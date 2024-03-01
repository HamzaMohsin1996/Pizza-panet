<template>

    <div class="menu_wrapper">
        <div class="menu">
            <h3> ~ Authentic handmade pizza  ~ </h3>
            <table>
                <tbody>
                    <tr>
                        <td> Margarita</td>
                    </tr>
                    <tr>
                        <td> 
                            <small>
                                A delicious tomato-based pizza topped with mozzeralla.
                            </small>
                        </td>
                    </tr>
                    <tr>
                        <td> 9“</td>
                        <td> $7.95</td>
                        <td> <button type="button">&#43;</button></td>

                    </tr>
                </tbody>
            </table>
        </div>
        <div class="basket">
            <h3> ~ Basket  ~ </h3>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <button class="quantity_button" type="button">&#8722;</button>
                            <span>1</span>
                            <button class="quantity_button" type="button">&#43;</button>
                        </td>
                        <td>
                            Margarita
                        </td>
                        <td> $7.95</td>
                    </tr>
                </tbody>
            </table>
            <p>Order Total:$87 </p>
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