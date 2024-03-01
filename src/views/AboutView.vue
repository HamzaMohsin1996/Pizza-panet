<template>
    <div class="about">
        <section class="intro">
            <div class="info_text_wrapper">
                <h3> ~ Quality Pizza Over 30 Years  ~ </h3>
                <p class="info_text">
                    Nothing but the best quality ingradients, with a user friendly atmosphere. 
                </p>
            </div>
            <img src="../assets/images/calzone.jpg"  class="info_img" alt='calzone image'/>
        </section>
        <section class="more_info_wrapper">
            <h3> ~ Click on the links below for more info  ~ </h3>
            <nav>
                <ul>
                    <li>
                        <RouterLink :to="{name: 'historyLink'}" class="link">Our History</RouterLink>
                    </li>
                  
                    <li>
                        <RouterLink :to="{name: 'deliveryLink'}" class="link">Delivery</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{name: 'locationLink'}" class="link">Our Location</RouterLink>
                    </li>
                </ul>
            </nav>
            <RouterView></RouterView>
        </section>
    </div>
</template>