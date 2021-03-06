<?php

namespace App\Transformers\User;

use Illuminate\Http\Resources\Json\ResourceCollection;

use App\Services\ResponseService;

class UserResourceCollection extends ResourceCollection
{

  public function toArray($request)
  {  
    return ['data' => $this->collection];
  }

  public function with($request)
  {
    return [
      'status' => true,
      'msg'    => 'Listing data',
      'url'    => route('user.index')
    ];
  }

  public function withResponse($request, $response)
  {
    $response->setStatusCode(200);
  }
}