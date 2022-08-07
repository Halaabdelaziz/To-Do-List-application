<?php 
namespace App\Http\Repositories\API;

use App\Models\Todo;
use Illuminate\Support\Facades\Auth;
use App\Http\Interfaces\API\TodoInterface;

class TodoRepository implements TodoInterface{
    // method to show todo list of login user
    public function index(){
        $id = Auth::user()->id;
        if(!$id){
            return response()->json([
                'error'=>'user not found'
            ]);
        }
        $todos = Todo::where('user_id',$id)->get();
        return $todos;
        // return response()->json([
        //     'todoes'=>$todos
        // ]);
    }

    // method to save new record in todo table
    public function store($request){
        Todo::create([
            'name'=>$request->name,
            'description'=>$request->description,
            'start_date'=>$request->start_date,
            'status'=>$request->status,
            'user_id'=>Auth::user()->id
        ]);
    
        return response()->json([
            'todo'=>'new todo is created successfully'
        ]);
    }
    public function edit($id){
        $todo = Todo::find($id);
        return $todo;

    }
    // method to update exist record of todo by id
    public function update($request,$id){
        $todo = Todo::find($id);
        if(!$todo){
            return response()->json([
                'error'=>'todo is not found !'
            ]);
        }
        if($request->name){
            $todo->name = $request->name;
        }
        if($request->description){
            $todo->description = $request->description;
        }
        if($request->start_date){
            $todo->start_date = $request->start_date;
        }
        if($request->status){
            $todo->status = $request->status;
        }
        $todo->save();
        return response()->json([
            'todo'=>'todo is updated successfully'
        ]);
    }

    // method to delete todo by id
    public function destroy($id){
        if(!$id){
            return response()->json([
                'error'=>'todo is already deleted!'
            ]);
        }
        Todo::destroy($id);
        return response()->json([
            'todo'=>'todo is deleted successfully'
        ]);
    }
}