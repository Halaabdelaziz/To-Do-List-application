<?php 
namespace App\Http\Repositories\API;

use App\Models\Todo;
use App\Http\Interfaces\API\TodoInterface;

class TodoRepository implements TodoInterface{

    public function index(){
        return Todo::all();
    }
    public function update($request, $id){

    }
    public function destroy($id){

    }
}