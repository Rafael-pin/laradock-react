<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\User\StoreUser;
use App\Services\ResponseService;
use App\Transformers\User\UserResource;
use App\Transformers\User\UserResourceCollection;

class UserController extends Controller
{

    private $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function store(StoreUser $request)
    {
        try{        

            $user = $this->user->create($request->all());

        }catch(\Throwable $e) {

            return ResponseService::exception('user.store', null, $e);

        }

        return new UserResource($user, array('type' => 'store','route' => 'user.store'));
    
    }
}
