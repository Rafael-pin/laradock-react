<?php

namespace App\Transformers\Company;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Services\ResponseService;

class CompanyResource extends JsonResource
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
            'name' => $this->name,
            'cnpj' => $this->cnpj,
            'address_id' => $this->address_id
        ];
    }

    // public function with($request)
    // {
    //     return ResponseService::default($this->config, $this->id);
    // }

    // public function withResponse($request, $response)
    // {
    //     $response->setStatusCode(200);
    // }
}