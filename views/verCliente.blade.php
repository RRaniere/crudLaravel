<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ínicio</title>
</head>
<body>
    

<h1>Clientes</h1>


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








</body>
</html>