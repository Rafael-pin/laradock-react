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

    public function index()
    {
        return new UserResourceCollection($this->user->index());
    }

    public function get(Request $request)
    {
        try { 

            $user = User::findOrFail($request->route('id'));

        } catch(\Throwable $e) {

            return ResponseService::exception('UserController.get',$request->route('id'),$e);
        }

        return $user;
    }

    public function update(Request $request)
    {
        try { 

            $user = $this->get($request);

            $user->update($request->all());

        } catch(\Throwable $e) {

            return ResponseService::exception('UserController.update',$request->route('id'),$e);

        }

        return new UserResource($user, array('type' => 'update','route' => 'user.update'));

    }

    public function delete(Request $request)
    {
        try {

            $user = User::findOrFail($request->route('id'));

        } catch(\Throwable $e) {

            return ResponseService::exception('UserController.delete',$request->route('id'),$e);

        }

        return $user->delete() ? 'User deleated' : 'Error while deleating user';
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
