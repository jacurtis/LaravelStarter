<?php

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*
         * Role Types
         *
         */
        $RoleItems = [
            [
                'name'          => 'Admin',
                'slug'          => 'admin',
                'description'   => 'Admin Role',
                'level'         => 20,
              ],
              [
                'name'          => 'Staff',
                'slug'          => 'staff',
                'description'   => 'Staff members can manage subscribers but not edit critical information',
                'level'         => 15,
              ],
              [
                'name'          => 'Observer',
                'slug'          => 'observer',
                'description'   => 'Observers have view-only access to Staff screens',
                'level'         => 10,
              ],
              [
                'name'          => 'User',
                'slug'          => 'user',
                'description'   => 'User Role',
                'level'         => 5,
              ],
              [
                'name'          => 'Inactive User',
                'slug'          => 'inactive',
                'description'   => 'User that is inactive due to canceling service or lapsed payments',
                'level'         => 1,
              ],
              [
                'name'          => 'Banned',
                'slug'          => 'banned',
                'description'   => 'Banned User',
                'level'         => 0,
              ],
        ];

        /*
         * Add Role Items
         *
         */
        foreach ($RoleItems as $RoleItem) {
            $newRoleItem = config('roles.models.role')::where('slug', '=', $RoleItem['slug'])->first();
            if ($newRoleItem === null) {
                $newRoleItem = config('roles.models.role')::create([
                    'name'          => $RoleItem['name'],
                    'slug'          => $RoleItem['slug'],
                    'description'   => $RoleItem['description'],
                    'level'         => $RoleItem['level'],
                ]);
            }
        }
    }
}
