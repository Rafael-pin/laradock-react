<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Address extends Model
{
    use HasFactory;

    use SoftDeletes;

    public $timestamps = false;

    protected $fillable = [
        'number',
        'cep',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function create($fields)
    {
        return parent::create([
            'number' => $fields['number'],
            'cep' => $fields['cep'],
        ]);
    }

    public function index() 
    {
        return $this->all();
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
