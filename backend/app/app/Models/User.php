<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'birthdate',
        'city',
        'company_id'
    ];

    protected $hidden = [
        'id'
    ];

    protected $casts = [
        'birthdate' => 'datetime'
    ];

    public function create($fields)
    {
        return parent::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'phone' => $fields['phone'],
            'city' => $fields['city'],
            'birthdate' =>$fields['birthdate'],
            'company_id' => $fields['company_id'],
        ]);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
