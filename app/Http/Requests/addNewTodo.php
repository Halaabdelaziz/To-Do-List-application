<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class addNewTodo extends FormRequest
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
            'name'=>'required',
            'description'=>'required',
            'status'=>'required'

        ];
    }
    public function messages()
    {
        return [
            //
            'name.required'=>'You must enter name of todo',
            'description.required'=>'You must enter the description of todo',
            'status.required'=>'You must enter status of todo within "in progress,completed,not started"',
        ];
    }
}
