<template>
    <md-layout md-flex="50" md-align="center" id="login">

        <md-card md-with-hover>

            <md-card-media md-medium>
                <img src="../assets/blue-bank-logo.png" alt="Logo">
            </md-card-media>

            <md-card-content>
                <form novalidate @submit.stop.prevent="submit">
                    <md-input-container id="input-login">
                        <label>Conta</label>
                        <md-input v-model="initialValue" maxlength="6"></md-input>
                    </md-input-container>

                    <md-input-container md-has-password>
                        <label>Senha</label>
                        <md-input type="password"></md-input>
                    </md-input-container>
                </form>

            </md-card-content>
            <md-card-expand>
                <md-card-actions>
                    <md-button>Entrar</md-button>
                    <md-button class="md-icon-button" md-expand-trigger>
                        <md-icon>keyboard_arrow_down</md-icon>
                    </md-button>
                </md-card-actions>

                <md-card-content>
                    Em caso de perda de senha falar com seu gerente de contas
                </md-card-content>
            </md-card-expand>
            </md-card>
    </md-layout>
</template>

<script>
    export default {
        name: 'Login',
        history: true,
        data() {
            return {
                msg: 'Entre com sua conta e senha'
            }
        }
    }

</script>

<style>
    #login {
        margin-top: 6%;
    }
</style>