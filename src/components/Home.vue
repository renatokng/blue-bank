<template>
  <div>

    <md-toolbar class="md-dense">
      <h2 class="md-title" style="flex: 1">Blue Bank</h2>
      <md-menu md-direction="bottom left">
      <md-button md-menu-trigger><md-icon>more_vert</md-icon></md-button>

      <md-menu-content>
      <md-menu-item>Sair</md-menu-item>
      </md-menu-content>
      </md-menu>
    </md-toolbar>

    <md-tabs md-fixed>
    <md-tab id="conta" md-label="Conta">
      <div class="app-box">

          <md-card>
            <md-card-header>
              <div id="titulo" class="md-title">Conta Corrente</div>
            </md-card-header>

            <md-card-content>
              <div class="saldo-card">
                <p>Saldo disponível</p>
                <p>R$ {{saldo}}</p>
              </div>
            </md-card-content>
          </md-card>

          <md-table-card>
            <md-toolbar>
              <h1 class="md-title">Ultimas Transacões</h1>
            </md-toolbar>

            <md-table md-sort="dessert" md-sort-type="desc" @select="onSelect" @sort="onSort">
              <md-table-header>
                <md-table-row>
                  <md-table-head md-sort-by="data-operacao">Data</md-table-head>
                  <md-table-head md-sort-by="nome-estabelecimento" md-numeric md-tooltip="Veja aqui o nome dos lançamentos">Descrição(g)</md-table-head>
                  <md-table-head md-sort-by="valor-operacao" md-numeric>Valor</md-table-head>
                  <md-table-head md-sort-by="despesa-credito" md-numeric>Tipo</md-table-head>
                </md-table-row>
              </md-table-header>

              <md-table-body>
                <md-table-row v-for="(row, rowIndex) in nutrition" :key="rowIndex" :md-item="row" md-auto-select md-selection>
                  <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex" :md-numeric="columnIndex !== 'dessert' && columnIndex !== 'comment'" v-if="columnIndex !== 'type'">
                    {{ column }}
                  </md-table-cell>
                </md-table-row>
              </md-table-body>
            </md-table>

            <md-table-pagination
              md-size="5"
              md-total="10"
              md-page="1"
              md-label="Rows"
              md-separator="of"
              :md-page-options="[5, 10, 25, 50]"
              @pagination="onPagination"></md-table-pagination>
          </md-table-card>
      </div>
    </md-tab>

    <md-tab id="transferecia" md-label="transferencia">
      <div class="app-box">
          <md-card>
            <md-card-header>
              <div id="titulo" class="md-title">Conta Corrente</div>
            </md-card-header>

            <md-card-content>
              <div class="saldo-card">
                <div class="mand">
                  <p>Saldo Disponivel</p>
                  <p>R$ {{saldo-valorDeposito}}</p>
                </div>
              </div>
            </md-card-content>

            <div class="input-tr">
                <md-input-container>
                  <label>Conta & agencia</label>
                  <md-input placeholder="Conta a Depositar"></md-input>
                </md-input-container>
            </div>

             <div class="input-tr">
                <md-input-container>
                  <label>Insira o valor</label>
                  <md-input v-model="valorDeposito"  type=number placeholder="Confira o valor"></md-input>
                </md-input-container>
            </div>
          </md-card>
      </div>
    </md-tab>
    </md-tabs>
    
  </div>
</template>

<script>
  export default {
    name: 'Home',
    history: true,
    data () {
      return {
        saldo: '400.50',
        nomeTitular: 'Renato Alves',
        deposito: '3200'
      }
    }
  }
</script>

<style>

  .input-tr{
    width: 40%;
    padding: 20px;
  }

  .mand{
    text-align: left;
  }

  .dest{
    text-align: right;
  }

  #titulo{
    margin-left: 20px;
  }  

  .saldo-card{
    text-align: end;
    font-size: 1.4em;
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }
  
  .form-box {
    margin-top: 10%;
    width: 90%;
    max-width: 420px;
  }
  
  .app-box {
    margin: 0 auto;
    max-width: 1280px;
    width: 90%;
  }
  
  @media only screen and (min-width: 601px) {
    .app-box {
      width: 85%;
    }
  }
  
  @media only screen and (min-width: 993px) {
    .app-box {
      width: 70%;
    }
  }
</style>