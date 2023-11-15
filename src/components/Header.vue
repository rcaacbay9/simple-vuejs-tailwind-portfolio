<template>
    <div class="mb-4">
        <div class="flex justify-center">
            <RouterLink to="/" class="py-2 px-3 m-2 border-2 border-green-400 rounded-full hover:bg-green-400">
                Home
            </RouterLink>
            <RouterLink to="/about" class="py-2 px-3 m-2 border-2 border-green-400 rounded-full hover:bg-green-400">
                About
            </RouterLink>
            <RouterLink to="/projects" class="py-2 px-3 m-2 border-2 border-green-400 rounded-full hover:bg-green-400">
                Projects
            </RouterLink>
        </div>
        <hr class="border-1 border-red-600 my-8 mx-auto lg:w-1/2 md:w-1/3 sm:w-1/3">
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    components: { RouterLink }
}
</script>
