<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;
use App\Http\Requests\Address\StoreAddress;
use App\Services\ResponseService;
use App\Transformers\Address\AddressResource;
use App\Transformers\Address\AddressResourceCollection;
class AddressController extends Controller
{
    private $address;

    public function index()
    {
        return new AddressResourceCollection($this->address->index());
    }

    public function get(Request $request)
    {
        $address = Address::findOrFail($request->route('id'));
 
        if (!$address) {
            throw new \Exception('Not found', -404);
        }

        return $address;
    }

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

    public function delete(Request $request)
    {
        $address = Address::findOrFail($request->route('id'));
 
        if (!$address) {
            throw new \Exception('Not found', -404);
        }

        return $address->delete() ? 'address deleated' : 'Error while deleating address';
    }

}
