<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;

/*Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum')->group(function() {
    Route::post('logout', [AuthController::class, 'logout']);
});*/

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function (Request $request){
        return $request->user();
    });
    Route::post('logout', [AuthController::class, 'logout']);
    Route::apiResource('/users', UserController::class);
});

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);
