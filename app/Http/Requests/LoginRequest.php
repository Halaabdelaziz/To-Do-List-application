<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            //
            'email'=>'required|email',
            'password'=>'required'

        ];
    }
    public function messages()
    {
        return [
            //
            'email.required'=>'You must enter your email',
            'email.email'=>'You must enter a valid email',
            'password.required'=>'You must enter your password',
        ];
    }
}
