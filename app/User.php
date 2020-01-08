<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use jeremykenedy\LaravelRoles\Traits\HasRoleAndPermission;
use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\SoftDeletes;
use Balping\HashSlug\HasHashSlug;

class User extends Authenticatable
{
    use Notifiable, HasRoleAndPermission, HasApiTokens, SoftDeletes, HasHashSlug;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'email', 'phone', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getNameAttribute()
    {
      return $this->first_name . ' ' . $this->last_name;
    }

    public function getSlugAttribute()
    {
      return $this->slug();
    }

    public function scopeOrderByName($query)
    {
      $query->orderBy('last_name')->orderBy('first_name');
    }

    public function scopeWhereRole($query, $role)
    {
      switch ($role) {
        case 'user':
          return $query;
        case 'staff':
          return $query;
      }
    }

    public function scopeFilter($query, array $filters)
    {
      $query->when($filters['search'] ?? null, function ($query, $search) {
        $query->where(function ($query) use ($search) {
          $query->where('first_name', 'like', '%' . $search . '%')
            ->orWhere('last_name', 'like', '%' . $search . '%')
            ->orWhere('email', 'like', '%' . $search . '%');
        });
      })->when($filters['role'] ?? null, function ($query, $role) {
        $query->whereRole($role);
      })->when($filters['trashed'] ?? null, function ($query, $trashed) {
        if ($trashed === 'with') {
          $query->withTrashed();
        } elseif ($trashed === 'only') {
          $query->onlyTrashed();
        }
      });
    }
}
