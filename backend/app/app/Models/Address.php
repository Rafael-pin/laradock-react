<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $fillable = [
        'number',
        'cep',
    ];

    protected $hidden = [
        'id'
    ];

    public function create($fields)
    {
        return parent::create([
            'number' => $fields['number'],
            'cep' => $fields['cep'],
        ]);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
