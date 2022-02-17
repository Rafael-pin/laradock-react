<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;
use App\Http\Requests\Address\StoreAddress;
use App\Services\ResponseService;
use App\Transformers\Address\AddressResource;
use App\Transformers\Address\AddressResourceCollection;

use App\Transformers\User\UserResource;
class AddressController extends Controller
{
    private $address;

    public function __construct(Address $address)
    {
        $this->address = $address;
    }

    public function store(StoreAddress $request)
    {
        try{        

        $address = $this->address->create($request->all());

    }catch(\Throwable $e) {

        return ResponseService::exception('address.store', null, $e);

    }
    return new AddressResource($address, array('type' => 'store','route' => 'address.store'));
}

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Address  $address
     * @return \Illuminate\Http\Response
     */
    public function show(Address $address)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Address  $address
     * @return \Illuminate\Http\Response
     */
    public function edit(Address $address)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Address  $address
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Address $address)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Address  $address
     * @return \Illuminate\Http\Response
     */
    public function destroy(Address $Address)
    {
        //
    }
}
