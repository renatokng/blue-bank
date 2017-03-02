<template>
  <main md-tag="main">

    <md-toolbar>
      <h2 class="md-title" style="flex: 1">Blue Bank</h2>

      <md-menu md-direction="bottom left" md-size="4">
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon>more_vert</md-icon>
        </md-button>
        <md-menu-content>
          <md-menu-item>
            <span>Sair</span>
            <md-icon>exit_app</md-icon>
          </md-menu-item>
        </md-menu-content>
      </md-menu>
    </md-toolbar>

    <md-tabs md-fixed>
      <md-tab id="Conta Corrente" md-label="Conta Corrente">

        <md-layout md-column id="container" md-tag="section">

          <md-card md-with-hover>
            <md-card-header>
              <h1 class="md-title">Conta Corrente</h1>
              <h2 class="md-subhead">detalhes da sua conta</h2>
            </md-card-header>
            <md-card-content>
              <h3 class="md-title saldo"><span class="saldo-span">Seu saldo atual:</span> R$ {{saldo}}</h3>
            </md-card-content>
          </md-card>

          <md-table-card>
            <md-table v-once>
              <md-table-header>
                <md-table-row>
                  <md-table-head>Data</md-table-head>
                  <md-table-head>Descrição</md-table-head>
                  <md-table-head>Valor</md-table-head>
                  <md-table-head>Tipo</md-table-head>
                </md-table-row>
              </md-table-header>

              <md-table-body>
                <md-table-row v-for="(row, rowIndex) in extrato" :key="rowIndex" :md-item="row">
                  <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex" v-if="columnIndex !== 'type'">
                    {{column}}
                  </md-table-cell>
                </md-table-row>
              </md-table-body>
            </md-table>
            <md-table-pagination md-size="5" md-total="10" md-page="1" md-label="Rows" md-separator="of" :md-page-options="[5, 10]" @pagination="onPagination">
            </md-table-pagination>
          </md-table-card>
        </md-layout>

      </md-tab>

      <md-tab id="Transferencia" md-label="Transferencia">

        <md-layout md-column-xsmall md-column-small md-row-medium id="container" md-tag="section">
          <md-layout class="sua-conta" md-flex="50">

            <md-card md-with-hover>
              <md-card-header>
                <h1 class="md-title">Sua Conta</h1>
                <p>Seu saldo disponivel {{subtrairSaldo}}</p>
              </md-card-header>

              <md-card-content>
                <md-input-container>
                  <label>Valor Transferencia</label>
                  <md-input required type=number v-model="valorTf" placeholder="Valor"></md-input>
                </md-input-container>
              </md-card-content>


              <md-card-content id="base-input">

                <md-input-container class="item-2">
                  <label>Conta Destino</label>
                  <md-input type=number maxlength=6 placeholder="Conta"></md-input>
                </md-input-container>

                <md-input-container class="item-1">
                  <label>Agencia Destino</label>
                  <md-input type=number maxlength=4 placeholder="Agencia"></md-input>
                </md-input-container>

              </md-card-content>

            </md-card>

          </md-layout>

          <md-layout class="sua-conta">
            <md-card md-with-hover>
              <md-card-header>
                <h1 class="md-title">Conta Destino</h1>
                <p>Valor da Transferencia
                  <h1 class="md-title">R${{valorTf}}</h1>
                </p>
              </md-card-header>

              <md-card-content>
                <div class="md-subhead">
                  <p>Faça conferência dos dados do titular antes de confirmar</p>
                  <p>Titular: {{nomeDest}}</p>
                  <p>CPF: {{cpf}}</p>
                </div>


                <md-button class="md-raised md-primary">Transferir</md-button>
              </md-card-content>
            </md-card>
          </md-layout>
        </md-layout>
      </md-tab>
    </md-tabs>

  </main>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        nome: 'Renato',
        saldo: 453.59,
        valorTf: 0,
        cpf: 32154678980,
        nomeDest: 'Felipe',
        contaDestino: 171139,
        agDestino: 7997,
        extrato: [
          {
            Data: '10/02/2017',
            Descrição: 'Compra Extra',
            Valor: 302.60,
            Tipo: 'debito'
          },
          {
            Data: '01/02/2017',
            Descrição: 'Sabesp',
            valor: 168.70,
            Tipo: 'debito'
          },
          {
            Data: '06/02/2017',
            Descrição: 'Deposito Patricia',
            valor: 600.00,
            Tipo: 'credito'
          },
          {
            Data: '23/02/2017',
            Descrição: 'Mc Donalds',
            Valor: 40.20,
            Tipo: 'debito'
          },
          {
            Data: '03/02/2017',
            Descrição: 'Vivo Fixo',
            valor: 189.90,
            Tipo: 'debito'
          },
          {
            Data: '15/02/2017',
            Descrição: 'Adiantamente Salario',
            valor: 2206.70,
            Tipo: 'credito'
          }
        ],
      }
    },
    computed: {
      subtrairSaldo: function () {
        return 'R$ ' + (this.saldo - this.valorTf).toFixed(2);
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    cursor: pointer;
    display: block;
    width: 8px;
    color: #333;
    text-align: center;
    position: relative;
  }
  
  .sua-conta {
    margin: 8px;
  }
  
  #base-input {
    display: flex;
    padding: 20px;
  }
  
  .item-1 {
    flex: 1;
    margin-left: 4px;
    margin-right: 4px;
  }
  
  .item-2 {
    flex: 2;
    margin-left: 4px;
    margin-right: 4px;
  }
  
  .saldo-span {
    text-align: right;
    font-size: 1em;
  }
  
  .saldo {
    text-align: right;
    font-size: 1.4em;
  }
  
  #container {
    width: 90%;
    max-width: 960px;
    margin: 0 auto;
  }
</style>