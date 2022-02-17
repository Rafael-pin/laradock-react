<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Company extends Model
{

    use HasFactory;

    use SoftDeletes;

    protected $fillable = [
        'name',
        'cnpj',
        'address_id',
    ];

    protected $hidden = [
        'id',
        'created_at',
        'updated_at',
        'deleted_at',
        'address_id'
    ];

    public function create($fields)
    {
        return parent::create([
            'name' => $fields['name'],
            'cnpj' => $fields['cnpj'],
            'address_id' => $fields['address_id'],
        ]);
    }

    public function index() 
    {
        return $this->all();
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
