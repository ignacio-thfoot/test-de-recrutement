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
Route::get('/autocomplete',function(){
   $query = Request::get('query');
   $resultsName = Film::where('name','like','%'.$query.'%')->get()->toArray();
   $resultsGenre = Film::where('genre','like','%'.$query.'%')->get()->toArray();
   
   return response()->json(array_merge(array_unique(array_column($resultsName, 'name')), array_unique(array_column($resultsGenre, 'genre'))));
   
});

//search endpoint for autcomplete
Route::get('/search',function(){
   $query = Request::get('query');
   $films = Film::where('name','like','%'.$query.'%')
   ->orWhere('genre','like','%'.$query.'%')
   ->get();
   
   return response()->json($films);
});

Auth::routes();
