<?php

namespace App\Transformers\Address;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Services\ResponseService;

class AddressResource extends JsonResource
{

    private $config;

    public function __construct($resource, $config = array())
    {
        parent::__construct($resource);

        $this->config = $config;
    }
    
    public function toArray($request)
    {
      
        return [
            'cep'    => $this->cep,
            'number' => $this->number,
        ];
    }

//     public function with($request)
//     {
//         return ResponseService::default($this->config, $this->id);
//     }

//     public function withResponse($request, $response)
//     {
//         $response->setStatusCode(200);
//     }
}