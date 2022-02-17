<?php

namespace App\Transformers\Company;

use Illuminate\Http\Resources\Json\ResourceCollection;

use App\Services\ResponseService;

class CompanyResourceCollection extends ResourceCollection
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
      'url'    => route('company.index')
    ];
  }

  public function withResponse($request, $response)
  {
    $response->setStatusCode(200);
  }
}