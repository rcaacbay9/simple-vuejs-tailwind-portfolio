<template>
    <div class="text-center mb-4">
        Projects at <font-awesome-icon icon="fa-brands fa-github" class="text-2xl" />
    </div>
    <div class="max-h-[50vh] overflow-auto mx-auto lg:w-1/2 md:w-1/3 sm:w-1/3">
        <Loader v-if="loading" />
        <div v-for="(project, index) in projects" :key="project.id">
            <a :href="project.html_url" target="_blank">
                <div class="bg-gray-300 font-bold rounded-lg mb-2">
                    <div class="text-xl p-2">{{ ++index }}. {{ project.name }} </div>
                    <div class="text-sm ml-5">{{ project.description }} </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Loader from '../components/Loader.vue';
export default {
    components: {
        Loader
    },
    data() {
        return {
            loading: false,
            error: [],
            projects: []
        }
    },
    async mounted() {
        this.loading = true;
        axios.get('https://api.github.com/users/rcaacbay9/repos').then(result => {
            this.projects = result.data;
            this.loading = false;
        }).then(error => {
            console.log(error)
            this.loading = false;
        })
    },
}
</script>

<style></style>