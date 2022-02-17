<?php

namespace App\Http\Requests\Company;

use App\Model\Company;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class StoreCompany extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'    => 'required',
            'cnpj' => 'required|unique:companies,cnpj',
            'address_id' => 'required|exists:addresses,id'
        ];
    }

    /**
     * Configure the validator instance.
     *
     * @param  \Illuminate\Validation\Validator  $validator
     * @return void
     */
    public function withValidator($validator)
    {

        if ($validator->fails()) {
            throw new HttpResponseException(response()->json([
                'msg'    => 'Missing fields.',
                'status' => false,
                'errors' => $validator->errors(),
                'url'    => route('company.store')
            ], 403));
       }
    }
}