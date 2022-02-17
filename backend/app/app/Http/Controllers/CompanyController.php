<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use App\Http\Requests\Company\StoreCompany;
use App\Services\ResponseService;
use App\Transformers\Company\CompanyResource;
use App\Transformers\Company\CompanyResourceCollection;

class CompanyController extends Controller
{

    private $company;

    public function __construct(Company $company)
    {
        $this->company = $company;
    }

    public function index()
    {
        return new CompanyResourceCollection($this->company->index());
    }

    public function get(Request $request)
    {
        $company = Company::findOrFail($request->route('id'));
 
        if (!$company) {
            throw new \Exception('Not found', -404);
        }

        return $company;

    }
   
    public function store(StoreCompany $request)
    {
        try{        

            $company = $this->company->create($request->all());

        }catch(\Throwable $e) {

            return ResponseService::exception('company.store', null, $e);

        }

        return new CompanyResource($company, array('type' => 'store','route' => 'company.store'));
    
    }

}
