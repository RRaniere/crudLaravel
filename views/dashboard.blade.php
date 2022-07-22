<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js"></script>

    <link rel="stylesheet" href="/css/style.css">
    <title>Dashboard</title>
</head>
<body>

    <input type="checkbox" name="menuCheckBox" id="menuCheckBox">
    <label for="menuCheckBox">
        <img src="/img/botaoMenu.png" alt="botaoMenu" id="imgMenu">
    </label>

    <nav> 
        <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/cadastro-cliente">Cadastro cliente</a></li>
            <li><a href="/verCliente">Editar cliente</a></li>
        </ul>
    </nav>

    

    <div class="dashboard">

       <div class="cards">
             <div class="containerDashboard" id="quantidadeDeClientes">

                <div class="descricaoContainer"> 
                    <h2>Seus clientes:</h2>
                </div>

                <div class="dadosContainer"> 
                    <h1>{{$quantidadeDeClientes}}</h1>
                </div>
             
                <div class="icone">
                    <img src="/img/iconeCliente.svg" alt="iconeCliente" id="imgCliente" class="imgContainer" >
                </div>
                    <input type="submit" value="Ver Clientes" class="btnDashboard" onclick="location.href='/verCliente'">
                </div>

            

            <div class="containerDashboard" id="idadeClientes">
                <div class="descricaoContainer"> 
                    <h2>Média de idade:</h2>
                </div>
                <div class="dadosContainer"> 
                    <h1>{{$mediaIdade}}</h1>
                </div>
                <div class="icone">
                    <img src="/img/iconeIdade.svg" alt="iconeCliente" id="imgIdade"  class="imgContainer" >
                </div>
                    
            </div>

            <div class="containerDashboard" id="sexoClientes">
                <div class="descricaoContainer"> 
                    <h2>Sexo:</h2>
                </div>
                <div id="graficoSexo" style="height: 115px;"></div>            
             </div>
            </div>

            <table class="listaClientes">
                <tr>
                 <td>ID</td>
                 <td>Nome</td>
                 <td>Celular</td>
                 <td>Sexo</td>
                 <td>Idade</td>
                </tr>

                @foreach ($cliente as $clientes)
            <tr onclick="location.href='/editarCliente/{{$clientes -> id}}'">
                <td>{{$clientes -> id}}</td>
                <td>{{$clientes -> nome}}</td>
                <td>{{$clientes -> celular}}</td>
                <td>{{$clientes -> sexo}}</td>
                <td>{{$clientes -> idade}}</td>
            </tr>
                @endforeach
            </table>
    </div>

</body>

<script>
Morris.Donut({
    element: 'graficoSexo',
    data: [
      {label: "Masculino", value: {{$sexoMasculino}}},
      {label: "Feminino", value: {{$sexoFeminino}}},
    ]
  });
</script>



</html>