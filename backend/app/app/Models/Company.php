<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{

    use HasFactory;

    protected $fillable = [
        'name',
        'cnpj',
        'address_id',
    ];

    protected $hidden = [
        'id'
    ];

    public function create($fields)
    {
        return parent::create([
            'name' => $fields['name'],
            'cnpj' => $fields['cnpj'],
            'address_id' => $fields['address_id'],
        ]);
    }

    public function users()
    {
        return $this->hasMany(Users::class);
    }

    public function address()
    {
        return $this->hasOne(Users::class);
    }

}
