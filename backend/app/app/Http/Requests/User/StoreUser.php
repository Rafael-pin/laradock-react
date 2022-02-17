<?php

namespace App\Http\Requests\User;

use App\Model\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class StoreUser extends FormRequest
{

    public function rules()
    {
        return [
            'email'      => 'unique:users,email|email|required',
            'name'       => 'required',
            'company_id' => 'required|exists:companies,id',
        ];
    }

    public function withValidator($validator)
    {

        if ($validator->fails()) {
            throw new HttpResponseException(response()->json([
                'msg'    => 'Missing fields.',
                'status' => false,
                'errors' => $validator->errors(),
                'url'    => route('user.store')
            ], 403));
       }
    }
}