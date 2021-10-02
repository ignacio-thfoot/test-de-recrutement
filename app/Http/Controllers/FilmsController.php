<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FilmsController extends Controller 
{
    public function list()
    {
        $films = Film::all();

        dd($customers);

        return view('films', [
            'films' => $films
        ]);
    }
}