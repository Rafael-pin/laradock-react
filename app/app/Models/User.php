<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Factories\HasFactory;

class User extends Authenticatable
{
    // use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'birthdate',
        'city',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'birthdate' => 'datetime',
        'email' => 'email'
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
