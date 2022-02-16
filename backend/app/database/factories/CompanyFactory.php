<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CompanyFactory extends Factory
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
            'CNPJ' => $this->faker->numerify('##.###.###/####-##'),
            'address_id' => rand(1,10)
        ];
    }
}
