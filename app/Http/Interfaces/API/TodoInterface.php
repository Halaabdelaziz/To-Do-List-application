<?php 
namespace App\Http\Interfaces\API;

interface TodoInterface{
    public function index();
    public function update($request,$id);
    public function destroy($id);
}