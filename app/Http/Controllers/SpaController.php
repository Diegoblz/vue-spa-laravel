<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Factories\TweetFactory;

class SpaController extends Controller
{
    public function index()
    {
        return view('spa');
    }
}
