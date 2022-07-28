<?php

use Illuminate\Support\Facades\Route;

use App\Models\Cliente;
use Illuminate\Http\Request;

Route::get('/', function () {

    $cliente = Cliente::get();

    $quantidadeDeClientes = Cliente::count();
    
    $somaIdade = Cliente::sum('idade');
    $mediaIdade = round($somaIdade/$quantidadeDeClientes);
 
    $listaSexoMasculino = Cliente::where('sexo', '=' , 'masculino')->get();
    $sexoMasculino = count($listaSexoMasculino);

    $listaSexoFeminino = Cliente::where('sexo', '=' , 'feminino')->get();
    $sexoFeminino = count($listaSexoFeminino);
    
    return view('dashboard', [
        
        'quantidadeDeClientes' => $quantidadeDeClientes, 
        'mediaIdade' => $mediaIdade, 
        'sexoMasculino' => $sexoMasculino,
        'sexoFeminino' => $sexoFeminino,
        'cliente' => $cliente
                            
    ]);

});

Route::get('/cadastro-cliente', function () {
    return view('cadastroCliente');
});

Route::post('/cadastro-cliente', function (Request $request) {
    Cliente::create([ 
        'nome' => $request->nome,
        'celular' => $request->celular,
        'sexo' => $request->sexo,
        'idade' => $request->idade
    ]);

    echo  "<script>alert('Cliente cadastrado com sucesso');</script>";
    return view('cadastroCliente');
});

Route::get('/verCliente', function () { 
    $cliente = Cliente::get();
    return view('verCliente', ['cliente' => $cliente]);
});

Route::get('/editarCliente/{id}', function ($id) { 
    $cliente = Cliente::find($id);  
    return view('editarCliente', ['cliente' => $cliente]);
});

Route::post('/editarCliente/{id}', function (Request $request, $id) {

    $cliente = Cliente::find($id); 

    $cliente->update([ 
        'nome' => $request->nome,
        'celular' => $request->celular,
        'sexo' => $request->sexo,
        'idade' => $request->idade
    ]);

    echo  "<script>alert('Cliente atualizado com sucesso');</script>";
    $cliente = Cliente::get();
    return view('verCliente', ['cliente' => $cliente,]);
    });

Route::post('/deleteCliente/{id}', function ($id) {

    $cliente = Cliente::find($id); 
    $cliente->delete();

    echo  "<script>alert('Cliente excluído com sucesso');</script>";
    $cliente = Cliente::get();
    return view('verCliente', ['cliente' => $cliente,]);
    });

    

