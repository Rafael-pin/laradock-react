<?php

namespace App\Transformers\User;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Services\ResponseService;

class UserResource extends JsonResource
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
            'email' => $this->email,
            'phone' => $this->phone,
            'city' => $this->city,
        ];
    }

    public function with($request)
    {
        return ResponseService::default($this->config, $this->id);
    }

    public function withResponse($request, $response)
    {
        $response->setStatusCode(200);
    }
}