<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\TodoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::group(['middleware' => ['auth:sanctum',]],function(){
    Route::post('/logout',[AuthController::class,'logout']);
    Route::get('/all',[TodoController::class,'index']);
    Route::post('/add',[TodoController::class,'store']);
    Route::patch('/update/{id}',[TodoController::class,'update']);
    Route::delete('/delete/{id}',[TodoController::class,'destroy']);

});
Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);