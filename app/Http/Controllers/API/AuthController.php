<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Http\Interfaces\API\AuthInterface;

class AuthController extends Controller
{
    //
    protected $_AuthInterface;
    public function __construct(AuthInterface $AuthInterface){
        $this->_AuthInterface = $AuthInterface;
    }

    public function register(RegisterRequest $request){
        return $this->_AuthInterface->register($request);
    }

    public function login(LoginRequest $request){
        return $this->_AuthInterface->login($request);
    }
    public function logout(Request $request){
       
        return $this->_AuthInterface->logout($request);
    }
}
