<?php 
namespace App\Http\Interfaces\API;

interface TodoInterface{
    public function index();
    public function store($request);
    public function update($request,$id);
    public function destroy($id);
}