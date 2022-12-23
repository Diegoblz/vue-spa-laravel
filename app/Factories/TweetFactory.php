<?php

namespace App\Factories;

use Illuminate\Database\Eloquent\Factory;
use Illuminate\Support\Fluent;

class TweetFactory extends Factory
{
    protected $model = Fluent::class;



    public function definition()
    {
        return [
            'id' => $this->faker->randomNumber(),
            'text' => $this->faker->text(280),
            'created_at' => $this->faker->dateTime(),
        ];
    }

}
