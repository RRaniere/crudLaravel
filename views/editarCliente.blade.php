<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ínicio</title>
</head>
<body>
    
<form method="POST" action="/editarCliente/{{ $cliente->id }}" >

@csrf 

<label>Nome</label><br>
        <input type="text" name="nome" id="txtNome" class="inputForm" value = "{{ $cliente->nome }}"><br>
    <label>Celular</label><br>
        <input type="text" name="celular" id="txtCelular" class="inputForm" value = "{{ $cliente->celular }}"><br>
    <label>Sexo</label><br>
        <input type="text" name="sexo" id="txtSexo" class="inputForm" value = "{{ $cliente->sexo }}"><br>
    <label>Idade</label><br>
        <input type="text" name="idade" id="txtIdade" class="inputForm" value = "{{ $cliente->idade }}"><br><br>
        <input type="submit" value="Atualizar cadastro">
        <input type="submit" value="Apagar cliente " formaction="/deleteCliente/{{ $cliente->id }}">
</form>



</body>
</html>