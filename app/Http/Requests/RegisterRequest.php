<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
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
            'name'=>'required|max:255',
            'email'=>'required|email|max:255|unique:users',
            'password'=>'required|min:6|confirmed'
        ];
    }
    public function messages()
    {
        return [
            //
            'name.required'=>'You must enter your name',
            'email.required'=>'You must enter your email',
            'email.email'=>'You must enter a valid email',
            'email.unique'=>'this email is taken before',
            'password.required'=>'You must enter your password',
            'password.min'=>'min character is 6',
            'password.confirmed'=>'password does not match'
        ];
    }
}
