<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'phone' => $this->faker->numerify('##-#####-####'),
            'birthdate' => $this->faker->dateTimeThisCentury(),
            'city' => $this->faker->address(),
            'company_id' => rand(1,10)
        ];
    }
}
