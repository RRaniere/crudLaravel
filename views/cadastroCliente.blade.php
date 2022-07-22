<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ínicio</title>
</head>
<body>

<div class="containerCadastro">
    
<form id="formCadastro" method="POST" action="/cadastro-cliente" >
@csrf 
    <label>Nome</label><br>
        <input type="text" name="nome" id="txtNome" class="inputForm"><br>
    <label>Celular</label><br>
        <input type="text" name="celular" id="txtCelular" class="inputForm"><br>
    <label>Sexo</label><br>
    <select name="sexo" id="sexo" class="inputForm" placeholder="escolha">
        <option value="">Selecione o sexo</option>
        <option value="masculino">Masculino</option>
        <option value="feminino">feminino</option>
    </select><br>
    <label>Idade</label><br>
        <input type="text" name="idade" id="txtIdade" class="inputForm"><br><br>
        <input type="submit" value="Cadastrar cliente">
</form>
</div>

</body>
</html>