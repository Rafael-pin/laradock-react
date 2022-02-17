<?php

namespace App\Http\Requests\Address;

use App\Model\Address;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class StoreAddress extends FormRequest
{

    public function rules()
    {
        return [
            'cep'    => 'required',
            'number' => 'required',
        ];
    }

    public function withValidator($validator)
    {

        if ($validator->fails()) {
            throw new HttpResponseException(response()->json([
                'msg'    => 'Missing fields.',
                'status' => false,
                'errors' => $validator->errors(),
                'url'    => route('address.store')
            ], 403));
       }
    }
}