<template>
    <nav class="blue darken-4" role="navigation">
        <div class="nav-wrapper">
            <a id="logo-container" href="#" class="brand-logo center"><img src="../assets/images/kanban-concept.jpg" style="height: 60px; vertical-align: middle; margin-top: -7px;"> Kanban Manager</a>
            <ul v-if="!user._id" class="right hide-on-med-and-down">
                <li>
                    <router-link to="/login">Login</router-link>
                </li>
                <li>
                    <router-link to="/register">Register</router-link>
                </li>
            </ul>
            <ul v-if="user._id" class="right hide-on-med-and-down">
                <li>
                    Welcome, {{ user.name }}!
                </li>
                <li>
                    <a @click="logout">Logout</a>
                </li>
            </ul>

            <ul id="nav-mobile" class="side-nav">
                <li>
                    <router-link to="/login">Login</router-link>
                </li>
                <li>
                    <router-link to="/register">Register</router-link>
                </li>
            </ul>
            <!--<ul v-if="this.$root.user._id" id="nav-mobile" class="side-nav">
            <li>
                Welcome, {{ this.$root.user.name }}!
            </li>
            <li>
                Logout
            </li>
        </ul>-->
            <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
        </div>
    </nav>

</template>


<script>
    // import
    // import

    export default {
        name: 'nav',
        computed: {
            user(){
                return this.$root.$data.store.state.user
            }
        },
        methods: {
            logout(){
                this.$root.$data.store.actions.logout();
                this.$router.push({path: '/'})
            }
        }

    }

</script>


<styles>


</styles>