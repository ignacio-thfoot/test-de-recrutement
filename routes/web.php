<?php

use Illuminate\Support\Facades\Route;

use App\Models\Film;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
   $films = Film::all();
   return view('films', [
      'films' => $films
   ]);
});

//search endpoint for autcomplete
Route::get('/search',function(){
   $query = Request::get('query');
   $users = Film::where('name','like','%'.$query.'%')
   ->orWhere('genre','like','%'.$query.'%')
   ->get();
   return response()->json($users);
});