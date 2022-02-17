<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'number',
        'cep',
    ];

    protected $hidden = [
        'id',
        'created_at',
        'updated_at',
        'removed_at'
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
