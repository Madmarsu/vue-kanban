<template>
    <div class="spacer">

        <h1 class="text-center"> Login </h1>

        <form class="form-horizontal" @submit.prevent="login">
            <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">Name</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" v-model="username" id="inputEmail3" placeholder="Email">
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
                <div class="col-sm-6">
                    <input type="password" class="form-control" id="inputPassword3" v-model="password" placeholder="Password">
                </div>
            </div>
            <div class="col-sm-8">
                <button type="submit" class="btn btn-large btn-default" style="float:right;">sign in</button>
            </div>
        </form>
    </div>

</template>


<script>
    // import
    // import

    export default {
        name: 'login',
        data() {
            return {
                // Need to review
                // registrationMessage: '',
                // username: '',
                // email: '',
                // password: '',
                // user: {}
            }
        },
        methods: {
            loginUser: function () {

            }


        }
    }

</script>


<styles>


</styles>